const mongoose=require('mongoose')
const newSchema=mongoose.Schema(
    {
        reservationId: { type: String, required: true, unique: true },
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
    },
    {
       timestamps:true
    }
      
)
const roomReservation= mongoose.model('roomReservation', newSchema);
module.exports=roomReservation;