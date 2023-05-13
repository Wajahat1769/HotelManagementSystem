const Discount = require('../models/discount');

exports.getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find();
    res.status(200).json(discounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findById(req.params.id);
    if (!discount) return res.status(404).json({ message: 'Discount not found' });
    res.status(200).json(discount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createDiscount = async (req, res) => {
  const discount = new Discount(req.body);
  try {
    const savedDiscount = await discount.save();
    res.status(201).json(savedDiscount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateDiscount = async (req, res) => {
  try {
    const updatedDiscount = await Discount.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDiscount) return res.status(404).json({ message: 'Discount not found' });
    res.status(200).json(updatedDiscount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteDiscount = async (req, res) => {
    try {
      const deletedDiscount = await Discount.findByIdAndDelete(req.params.id);
      if (!deletedDiscount) return res.status(404).json({ message: 'Discount not found' });
      res.status(200).json({ message: 'Discount deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
