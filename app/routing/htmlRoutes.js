var express = require("express");
var path = require("path");

console.log("HTMLROUTES IS LINKED");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/html/home.html"));
    });
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/html/survey.html"));
    });
}


