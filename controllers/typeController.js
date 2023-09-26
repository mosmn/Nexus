const Type = require("../models/type");
const asyncHandler = require("express-async-handler");

// Display list of all types.
exports.getTypes = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getTypes");
});

// Display detail page for a specific type.
exports.getTypeDetail = asyncHandler(async (req, res, next) => {
  res.send(`Not implemented: getTypeDetail ${req.params.id}`);
});

// Display Type create form on GET.
exports.getCreate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getCreate");
});

// Handle Type create on POST.
exports.postCreate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: postCreate");
});

// Display Type delete form on GET.
exports.getDelete = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getDelete");
});

// Handle Type delete on POST.
exports.postDelete = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: postDelete");
});

// Display Type update form on GET.
exports.getUpdate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: getUpdate");
});

// Handle Type update on POST.
exports.postUpdate = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: postUpdate");
});
