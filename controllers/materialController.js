// materialController.js

const Material = require("../models/material");
const Type = require("../models/type");
const Subject = require("../models/subject");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

exports.getMaterials = asyncHandler(async (req, res, next) => {
  const materials = await Material.find()
    .populate("uploaded_by")
    .populate("type")
    .populate("belongs_to")
    .exec();
  res.render("material_list", { title: "Materials", materials });
});

exports.getMaterialDetail = asyncHandler(async (req, res, next) => {
  const material = await Material.findById(req.params.id)
    .populate("uploaded_by")
    .populate("type")
    .populate("belongs_to")
    .exec();
  res.render("material_detail", { title: material.title, material });
});

exports.getCreate = asyncHandler(async (req, res, next) => {
  const [allTypes, allSubjects] = await Promise.all([
    Type.find().exec(),
    Subject.find().exec(),
  ]);

  res.render("material_form", {
    title: "Upload Material",
    types: allTypes,
    subjects: allSubjects,
  });
});

exports.postCreate = [
  upload.single("file"),

  body("title", "Title must not be empty.").trim().isLength({ min: 1 }).escape(),
  body("type", "Type must not be empty.").trim().isLength({ min: 1 }).escape(),
  body("subject", "Subject must not be empty.").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!req.file) {
      errors.array().push({ msg: "File must be uploaded." });
    }

    if (errors.isEmpty()) {
      const { filename, path } = req.file;

      const material = new Material({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        belongs_to: req.body.subject,
        file: filename,
        path: path,
      });

      try {
        await material.save();
        res.redirect(material.url);
      } catch (err) {
        next(err);
      }
    } else {
      const [allTypes, allSubjects] = await Promise.all([
        Type.find().exec(),
        Subject.find().exec(),
      ]);

      res.render("material_form", {
        title: "Upload Material",
        types: allTypes,
        subjects: allSubjects,
        errors: errors.array(),
      });
    }
  }),
];

exports.getDownload = asyncHandler(async (req, res, next) => {
  const material = await Material.findById(req.params.id).exec();
  res.download(material.path, material.file);
});

exports.getDelete = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getDelete");
});

exports.postDelete = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: postDelete");
});


exports.getUpdate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getUpdate");
});


exports.postUpdate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: postUpdate");
});
