// orders.js - This file will contain all your routes related to orders

const express = require('express');
const router = express.Router();
const Order = require('./schema');

// Route to get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to add a new product
router.post('/add', async (req, res) => {
  const order = new Order({
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to update quantity and price and set status
router.patch('/:id/update', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if(req.body.quantity!==order.quantity && req.body.price!==order.price){
        order.quantity = req.body.quantity;
        order.price = req.body.price;
        order.status = 'quantity and price updated';
    }
    else if (req.body.quantity!==order.quantity) {
      order.quantity = req.body.quantity;
      order.status = 'Quantity updated';
    }
    else if (req.body.price!==order.price) {
      order.price = req.body.price;
      order.status ='Price updated'
    }

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to update status
router.patch('/status/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    order.status = req.body.status;

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
