const Reservation = require('../models/reservation');

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.find({reservationId:req.params.id});
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * 
 * create reservation for following model
 *  reservationId: { type: String, required: true, unique: true },
        guestName: { type: String, required: true },
        guestEmail: { type: String, required: true },
        guestPhone: { type: String, required: true },
        roomId: { type: String, required: true },
        room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
        checkInDate: { type: Date, required: true },
        checkOutDate: { type: Date, required: true },
        numberOfGuests: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        paymentStatus: { type: String, default: 'Pending', enum:['Pending','Paid','Cancelled'] }, // e.g., Pending, Paid, Cancelled
        paymentMethod: { type: String },
 */
exports.createReservation = async (req, res) => {
  
  const reservation = new Reservation(req.body);
  try {
    const savedReservation = await reservation.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const updatedReservation = await Reservation.findOneAndUpdate({reservationId: req.params.id}, req.body, { new: true });
    if (!updatedReservation) return res.status(404).json({ message: 'Reservation not found' });
    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await Reservation.findOneAndDelete({reservationId:req.params.id});
    if (!deletedReservation) return res.status(404).json({ message: 'Reservation not found' });
    res.status(200).json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
