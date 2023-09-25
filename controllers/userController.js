const User = require("../models/user");
const asyncHandler = require("express-async-handler");

// Display list of all users.
exports.getUsers = asyncHandler(async (req, res) => {
    res.send("Not implemented: getUsers");
});

// Display detail page for a specific user.
exports.getUserDetail = asyncHandler(async (req, res) => {
    res.send("Not implemented: getUserDetail");
});

// Display Register form on GET.
exports.getRegister = asyncHandler(async (req, res) => {
    res.send("Not implemented: getRegister");
});

// Handle Register on POST.
exports.postRegister = asyncHandler(async (req, res) => {
    res.send("Not implemented: postRegister");
});

// Display Login form on GET.
exports.getLogin = asyncHandler(async (req, res) => {
    res.send("Not implemented: getLogin");
});

// Handle Login on POST.
exports.postLogin = asyncHandler(async (req, res) => {
    res.send("Not implemented: postLogin");
});

// Handle Logout on GET.
exports.getLogout = asyncHandler(async (req, res) => {
    res.send("Not implemented: getLogout");
});

// Display User update form on GET.
exports.getUpdate = asyncHandler(async (req, res) => {
    res.send("Not implemented: getUpdate");
});

// Handle User update on POST.
exports.postUpdate = asyncHandler(async (req, res) => {
    res.send("Not implemented: postUpdate");
});