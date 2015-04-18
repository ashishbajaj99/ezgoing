eg
===

eg - EzGoing is NodeJS/ExpressJS application demo. I am using this demo to show some examples on clean AngularJS based coding guidelines and framework. It uses Google Maps API to show a very crude web based implementation of what UBER does.

Home
===

To reach eg you can visit [http://ezgoing.co.in](http://ezgoing.co.in "eg Home")

Deployment
===

EzGoing front end is built using the MEAN stack: MongoDB (to house various platform configurations, etc.), Express as the server side framework, Angular for client side and Node.js (server side javascript).
 
The following commands are useful for deployment:

```
In the git bash console:
$ git clone git@github.com:ashishbajaj99/ezgoing
$ ./deploy.sh clean
$ npm test

Open browser for http://localhost:3000

Type Email address in the text box and click on the "Find Me" in the dropdown
You will get hard coded googlemap location set to Indian School of Business
Next click on "Pick Me Up" in the dropdown
You will see a modal launching with information of your Transport Service Provider/Driver

```
