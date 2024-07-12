var mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://gouthamsanthoshxyz:gouthamsanthosh@cluster0.fahnduf.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0"
	).then(()=>{
		console.log("Connected to db");
	}).catch((err)=>{
		console.log(err);
	});