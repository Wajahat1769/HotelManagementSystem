const express = require('express');
const roomsController = require('../controllers/roomsController');

const router = express.Router();

router.get('/', roomsController.getAllRooms);
router.get('/:id', roomsController.getRoomById);
router.post('/', roomsController.createRoom);
router.put('/:id', roomsController.updateRoom);
router.delete('/:id', roomsController.deleteRoom);

module.exports = router;
