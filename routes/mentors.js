/**
 * endpoint for route mentor
 * @module route mentors
 */
const express = require("express");
const router = express.Router();

//Controllers
const mentorsCtrollers = require("../controllers/mentors");

router
    .route("/")
    .get(mentorsCtrollers.getAllMentors);

module.exports = router;