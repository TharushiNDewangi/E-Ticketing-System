const Route = require('../models/routes');

exports.createRoute = (req, res) => {
console.log("dew")
    const {
        routeId, startingPoint, endingPoint, totalkm,chargersPerKm, maxCreditLimit
    } = req.body;
    const route = new Route({
        routeId,
        startingPoint,
        endingPoint,
        totalkm,
        chargersPerKm, 
        maxCreditLimit
    });

    route.save(((error, Route) => {
        if (error) return res.status(400).json({ error });
        if (Route) {
            res.status(201).json({ Route });
        }
    }));

  
};
exports.getAllRoutes = async (req, res) => {
    await Route.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(err => {
            res.status(500).send({ error: err.massage })
            console.log(err);
        });


}

exports.updateRoute = (req, res) => {

    const {
        routeId, startingPoint, endingPoint, totalkm,chargersPerKm, maxCreditLimit
    } = req.body;
    

    Route.findByIdAndUpdate(req.params._id, { $set: {startingPoint:startingPoint,endingPoint: endingPoint, totalkm: totalkm,chargersPerKm:chargersPerKm,maxCreditLimit:maxCreditLimit } },
        { new: true })
        .catch((err) => {
            console.log(err);
        })
}


exports.deleteById = (req, res) => {
    const { routeId } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Route.deleteOne({ _id: req.params._id }).exec((error, result) => {
            if (error) return res.status(400).json({ error });
            if (result) {
                res.status(202).json({ result });
            }
        });
    } else {
        res.status(400).json({ error: "Params required" });
    }
};

// exports.getfeesbyid = async (req, res) => {
//     if (req.params && req.params.routeId) {
//         console.log(req.params.routeId)
//         //console.log(req.params);
//         await Route.findById(req.params.routeId)
//             .then(data => {
//                 console.log(data);
//                 res.status(200).send({ data: data });
//                 //console.log(subjects);
//             }).catch(err => {
//                 res.status(400).send({ error: err.massage })
//             });
//     }
// }

// }
// //seach
exports.getRoutebyRouteID = async (req, res) => {
    const routeId = req.body.routeId;
    //const feesId=

    console.log("dew" + routeId)
    console.log(req.params);
    await Route.findOne({ routeId: routeId })
        .then(data => {
            console.log(data);
            res.status(200).send({ data: data });
            //console.log(subjects);
        }).catch(err => {
            res.status(400).send({ error: err.massage })
        });



}