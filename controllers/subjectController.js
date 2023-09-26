const Subject = require("../models/subject");
const Material = require("../models/material");
const asyncHandler = require("express-async-handler");

exports.getHome = asyncHandler(async (req, res, next) => {
  try {
    const [subjects, materials] = await Promise.all([
        Subject.find().limit(5).exec(),
        Material.find().populate("type").limit(5).exec(),
        ]);

    res.render("index", { title: "Home", subjects, materials });
  } catch (err) {
    next(err);
  }
});

exports.getSubjects = asyncHandler(async (req, res, next) => {
  try {
    const subjects = await Subject.find().exec();

    const subjectCount = await Promise.all(
      subjects.map(async (subject) => {
        const count = await Material.countDocuments({ belongs_to: subject._id });
        return count;
      })
    );

    res.render("subject_list", { title: "All Subject", subjects, subjectCount });
  } catch (err) {
    next(err);
  }
});

// Display detail page for a specific subject.
exports.getSubjectDetail = asyncHandler(async (req, res, next) => {
    try {
        const subject = await Subject.findById(req.params.id).exec();
    
        const materials = await Material.find({ belongs_to: req.params.id }).populate("type").exec();
    
        res.render("subject_detail", { title: subject.name, code: subject.code, materials });
    } catch (err) {
        next(err);
    }
});

// Display Subject create form on GET.
exports.getCreate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getCreate");
});

// Handle Subject create on POST.
exports.postCreate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: postCreate");
});

// Display Subject delete form on GET.
exports.getDelete = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getDelete");
});

// Handle Subject delete on POST.
exports.postDelete = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: postDelete");
});

// Display Subject update form on GET.
exports.getUpdate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getUpdate");
});

// Handle Subject update on POST.
exports.postUpdate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: postUpdate");
});

// Display Subject search form on GET.
exports.getSearch = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getSearch");
});

// Handle Subject search on POST.
exports.postSearch = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: postSearch");
});

// Display Subject list by Type on GET.
exports.getByType = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getByType");
});
