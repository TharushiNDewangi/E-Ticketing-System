const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index');
const {createBus, getall, updatebus, deleteById, getbusbyplatenumber}=require('../controller/bus') 

//const Product = require('../models/product');
const multer = require('multer');
//const upload=multer({dest:'uploads/'})

const shortid = require('shortid')
const path = require('path');
// const { createStudentInclass, getall, updatestudentinclass, deleteById, getstudentbyid, getstudentbygroupid } = require("../controller/Studentforclass");
// const { createBus } = require("../controller/bus");
//const Product = require('../models/product');


 
console.log("1");
router.post('/bus/createbus',createBus);
router.get('/bus/viewbuses',getall);
router.put('/bus/edit/:_id',updatebus);
router.delete('/bus/del/:_id',deleteById);
// router.get('/studentforclass/:studentgroupId',getstudentbyid);
router.post('/bus/sech',getbusbyplatenumber);


 module.exports = router;  