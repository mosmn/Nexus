#! /usr/bin/env node

console.log(
  'This script populates some test materials, subjects, types, and users to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://ithinkisee8:gIXNEDWjppIE5utX@cluster0.wyskkpm.mongodb.net/Nexus?retryWrites=true&w=majority"',
);

// Get the arguments passed on the command line
const userArgs = process.argv.slice(2);

const Material = require("./models/material");
const Subject = require("./models/subject");
const Type = require("./models/type");
const User = require("./models/user");

const materials = [];
const subjects = [];
const types = [];
const users = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createSubjects();
  await createTypes();
  await createUsers();
  await createMaterials();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function subjectCreate(name, code, description) {
  const subject = new Subject({
    name: name,
    code: code,
    description: description,
  });
  await subject.save();
  subjects.push(subject);
  console.log(`Added subject: ${name}`);
}

async function typeCreate(name) {
  const type = new Type({ name: name });
  await type.save();
  types.push(type);
  console.log(`Added type: ${name}`);
}

async function userCreate(
  username,
  password,
  email,
  first_name,
  last_name,
  is_admin,
  is_active,
  points,
) {
  const user = new User({
    username: username,
    password: password,
    email: email,
    first_name: first_name,
    last_name: last_name,
    is_admin: is_admin,
    is_active: is_active,
    points: points,
  });
  await user.save();
  users.push(user);
  console.log(`Added user: ${username}`);
}

async function materialCreate(
  title,
  description,
  file,
  type,
  uploaded_by,
  belongs_to,
  status,
) {
  const material = new Material({
    title: title,
    description: description,
    file: file,
    type: type,
    uploaded_by: uploaded_by,
    belongs_to: belongs_to,
    status: status,
  });
  await material.save();
  materials.push(material);
  console.log(`Added material: ${title}`);
}

async function createSubjects() {
  console.log("Adding subjects");
  await Promise.all([
    subjectCreate("Mathematics", "MATH101", "Introductory Mathematics"),
    subjectCreate("History", "HIST101", "World History"),
    subjectCreate("Computer Science", "COMP101", "Programming Fundamentals"),
  ]);
}

async function createTypes() {
  console.log("Adding types");
  await Promise.all([
    typeCreate("Quiz"),
    typeCreate("Exam"),
    typeCreate("Exercise"),
  ]);
}

async function createUsers() {
  console.log("Adding users");
  await Promise.all([
    userCreate(
      "user1",
      "password1",
      "user1@example.com",
      "John",
      "Doe",
      false,
      true,
      100,
    ),
    userCreate(
      "user2",
      "password2",
      "user2@example.com",
      "Jane",
      "Smith",
      false,
      true,
      75,
    ),
    userCreate(
      "admin",
      "adminpassword",
      "admin@example.com",
      "Admin",
      "User",
      true,
      true,
      200,
    ),
  ]);
}

async function createMaterials() {
  console.log("Adding materials");
  await Promise.all([
    materialCreate(
      "Math Quiz 1",
      "Math quiz for chapter 1",
      "math_quiz_1.pdf",
      types[0],
      users[0],
      subjects[0],
      "Available",
    ),
    materialCreate(
      "History Exam",
      "Final exam for world history",
      "history_exam.pdf",
      types[1],
      users[1],
      subjects[1],
      "Unavailable",
    ),
    materialCreate(
      "Programming Exercise 2",
      "Programming exercise for week 2",
      "programming_exercise_2.doc",
      types[2],
      users[0],
      subjects[2],
      "Available",
    ),
  ]);
}
