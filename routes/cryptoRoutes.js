const express = require('express');
const router = express.Router();
const {
  getAllCrypto,
  getTopGainers,
  getNewListings,
  addCrypto
} = require('../controllers/cryptoController');

router.route('/')
  .get(getAllCrypto)
  .post(addCrypto);

router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);

module.exports = router;
