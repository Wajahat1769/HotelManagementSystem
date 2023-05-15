const express = require('express');
const roomsController = require('../controllers/roomsController');
const adminAuth= require('../middlewares/auth');
const router = express.Router();

router.get('/',adminAuth.adminAuth, roomsController.getAllRooms);
router.get('/:id',adminAuth.adminAuth, roomsController.getRoomById);
router.post('/',adminAuth.adminAuth, roomsController.createRoom);
router.put('/:id', roomsController.updateRoom);
router.delete('/:id', roomsController.deleteRoom);

module.exports = router;
