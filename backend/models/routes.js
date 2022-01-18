const mongoose = require('mongoose');
const schema =mongoose.Schema;
const routechema=new schema(
    {
        routeId: {
            type:String,
            autoIncrement:true,
            required:true,
            unique:true,
            trim:true
        },
        
        startingPoint:{
            type: String,
            required:true,
            
        },
        endingPoint:{
            type: String,
            required:true,
            
        },
        totalkm:{
            type:Number,
            required: true 
        },
        
        chargersPerKm:{
            type:Number,
            required: true
        },
        maxCreditLimit:{
            type:Number,
            required: true
        },
        },{ timestamps: true})


const route =mongoose.model("Route",routechema);
module.exports=route;
