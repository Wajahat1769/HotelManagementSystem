const express = require('express');
const discountsController = require('../controllers/discountsController');

const router = express.Router();

router.get('/', discountsController.getAllDiscounts);
router.get('/:id', discountsController.getDiscountById);
router.post('/', discountsController.createDiscount);
router.put('/:id', discountsController.updateDiscount);
router.delete('/:id', discountsController.deleteDiscount);

module.exports = router;
