var express = require("express");
var app = express();
var path = require("path");
var PORT = 4000

console.log("SERVERJS TEST")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app"))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.listen(PORT, function() {
    console.log(`APP NOW LISTENING ON ${PORT}`);
});