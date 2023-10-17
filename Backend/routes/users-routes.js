const express = require("express");
const { check } = require("express-validator");

// const HttpError = require("../models/http-error");
const userControllers = require("../controllers/users-controlers");

const router = express.Router();

router.get("/", userControllers.getUsers);

// Route for :  Signing up
router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("phone").not().isEmpty(),
    check("address").not().isEmpty(),
    check("password").isLength({ min: 6 }),
  ],
  userControllers.signup
);
// Route for :  Logging in
router.post("/login", userControllers.login);

module.exports = router;
