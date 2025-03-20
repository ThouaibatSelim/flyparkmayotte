const express = require("express");

const router = express.Router();

const servicesController = require("../controllers/services");


router.post("/services", servicesController.signUp);
router.get("/services", servicesController.showSignUpForm);

module.exports = router;