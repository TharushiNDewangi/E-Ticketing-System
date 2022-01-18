//const router = express.Router();
const Bus = require('../models/bus');

// const nodemailer = require("nodemailer");



exports.createBus = (req, res) => {
    console.log("navodya")
        const {
            platenumber, time, drivername, contact,city,routenumber
        } = req.body;
        const bus = new Bus({
            platenumber,
            time,
            drivername,
            contact,
            city,
            routenumber 
           
        });
    
        bus.save(((error, Bus) => {
            if (error) return res.status(400).json({ error });
            if (Bus) {
                res.status(201).json({ Bus });
            }
        }));
    
      
    };



exports.getall=async(req,res)=>{
    await Bus.find({})
    .then(data=>{
       res.status(200).send({data:data});
   }).catch(err=>{
       res.status(500).send({error:err.massage})
       console.log(err);
   });
  
           
   }

   exports.getbus = (req, res) => {
    Bus.find({}).exec((error, bus) => {
        if (error) return res.status(400).json({ error });
        if (bus) {
            const buslist = createbus(bus)
            return res.status(201).json({ buslist });
        }
    });
}
exports.updatebus = (req, res) => {

    const {
         time,drivername,contact,city
    } = req.body;
  
    console.log(" id", req.params._id)

    Bus.findByIdAndUpdate(req.params._id, { $set: {  time:time ,drivername: drivername, contact: contact, city:city} },
        { new: true })
        .catch((err) => {
            console.log(err);
        })
}
exports.deleteById = (req, res) => {
    const { platenumber } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Bus.deleteOne({ _id: req.params._id }).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    } else {
      res.status(400).json({ error: "Params required" });
    }
  };

exports.getbusbyid=async(req,res)=>{
    if(req.params && req.params.platenumber){
        console.log(req.params.Bus)
        //console.log(req.params);
        await  Bus.findById(req.params.platenumber)
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  };
  exports.getbusbyplatenumber=async(req,res)=>{
    const platenumber= req.body.platenumber;
    //const feesId=
    
        console.log("xxx"+platenumber)
        //console.log(req.params);
        await  Bus.findOne({platenumber:platenumber})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    
    
  }

