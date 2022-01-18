const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index')
const {createRoute,getAllRoutes,getRoutebyRouteID,updateRoute,deleteById}=require('../controller/routeController') 
const multer = require('multer');
const shortid = require('shortid')
const path = require('path');




router.post('/route/create',createRoute);
router.get('/route/viewall',getAllRoutes);
router.put('/route/edit/:_id',updateRoute);
router.delete('/route/del/:_id',deleteById);
router.post('/route/sech',getRoutebyRouteID);
module.exports = router;  