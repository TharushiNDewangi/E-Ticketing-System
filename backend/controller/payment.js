//const router = express.Router();
const shortid = require('shortid');
const Payment = require('../models/payment');
const nodemailer = require("nodemailer");


exports.createPayment = (req, res) => {

    const {
        name, email, date,cardnumber,cvc,amount
    } = req.body;

    const payment = new Payment({
        name,
        email,
        date,
        cardnumber,
        cvc,
        amount
        // createBy: req.user._id

    });

    payment.save(((error, Payment)=> { 
        if (error) return res.status(400).json({ error });
       
        if (Payment) {
            res.status(201).json({ Payment });
            console.log("save");
        }
    })); 
   
};

exports.getall=async(req,res)=>{
    await Payment.find({})
    .then(data=>{
       res.status(200).send({data:data});
       
   }).catch(err=>{
       res.status(500).send({error:err.massage})
       console.log("err");
   });
       
   }


   exports.getPayment = (req, res) => {
    Payment.find({}).exec((error, Payment) => {
        if (error) return res.status(400).json({ error });
        if (Payment) {
            const payment = this.createPayment(Payment)
            return res.status(201).json({ payment });
        }
    });
}

exports.updatePayment = (req, res) => {

    const {
        name,
        email,
        date,
        cardnumber,
        cvc,
        amount
    } = req.body;
  
    console.log(" id", req.params._id)

    Payment.findByIdAndUpdate(req.params._id, { $set: {  name:name ,email: email,cardnumber:cardnumber, cvc:cvc, amount: amount, date:date} },
        { new: true })
        .catch((err) => {
            console.log(err);
        })
}

exports.deleteById = (req, res) => {
    const { nic } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Payment.deleteOne({ _id: req.params._id }).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    } else {
      res.status(400).json({ error: "Params required" });
    }
  };







 





