/**
 * Documentación de la API Mentores,
 * sigue el estandar OpenAPI 3.0.0.
 * para conocer más sobre el estandar OpenAPI 3.0.0
 * revisar {@link https://spec.openapis.org/oas/v3.1.0}
 * y {@link https://swagger.io/docs/specification/about/},
 *
 * @module configuracion swagger
 */

const swaggerJsDoc = require("swagger-jsdoc");

/**
 * Configuración basica de la API,
 * se definen los esquemas para las peticiones,
 * @typedef {Object} swaggerDefinition
 */
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "API Mentores",
      version: "1.2.0",
    },
    servers: [
      {
        url: "http://localhost:{port}",
        description: "Entorno de desarrollo (usa mock data)",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        },
      },
      schemas: {
        user: {
          type: "object",
          required: ["id", "name", "email", "job", "description"],
          properties: {
            id: {
              type: "string",
              description: "documento de identidad del usuario",
              example: "1001188546",
            },
            name: { type: "string", example: "Santiago Jiménez Pinedo" },
            email: {
              type: "string",
              format: "email",
              example: "example@gmail.com",
            },
            job: {
              type: "string",
              description: "Job of the mentor",
              example: "Ingeniero Informático",
            },
            description: {
              type: "string",
              description: "Description of the mentor",
              example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
          },
        },
      },
    },
  };
  
  /**
   * Configuraciones adicionales para swagger
   * @typedef {Object} swaggerOptions
   * @property {Object} swaggerDefinition - configuración basica de la API
   * @property {Object} apis - rutas de la API
   */
  const swaggerOptions = {
    swaggerDefinition,
    apis: ["./routes/*.js"],
  };
  
  module.exports = swaggerJsDoc(swaggerOptions);
  