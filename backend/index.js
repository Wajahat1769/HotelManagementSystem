const express= require ("express");
const app=express();
const port=3001;
const mongoose=require('mongoose');
const roomRoutes=require('./routes/roomRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const discountRoutes= require('./routes/discountRoutes');
const paymentRoutes= require('./routes/paymentRoutes');
const reservationRoutes=require('./routes/reservationRoutes');
const adminRoutes=require('./routes/adminRoutes');
require ('dotenv').config();

app.use(express.json());
app.use('/rooms',roomRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/discount',discountRoutes);
app.use('/payment',paymentRoutes);
app.use('/reservationRoutes',reservationRoutes);
app.use('/admin',adminRoutes);
const connectionStr=process.env.CONNECTION_STR;

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  }).then(() => {
    console.log('Connected to db');
  }).catch((e) => {
    console.log(`${e}`);
  });

app.get('/',(req,res)=>{
    res.send('Hello World')
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});