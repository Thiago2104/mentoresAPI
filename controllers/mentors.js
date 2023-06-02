/**
 * Controllers for route mentors
 * @module mentorsController
 */

//Models
const Mentor = require("../repositories/models/mentor");

//catch async
const catchAsync = require("../helpers/catchAsync");
/**
 * Get all mentors available
 * @function getAllMentors
 * @param {object} req - request
 * @param {object} res - response
 */
exports.getAllMentors = catchAsync(async (req, res)=>{
    let mentors = await Mentor.getAll();
    res.status(200).json(mentors[0]);
})