const express = require("express");
const router = express.Router();
const primenessController = require("../controllers/primeness.controller");

// Retrieve all city
router.get("/checkPrime/:number", primenessController.checkIsPrime);

module.exports = router;
