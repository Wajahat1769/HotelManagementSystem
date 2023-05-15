const jwt= require('jsonwebtoken');
const User=require('../models/user');
require('dotenv').config();


//create admin authentication
exports.adminAuth= async(req,res,next)=>{
    
        const token= req.header('Authorization').replace('Bearer ','');
        const decoded=  jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        try{
        const admin= await User.findOne({_id:decoded.userId});
        if(admin.userType!='admin'){
            res.status(401).send({error:'You are not admin'});
        }
        else if(admin.userType=='admin'){
        req.token=token;
        req.admin= admin;
        next();
        }
        else{
            res.status(401).send({error:'No user found'});
        }
    
    }catch(e){
        res.status(401).send({error:'Error in authentication'});
    }
}



