/**
 * Model for mentor, methods and utilities for mentor
 * @module Mentor
 */

//Database
const db = require("../config/db");

/**
 * Class for mentor, contains methods to interact with Database
 */
class Mentor{
    /**
     * Search and returns all the mentors in the Database
     * @return {object} query response of the database
     */
    static getAll(){
        let query = "SELECT * FROM  mentor";
        return db.execute(query);
    }
}

module.exports = Mentor;