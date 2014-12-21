var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res) {
	var url = 'https://api.xirsys.com/getIceServers';
    var data = { ident: "ashish",
                 secret: "e2230dda-4384-49b2-afdf-b01b07bfb469",
                 domain: "https://ezgoing.herokuapp.com",
                 application: "default",
                 room: "default",
                 secure: 1
                };
    var config = { headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                   transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    }
                 };

	request.post({url: url, form: data}, function (error, response, body) {
		console.log('Error: ' + JSON.stringify(error));
		console.log('Response: ' + JSON.stringify(response));
		// console.log('Body: ' + JSON.stringify(body));

		if (!error && response.statusCode == 200) {
			console.log('Sending body');
			console.log('Body: ' + JSON.parse(body).d);
		    res.json(JSON.parse(body).d); // Print the google web page.
		}
	});  
});

module.exports = router;
