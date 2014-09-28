var express = require('express');
var router = express.Router();

/* name has to be unique for every object, connections are an array of name */
var adminDb = {
    users: {    
                'bajaj.ashish@gmail.com':   { 
                                                name: 'Ashish Bajaj', 
                                                position: {
                                                    latitude: 17.434940, 
                                                    longitude: 78.341380
                                                }
                                            },
                'reddy.divya@gmail.com':    { 
                                                name: 'Divya Reddy', 
                                                position: {
                                                    latitude: 17.430575, 
                                                    longitude: 78.343460
                                                }
                                            },                                            
    },
    tsp: {
            'tsp1@gmail.com':   {
                                        name:'Driver1', 
                                        position: {
                                            latitude: 17.427514, 
                                            longitude: 78.341529
                                        }
                                },
            'tsp2@gmail.com':   {
                                        name:'Driver2', 
                                        position: {
                                            latitude: 17.443015, 
                                            longitude: 78.350517
                                        }
                                },
            'tsp3@gmail.com':   {
                                        name:'Driver3', 
                                        position: {
                                            latitude: 17.443425, 
                                            longitude: 78.354937
                                        }
                                }                                
    }
}
router.get('/', function(req, res) {
    // Needs to come from database
    var response;
    response = adminDb[req.query.type][req.query.userId];

    console.log('Route:', JSON.stringify(req.route));
    console.log('Params:', JSON.stringify(req.params));
    console.log('Query:', JSON.stringify(req.query));
    console.log('Body:', JSON.stringify(req.body));
    console.log(JSON.stringify(response));

    res.json(response);
});

router.post('/', function(req, res) {
    var response;
    if(req.headers['x-paas-uid'])
        response = {'status': 'success'};
    else
        response = {'status': 'failure'};

    console.log('Route:', JSON.stringify(req.route));
    console.log('Params:', JSON.stringify(req.params));
    console.log('Query:', JSON.stringify(req.query));
    console.log('Body:', JSON.stringify(req.body));
    console.log(JSON.stringify(response));

    res.json(response);
});

    
module.exports = router;
