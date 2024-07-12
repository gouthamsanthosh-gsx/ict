var express = require("express");
require("./connection");
var empModel = require("./model/employee");

var app = express();

//middleware
app.use(express.json());

// api
app.post("/add",async(req,res)=>{
	try {
		await empModel(req.body).save();
		res.send({message:"data added"});
	} catch (error) {
		console.error(error);
	}
});

app.listen("3000",()=>{
	console.log("Port is up and running!");
});