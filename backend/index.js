const express= require ("express");
const app=express();
const port=3001;
const dotenv=require('dotenv');
const mongoose=require('mongoose');
app.use(express.json());

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