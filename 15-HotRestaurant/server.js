//server requirements
//--------------------------------------------------
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//arrays
//------------------------------------------------
var tables = [
    {
        name: "name",
        phoneNumber: "123456789",
        email: "no@no.com",
        uid: 123
    }
];

var waiting = [
    {
        name: "name",
        phoneNumber: "123456789",
        email: "no@no.com",
        uid: 123
    }
];

//Routes
//-----------------------------------------------
//GET
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, ""))
});
app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, ""))
});
app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, ""))
});
app.get("/api/tables", function(req,res){
    return res.json(tables)
});
app.get("/api/waitlist", function(res,res){
    return res.json(waiting)
});

//POST

app.post("/api/tables", function(req,res){
    var newTable = req.body;
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable);
});

//start server
//-----------------------------------------------
app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
})