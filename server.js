//Dependencies
var express = require("express");
var path = require("path"); //not needed in this file?
var htmlRoutes = require("./app/routing/htmlRoutes.js")
var apiRoutes = require("./app/routing/apiRoutes.js")
var teammateData = require("./app/data/teammates.js")

//PORT
var PORT = process.env.PORT || 4000

console.log("SERVERJS TEST") //FOR TESTING

//Instantiating our app
var app = express();

//Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app"))

//Calling our imported route functions
htmlRoutes(app)
apiRoutes(app)


//MAIN SCREEN TURN ON
app.listen(PORT, function() {
    console.log(`APP NOW LISTENING ON ${PORT}`);
});