import { Transaction } from '../models/Transaction.model.js';

export const createTransaction = async (req, res) => {
  const { description, amount, trip, category } = req.body;

  try {
    if (!description || !amount || !trip || !category) {
      throw new Error('All fields are required');
    }

    const newTransaction = new Transaction({
      description,
      amount,
      trip,
      category,
      user: req.userId,
    });
    await newTransaction.save();

    res.status(201).json({
      success: true,
      message: 'Transaction created successfully',
      transaction: newTransaction,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({})
      .populate('user')
      .populate('trip')
      .populate('category')
      .exec();

    res.status(200).json({
      success: true,
      transactions,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};