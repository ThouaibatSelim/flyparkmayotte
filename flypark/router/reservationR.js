const express = require("express");

const router = express.Router();

const reservationController = require("../controllers/reservation");


router.post("/reservation", reservationController.signUp);
router.get("/reservation", reservationController.showSignUpForm);

module.exports = router;