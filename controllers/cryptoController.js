const Crypto = require('../models/Crypto');

// @desc    Get all cryptocurrencies
// @route   GET /api/crypto
// @access  Public
exports.getAllCrypto = async (req, res) => {
  try {
    const cryptos = await Crypto.find({});
    res.status(200).json(cryptos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get top gainers
// @route   GET /api/crypto/gainers
// @access  Public
exports.getTopGainers = async (req, res) => {
  try {
    const cryptos = await Crypto.find({}).sort({ change24h: -1 }).limit(10);
    res.status(200).json(cryptos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get new listings
// @route   GET /api/crypto/new
// @access  Public
exports.getNewListings = async (req, res) => {
  try {
    const cryptos = await Crypto.find({}).sort({ createdAt: -1 }).limit(10);
    res.status(200).json(cryptos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add new cryptocurrency
// @route   POST /api/crypto
// @access  Public (can be protected if required)
exports.addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || !price || !image || change24h === undefined) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image,
      change24h
    });

    res.status(201).json(crypto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
