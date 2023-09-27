const Material = require("../models/material");
const Type = require("../models/type");
const Subject = require("../models/subject");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


// Display list of all materials.
exports.getMaterials = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getMaterials");
});

// Display detail page for a specific material.
exports.getMaterialDetail = asyncHandler(async (req, res, next) => {
  res.send(`Not implemented: getMaterialDetail ${req.params.id}`);
});


exports.getCreate = asyncHandler(async (req, res, next) => {
  const [allTypes, allSubjects] = await Promise.all([
    Type.find().exec(),
    Subject.find().exec(),
  ]);

  res.render("material_form", { title: "Upload Material", types: allTypes, subjects: allSubjects });
});

exports.postCreate = [
  body("title", "Title must not be empty.").trim().isLength({ min: 1 }).escape(),
  body("type", "Type must not be empty.").trim().isLength({ min: 1 }).escape(),
  body("subject", "Subject must not be empty.").trim().isLength({ min: 1 }).escape(),
  body("file", "File must not be empty.").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const material = new Material({
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      belongs_to: req.body.subject,
      file: req.body.file,
    });

    if (!errors.isEmpty()) {
      const [allTypes, allSubjects] = await Promise.all([
        Type.find().exec(),
        Subject.find().exec(),
      ]);

      res.render("material_form", {
        title: "Upload Material",
        types: allTypes,
        subjects: allSubjects,
        material,
        errors: errors.array(),
      });
    } else {
      try {
        await material.save();
        res.redirect("/home");
      } catch (err) {
        next(err);
      }
    }
  }),
];

// Display Material delete form on GET.
exports.getDelete = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getDelete");
});

// Handle Material delete on POST.
exports.postDelete = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: postDelete");
});

// Display Material update form on GET.
exports.getUpdate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getUpdate");
});

// Handle Material update on POST.
exports.postUpdate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: postUpdate");
});
