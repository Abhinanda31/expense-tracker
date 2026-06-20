const express = require("express");

const router = express.Router();

const { body } = require("express-validator");

const { signup, login } = require("../controllers/authController");

router.post("/login", login);

router.post(
  "/signup",
  [
    body("name")
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .isEmail()
      .withMessage("Enter a valid email"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters")
  ],
  signup
);

module.exports = router;