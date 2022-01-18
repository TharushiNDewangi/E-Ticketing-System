const Booking = require('../models/booking');
const nodemailer = require("nodemailer");

exports.createBooking = (req,res) => {

    const {
        nic,phone,startingPoint,endingPoint,time,date,quantity
    } = req.body;
  
    const booking = new Booking({
        nic,
        phone,
        startingPoint,
        endingPoint,
        time,
        date,
        quantity
    });
   
    booking.save(((error, Booking)=> { 
        if (error) return res.status(400).json({ error });
       
        if (Booking) {
            res.status(201).json({ Booking });
            console.log("save");
        }
    }));  
    
// booking.saveBooking(((error, Booking) => {
//     if (error) {
//         console.log(email);
//         const receiverEmail = email; // get the reciver email address from body of the  request
//         const senderMail = "edexonlineconferencemanagement@gmail.com"; // set emailmaddress of sender
//         const password = "asdqwe@123"; // set password of sender

//         try {
//             /*
//            create reusable transporter object using the default SMTP transport
//           */
//             let transporter = nodemailer.createTransport({
//                 service: "gmail", // use gmail as the email service
//                 port: 25, // port number
//                 secure: false, // true for 465, false for other ports
//                 auth: {
//                     // autnetication details
//                     user: senderMail,
//                     pass: password,
//                 },
//                 tls: {
//                     rejectUnauthorized: false,
//                 },
//             });
    
//             let HelperOptions = {
//                 from: senderMail, // sender address
//                 to: receiverEmail, // list of receivers
//                 subject: "Your salary pass your account", // Subject line
//                 text: "", // plain text body
//                 html: ` 
//                       <h3>This is an automatically generated email, please do not reply </h3>
//                       <li>Your salary pass your account check </li>
//                       <li>status: Successuly  </li>
//                       <li>amount: ${nic}</li>
//                       <li>amount: ${phone}</li>
//                       <li>amount: ${startingPoint}</li>
                      
//                       <h3>Best regards,</h3>
//                       <p>Sipni Higher Education center</p>`,
//             };
    
//             // HTML version of the message
    
//             transporter.sendMail(HelperOptions, (error, info) => {
//                 // send mail with defined transport object
//                 if (error) {
//                     return console.log(error);
//                 }
    
//                 console.log("The message was sent!");
    
//                 console.log(info);
    
//                 res.json(info); // send the json response
//             });
//         } catch (e) {
//             console.log(e);
//         }
//         } 
//     if (Booking) {
//         res.status(201).json({ Booking });
//         console.log(email);
//         const receiverEmail = email; // get the reciver email address from body of the  request
//         const senderMail = "edexonlineconferencemanagement@gmail.com"; // set emailmaddress of sender
//         const password = "asdqwe@123"; // set password of sender

//         try {
//             /*
//            create reusable transporter object using the default SMTP transport
//           */
//             let transporter = nodemailer.createTransport({
//                 service: "gmail", // use gmail as the email service
//                 port: 25, // port number
//                 secure: false, // true for 465, false for other ports
//                 auth: {
//                     // autnetication details
//                     user: senderMail,
//                     pass: password,
//                 },
//                 tls: {
//                     rejectUnauthorized: false,
//                 },
//             });
    
//             let HelperOptions = {
//                 from: senderMail, // sender address
//                 to: receiverEmail, // list of receivers
//                 subject: "Your salary pass your account", // Subject line
//                 text: "", // plain text body
//                 html: ` 
//                       <h3>This is an automatically generated email, please do not reply </h3>
//                       <li>Your salary pass your account check </li>
//                       <li>status: Successuly  </li>
//                       <li>amount: ${nic}</li>
//                       <li>amount: ${phone}</li>
//                       <li>amount: ${startingPoint}</li>
                      
//                       <h3>Best regards,</h3>
//                       <p>Sipni Higher Education center</p>`,
//             };
    
//             // HTML version of the message
    
//             transporter.sendMail(HelperOptions, (error, info) => {
//                 // send mail with defined transport object
//                 if (error) {
//                     return console.log(error);
//                 }
    
//                 console.log("The message was sent!");
    
//                 console.log(info);
    
//                 res.json(info); // send the json response
//             });
//         } catch (e) {
//             console.log(e);
//         }
//     }
// }));

}


exports.getall=async(req,res)=>{
    await Booking.find({})
    .then(data=>{
       res.status(200).send({data:data});
       
   }).catch(err=>{
       res.status(500).send({error:err.massage})
       console.log("err");
   });
       
   }

   exports.getbooking = (req, res) => {
    Booking.find({}).exec((error, Booking) => {
        if (error) return res.status(400).json({ error });
        if (Booking) {
            const booklist = createBooking(Booking)
            return res.status(201).json({ booklist });
        }
    });
}

exports.updatebooking = (req, res) => {

    const {
        nic,
        phone,
        startingPoint,
        endingPoint,
        time,
        date,
        quantity
    } = req.body;
  
    console.log(" id", req.params._id)

    Booking.findByIdAndUpdate(req.params._id, { $set: {  time:time ,nic: nic,startingPoint:startingPoint, endingPoint:endingPoint, phone: phone, date:date, quantity:quantity} },
        { new: true })
        .catch((err) => {
            console.log(err);
        })
}

exports.deleteById = (req, res) => {
    const { nic } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Booking.deleteOne({ _id: req.params._id }).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    } else {
      res.status(400).json({ error: "Params required" });
    }
  };

  exports.getbookingbyid=async(req,res)=>{
    if(req.params && req.params.nic){
        console.log(req.params.Booking)

        await  Booking.findById(req.params.nic)
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
        
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  };

  exports.getbookingbynic=async(req,res)=>{
    const nic= req.body.nic;
        await  Booking.findOne({nic:nic})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    
    
  }