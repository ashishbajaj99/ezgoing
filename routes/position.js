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
                                                    latitude: 17.420575, 
                                                    longitude: 78.343460
                                                }
                                            },                                            
                'test@gmail.com':    { 
                                                name: 'Test Person', 
                                                position: {
                                                    latitude: 17.443425, 
                                                    longitude: 78.354937
                                                }
                                            },                                            

    },
    tsp: {
            'tsp1@gmail.com':   {
                                        name:'Driver1',
                                        car:'AP 28BS 1111', 
                                        phone:'90000-11111',                                         
                                        position: {
                                            latitude: 17.435101, 
                                            longitude: 78.343218
                                        }
                                },
            'tsp2@gmail.com':   {
                                        name:'Driver2', 
                                        car:'AP 28BS 22222', 
                                        phone:'90000-22222',                                         
                                        position: {
                                            latitude: 17.4203732,
                                            longitude: 78.3504731
                                        }
                                },
            'tsp3@gmail.com':   {
                                        name:'Driver3', 
                                        car:'AP 28BS 3333', 
                                        phone:'90000-33333',                                         
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
    if(req.query.userId)
        response = adminDb[req.query.type][req.query.userId];
    else
        response = adminDb[req.query.type];

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
