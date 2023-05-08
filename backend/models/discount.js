const mongoose= require('mongoose')

const newSchema= mongoose.Schema({
    discountCode: { type: String, required: true, unique: true },
    description: { type: String },
    discountType: { type: String, required: true, enum:["Percentage","Fixed"] }, // e.g., Percentage, Fixed Amount
    discountValue: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
    roomTypes: [{ type: String ,enum: ['Single', 'Double', 'Twin', 'Suite', 'Deluxe', 'Executive']}], // Optional: Apply discount only to specific room types
  }
  ,{
    timestamps:true,
   }
)
const discount= mongoose.model('discount', newSchema);
module.exports=discount;