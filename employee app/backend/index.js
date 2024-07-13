var express = require("express");
var cors = require("cors");
require("./connection");
var empModel = require("./model/employee");

var app = express();

//middleware
app.use(express.json());
app.use(cors());

// api
app.post("/add",async(req,res)=>{
	try {
		await empModel(req.body).save();
		res.send({message:"data added"});
	} catch (error) {
		console.error(error);
	}
});
app.get("/get",async(req,res)=>{
	try {
		var output = await empModel.find();
		res.send(output);
	} catch (error) {
		console.error(error);
	}
});
app.delete("/delete/:id",async(req,res)=>{
	try {
		var id = req.params.id;
		await empModel.findByIdAndDelete(id);
		res.send({message:"data deleted"});
	} catch (error) {
		console.error(error);
	}
});
app.put("/update/:id",async(req,res)=>{
	try {
		var id = req.params.id;
		var data = await empModel.findByIdAndUpdate(id,req.body);
		res.send({message:"data updated",data});
	} catch (error) {
		console.error(error);
	}
})

app.listen("3000",()=>{
	console.log("Port is up and running!");
});