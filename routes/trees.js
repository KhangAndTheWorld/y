var express = require("express");
var router = express.Router();
const multer = require("multer");
const upload = multer();
const TreeController = require("../controllers/TreeControllers");

router.get("/", TreeController.getAllTrees);
router.get("/create", TreeController.getCreateForm);
router.post("/create", upload.single("image"), TreeController.createTree);
router.get("/edit/:id", TreeController.getEditForm);
router.post("/edit/:id", upload.single("image"), TreeController.updateTree);
router.post("/delete/:id", TreeController.deleteTree);

module.exports = router;
