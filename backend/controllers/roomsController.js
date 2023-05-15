const Room = require('../models/room');

// Get all rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a room by ID
exports.getRoomById = async (req, res) => {
  try {
    
    const room = await Room.find({roomId:req.params.id});
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a room for fllowing model

exports.createRoom = async (req, res) => {
  const {roomId,roomType,description,capacity,pricePerNight,amenities,isAvailable,images} = req.body;
  const room = new Room({
    roomId,
    roomType,
    description,
    capacity,
    pricePerNight,
    amenities,
    isAvailable,
    images
  });
  try {
    const savedRoom = await room.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a room
exports.updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findOneAndUpdate({roomId:req.params.id}, req.body, { new: true });
    if (!updatedRoom) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a room
exports.deleteRoom = async (req, res) => {
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    if (!deletedRoom) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
