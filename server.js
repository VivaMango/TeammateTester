var express = require("express");
var app = express();
var path = require("path");
var PORT = 4000
var htmlRoutes = require("./app/routing/htmlRoutes.js")
var apiRoutes = require("./app/routing/apiRoutes.js")

console.log("SERVERJS TEST")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app"))

htmlRoutes(app)
apiRoutes(app)

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/html/home.html"));
// });

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/html/survey.html"));
// });

// app.post("/api/friends")

app.listen(PORT, function() {
    console.log(`APP NOW LISTENING ON ${PORT}`);
});