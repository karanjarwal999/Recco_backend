
const express = require('express');
const mongoose = require('mongoose');
const ordersRouter = require('./route');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())


app.use('/orders', ordersRouter);

app.listen(8080, async() => {
        try {
            mongoose.connect('mongodb+srv://karanjarwal999:Tibe7NNJVEhTyHaP@cluster0.kq8p3ki.mongodb.net/')
            console.log('server started and database connected'); 
        } catch (error) {
           console.log(error); 
        }
});
