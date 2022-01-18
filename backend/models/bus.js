const express = require('express')
const mongoose = require('mongoose');

const schema =mongoose.Schema;

const busSchema = new schema(
    {
    platenumber: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    drivername:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    routenumber:{type:mongoose.Schema.Types.ObjectId,ref :'Route' },
},{timestamps:true})

const busschema =mongoose.model("BusTravel",busSchema);
module.exports=busschema;