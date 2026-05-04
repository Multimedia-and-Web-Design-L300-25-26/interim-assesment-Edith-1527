const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the cryptocurrency name']
  },
  symbol: {
    type: String,
    required: [true, 'Please provide the symbol (e.g. BTC)'],
    uppercase: true
  },
  price: {
    type: Number,
    required: [true, 'Please provide the current price']
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL']
  },
  change24h: {
    type: Number,
    required: [true, 'Please provide the 24h percentage change']
  }
}, { timestamps: true });

module.exports = mongoose.model('Crypto', cryptoSchema);
