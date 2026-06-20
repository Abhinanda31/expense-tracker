const express = require("express");

const router = express.Router();

const { body } = require("express-validator");

const auth = require("../middleware/auth");

const {
  addExpense,
  getExpenses,
  getDashboard,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenseController");

router.post(
  "/",
  auth,
  [
    body("amount").isNumeric().withMessage("Amount must be a number"),

    body("category").notEmpty().withMessage("Category is required"),

    body("note")
      .optional()
      .isLength({ max: 200 })
      .withMessage("Note cannot exceed 200 characters"),
  ],
  addExpense,
);

router.get("/dashboard", auth, getDashboard);
router.get("/", auth, getExpenses);
router.delete("/:id", auth, deleteExpense);
router.put("/:id", auth, updateExpense);

module.exports = router;
