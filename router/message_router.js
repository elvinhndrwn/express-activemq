// create router to controller
const express = require("express");
const message_controller = require("../controller/message_controller");
const router = express.Router();

router.post("/send", message_controller.send);

module.exports = router;