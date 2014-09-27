var express = require('express');
var router = express.Router();
var greetings = [ 'Hey', 'Howdy', 'Salut', 'Hallo', 'Ciao', 'Ahoj', 'Hola', 'Merhaba', 'Salaam', 'Adaab', 'Czesc', 'Namaskaar'];

/* GET users listing. */
router.get('/', function(req, res) {
    console.log('Route:', JSON.stringify(req.route));
    console.log('Params:', JSON.stringify(req.params));
    console.log('Query:', JSON.stringify(req.query));
    console.log('Body:', JSON.stringify(req.body));
    if(process.argv[2] == 'development') {
       res.json({ user: 'abajaj', greeting: greetings[Math.floor(Math.random()*greetings.length)] }); 
   } else {
       res.json({ user: req.headers['x-paas-uid'], greeting: greetings[Math.floor(Math.random()*greetings.length)] });
   }
});

module.exports = router;
