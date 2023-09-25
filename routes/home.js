const express = require("express");
const router = express.Router();

// Require controller modules.
const subject_controller = require("../controllers/subjectController");
const user_controller = require("../controllers/userController");
const type_controller = require("../controllers/typeController");
const material_controller = require("../controllers/materialController");

// Subject routes.

// GET catalog home page.
router.get("/", subject_controller.getHome);

// GET request for creating a Subject. NOTE This must come before routes that display Subject (uses id).
router.get("/subject/create", subject_controller.getCreate);

// POST request for creating Subject.
router.post("/subject/create", subject_controller.postCreate);

// GET request to delete Subject.
router.get("/subject/:id/delete", subject_controller.getDelete);

// POST request to delete Subject.
router.post("/subject/:id/delete", subject_controller.postDelete);

// GET request to update Subject.
router.get("/subject/:id/update", subject_controller.getUpdate);

// POST request to update Subject.
router.post("/subject/:id/update", subject_controller.postUpdate);

// GET request for one Subject.
router.get("/subject/:id", subject_controller.getSubjectDetail);

// GET request for list of all Subjects.
router.get("/subjects", subject_controller.getSubjects);

// User routes.

// GET request for list of all Users.
router.get("/users", user_controller.getUsers);

// GET request for one User.
router.get("/user/:id", user_controller.getUserDetail);

// GET request for user registration form.
router.get("/register", user_controller.getRegister);

// POST request for user registration.
router.post("/register", user_controller.postRegister);

// GET request for user login form.
router.get("/login", user_controller.getLogin);

// POST request for user login.
router.post("/login", user_controller.postLogin);

// GET request to log out.
router.get("/logout", user_controller.getLogout);

// GET request for user update form.
router.get("/user/:id/update", user_controller.getUpdate);

// POST request for user update.
router.post("/user/:id/update", user_controller.postUpdate);

// Type routes.

// GET request for list of all Types.
router.get("/types", type_controller.getTypes);

// GET request for one Type.
router.get("/type/:id", type_controller.getTypeDetail);

// GET request for creating a Type.
router.get("/type/create", type_controller.getCreate);

// POST request for creating Type.
router.post("/type/create", type_controller.postCreate);

// GET request to delete Type.
router.get("/type/:id/delete", type_controller.getDelete);

// POST request to delete Type.
router.post("/type/:id/delete", type_controller.postDelete);

// GET request to update Type.
router.get("/type/:id/update", type_controller.getUpdate);

// POST request to update Type.
router.post("/type/:id/update", type_controller.postUpdate);

// Material routes.

// GET request for list of all Materials.
router.get("/materials", material_controller.getMaterials);

// GET request for one Material.
router.get("/material/:id", material_controller.getMaterialDetail);

// GET request for creating a Material.
router.get("/material/create", material_controller.getCreate);

// POST request for creating Material.
router.post("/material/create", material_controller.postCreate);

// GET request to delete Material.
router.get("/material/:id/delete", material_controller.getDelete);

// POST request to delete Material.
router.post("/material/:id/delete", material_controller.postDelete);

// GET request to update Material.
router.get("/material/:id/update", material_controller.getUpdate);

// POST request to update Material.
router.post("/material/:id/update", material_controller.postUpdate);

module.exports = router;
