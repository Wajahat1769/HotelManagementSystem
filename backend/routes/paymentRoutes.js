const express = require('express');
const paymentsController = require('../controllers/paymentController');
const adminAuth= require('../middlewares/auth');
const router = express.Router();

router.get('/', paymentsController.getAllPayments);
router.get('/:id', paymentsController.getPaymentById);
router.post('/',paymentsController.createPayment);
router.put('/:id', paymentsController.updatePayment);
router.delete('/:id', paymentsController.deletePayment);

module.exports = router;
