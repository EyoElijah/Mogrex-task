const express = require("express");
const fileUpload = require("../middleware/fileUpload");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/submit", fileUpload, userController);

module.exports = router;
