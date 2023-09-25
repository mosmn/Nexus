const Material = require('../models/material');
const asyncHandler = require('express-async-handler');

// Display list of all materials.
exports.getMaterials = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: getMaterials');
});

// Display detail page for a specific material.
exports.getMaterialDetail = asyncHandler(async (req, res, next) => {
    res.send(`Not implemented: getMaterialDetail ${req.params.id}`);
});

// Display Material create form on GET.
exports.getCreate = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: getCreate');
});

// Handle Material create on POST.
exports.postCreate = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: postCreate');
});

// Display Material delete form on GET.
exports.getDelete = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: getDelete');
});

// Handle Material delete on POST.
exports.postDelete = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: postDelete');
});

// Display Material update form on GET.
exports.getUpdate = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: getUpdate');
});

// Handle Material update on POST.
exports.postUpdate = asyncHandler(async (req, res, next) => {
    res.send('Not implemented: postUpdate');
});