const Room = require('../models/room');
const Reservation = require('../models/reservation');
const Payment = require('../models/payment');

exports.getDashboardData = async (req, res) => {
  try {
    const totalRooms = await Room.countDocuments();
    const availableRooms = await Room.countDocuments({ isAvailable: true });
    const totalReservations = await Reservation.countDocuments();
    const totalPayments = await Payment.countDocuments();

    res.status(200).json({
      totalRooms,
      availableRooms,
      totalReservations,
      totalPayments,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
