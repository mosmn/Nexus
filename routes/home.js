const express = require("express");
const router = express.Router();

const subject_controller = require("../controllers/subjectController");
const user_controller = require("../controllers/userController");
const type_controller = require("../controllers/typeController");
const material_controller = require("../controllers/materialController");

router.get("/", subject_controller.getHome);
router.get("/subject/create", subject_controller.getCreate);
router.post("/subject/create", subject_controller.postCreate);
router.get("/subject/:id/delete", subject_controller.getDelete);
router.post("/subject/:id/delete", subject_controller.postDelete);
router.get("/subject/:id/update", subject_controller.getUpdate);
router.post("/subject/:id/update", subject_controller.postUpdate);
router.get("/subject/:id", subject_controller.getSubjectDetail);
router.get("/subjects", subject_controller.getSubjects);

router.get("/users", user_controller.getUsers);
router.get("/user/:id", user_controller.getUserDetail);
router.get("/register", user_controller.getRegister);
router.post("/register", user_controller.postRegister);
router.get("/login", user_controller.getLogin);
router.post("/login", user_controller.postLogin);
router.get("/logout", user_controller.getLogout);
router.get("/user/:id/update", user_controller.getUpdate);
router.post("/user/:id/update", user_controller.postUpdate);

router.get("/types", type_controller.getTypes);
router.get("/type/:id", type_controller.getTypeDetail);
router.get("/type/create", type_controller.getCreate);
router.post("/type/create", type_controller.postCreate);
router.get("/type/:id/delete", type_controller.getDelete);
router.post("/type/:id/delete", type_controller.postDelete);
router.get("/type/:id/update", type_controller.getUpdate);
router.post("/type/:id/update", type_controller.postUpdate);

router.get("/materials", material_controller.getMaterials);
router.get("/material/upload", material_controller.getCreate);
router.post("/material/upload", material_controller.postCreate);
router.get("/material/:id/download", material_controller.getDownload);
router.get("/material/:id/delete", material_controller.getDelete);
router.post("/material/:id/delete", material_controller.postDelete);
router.get("/material/:id/update", material_controller.getUpdate);
router.post("/material/:id/update", material_controller.postUpdate);
router.get("/material/:id", material_controller.getMaterialDetail);

module.exports = router;
