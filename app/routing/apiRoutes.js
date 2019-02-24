var teammateData = require("../data/teammates.js")

module.exports = function(app) {
    app.post("/api/teammates" , function (req , res) {
        console.log(req.body)
        teammateData.push(req.body)
        res.send(teammateData)
    });
    
    app.get("/api/teammates" , function (req , res) {
        res.json(teammateData)
    })
};



console.log("APIROUTES IS LINKED")