const express = require("express");
const router = express.Router();
const economyController = require("../app/controllers/EconomyController")

router.use("/",economyController.index)

module.exports = router;
