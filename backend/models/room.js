/**
 * Creating a schema for the room model for Hotel Management System
 */

const mongoose = require('mongoose')

const newSchema= mongoose.Schema({
    roomId: { type: String, required: true, unique: true },
    roomType: { type: String, required: true,enum: ['Single', 'Double', 'Twin', 'Suite', 'Deluxe', 'Executive'] }, // e.g., Single, Double, Suite
    description: { type: String },
    capacity: { type: Number, required: true },
    pricePerNight: { type: Number, required: true },
    amenities: [{ type: String }], // e.g., WiFi, Air Conditioning, TV
    isAvailable: { type: Boolean, default: true },
    images: [{ type: String }],
  },{timeStamps: true});

const room = mongoose.model('room', newSchema);
module.exports = room;