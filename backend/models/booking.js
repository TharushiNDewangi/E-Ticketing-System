const mongoose = require('mongoose');
const schema =mongoose.Schema;

const bookingSchema=new schema(
    {
     nic: {
        type: String,
        required:true
    },
    phone: {
        type: String,
        required: true,
    },
    startingPoint:{
        type: String,
        required: true,
     },
    
    endingPoint:{
        type: String,
        required: true,
     },
    
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },

    quantity:{
        type: Number,
        required:true
    }
    },{timestamps:true}
    );

const booking =mongoose.model("Book",bookingSchema);
module.exports=booking;