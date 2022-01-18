router=require("express").Router();
const {createBooking,getall,updatebooking,deleteById,getbookingbynic,saveBooking} = require('../controller/booking');


router.post('/bus/booking', createBooking);
router.get('/booking/getall',getall);
router.put('/booking/edit/:_id',updatebooking);
router.delete('/booking/del/:_id',deleteById);
router.post('/booking/search',getbookingbynic);


module.exports = router;