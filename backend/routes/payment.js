const router=require("express").Router();
const { createPayment,getall,updatePayment,deleteById} = require('../controller/payment');

router.post('/payment/create',createPayment);
router.get('/payment/getall',getall);
router.put('/payment/edit/:_id',updatePayment);
router.delete('/payment/del/:_id',deleteById);


 module.exports = router;  