const Expense = require("../models/Expense");

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().populate("user", "name email");

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllExpenses,
};
