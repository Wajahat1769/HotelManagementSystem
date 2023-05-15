const express = require('express');
const dashboardController = require('../controllers/dashboardController');
const adminAuth= require('../middlewares/auth');

const router = express.Router();

router.get('/', dashboardController.getDashboardData);

module.exports = router;
