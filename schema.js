const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,

  },
  brand: {
    type: String,

  },
  price: {
    type: Number,

  },
  quantity: {
    type: Number,

  },
  status: {
    type: String,
    default: '',
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
