var express = require("express");
require("./connection");
var sampleModel = require("./model");

var app = express();
app.use(express.json());

// api
// to add data to db
// async - wait for data to save
app.post("/add",async(req,res)=>{
	try {
		await sampleModel(req.body).save();
		res.send("Data added");
	} catch (error) {
		console.log(error);
	}
});

app.get("/view",async(req,res)=>{
	try {
		var output = await sampleModel.find();
		res.send(output);
	} catch (error) {
		console.log(error);
	}
});

app.delete("/remove/:id",async(req,res)=>{
	try {
		var id = req.params.id;
		await sampleModel.findByIdAndDelete(id);
		res.send("data deleted");
	} catch (error) {
		console.log(error);
	}
});

app.put("/update/:id",async(req,res)=>{
	try {
		var id = req.params.id;
		await sampleModel.findByIdAndUpdate(id,req.body);
		res.send("data updated");
	} catch (error) {
		console.log(error);
	}
})

app.listen("3000", ()=>{
	console.log("Port is up and running!");
});