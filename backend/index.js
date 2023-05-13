const express= require ("express");
const app=express();
const port=3001;
const mongoose=require('mongoose');
const roomRoutes=require('./routes/roomRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const discountRoutes= require('./routes/discountRoutes');
const paymentRoutes= require('./routes/paymentRoutes');
const reservationRoutes=require('./routes/reservationRoutes');
require ('dotenv').config();

app.use(express.json());
app.use('/rooms',roomRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/discount',discountRoutes);
app.use('/payment',paymentRoutes);
app.use('/reservationRoutes',reservationRoutes);

const connectionStr=process.env.CONNECTION_STR || "mongodb://localhost:27017/HotelManagementSystem";
const res= mongoose.connect(
    connectionStr,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=>{
    console.log(`connected to db`)
}).catch((e)=>{
    console.log(`Error : ${e}`)
});

app.get('/',(req,res)=>{
    res.send('Hello World')
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});