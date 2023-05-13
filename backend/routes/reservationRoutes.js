const express = require('express');
const reservationsController = require('../controllers/reservationController');

const router = express.Router();

router.get('/', reservationsController.getAllReservations);
router.get('/:id', reservationsController.getReservationById);
router.post('/', reservationsController.createReservation);
router.put('/:id', reservationsController.updateReservation);
router.delete('/:id', reservationsController.deleteReservation);

module.exports = router;
