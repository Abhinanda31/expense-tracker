const Expense = require("../models/Expense");

const addExpense = async (req, res) => {
  try {
    const { amount, category, date, note } = req.body;

    const expense = await Expense.create({
      amount,
      category,
      date,
      note,
      user: req.userId,
    });

    res.status(201).json({
      message: "Expense added successfully",
      expense,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.userId,
    });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteExpense = async (req, res) => {
  try {

    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      user: req.userId
    });

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found"
      });
    }

    res.status(200).json({
      message: "Expense deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const updateExpense = async (req, res) => {
  try {

    const { amount, category, date, note } = req.body;

    const expense = await Expense.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.userId
      },
      {
        amount,
        category,
        date,
        note
      },
      {
        new: true
      }
    );

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found"
      });
    }

    res.status(200).json({
      message: "Expense updated successfully",
      expense
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getDashboard = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.userId,
    });

    let totalExpenses = 0;

    const byCategory = {};

    expenses.forEach((expense) => {
      totalExpenses += expense.amount;

      if (byCategory[expense.category]) {
        byCategory[expense.category] += expense.amount;
      } else {
        byCategory[expense.category] = expense.amount;
      }
    });

    res.status(200).json({
      totalExpenses,
      byCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addExpense,
  getExpenses,
  getDashboard,
  deleteExpense,
  updateExpense
};
