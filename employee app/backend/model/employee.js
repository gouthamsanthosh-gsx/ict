var mongoose = require("mongoose");

var schema = mongoose.Schema({
	Name:String,
	Age:Number,
	Department:String,
	Salary:Number
});

var employeeModel = mongoose.model("employee",schema);
module.exports = employeeModel;