const mongoose= require('mongoose')
const newSchema= mongoose.Schema({
    paymentId: { type: String, required: true, unique: true },
    reservation: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation', required: true },
    guestName: { type: String, required: true },
    guestEmail: { type: String, required: true },
    paymentMethod: { type: String, required: true }, // e.g., Credit Card, PayPal, Bank Transfer
    paymentAmount: { type: Number, required: true },
    currency: { type: String, required: true },
    paymentStatus: { type: String, required: true }, // e.g., Completed, Failed, Refunded
    transactionId: { type: String, required: true, unique: true },
    paymentDate: { type: Date, required: true },
    stripePaymentIntentId: { type: String }, // Stripe-specific field
    stripeCustomerId: { type: String }, // Stripe-specific field
  }
  ,{
    timestamps:true,
})
const payment= mongoose.model('payment', newSchema);
module.exports=payment;