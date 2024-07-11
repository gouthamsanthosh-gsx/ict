// import express
var express = require("express");

// initialization
var app = express();

// middleware

// api
app.get("/",(req,res) => {
	res.send("Hello, World!");
});
app.get("/login",(req,res) => {
	res.send("goutham santhosh");
});


// port assigning
app.listen(3000,(req,res) => {
	console.log("Port is up and running");
});