// var declares global variable and can be re-initialised
// var a = 10;
// console.log(a);
// {
// 	var a = 20;
// 	console.log(a);
// }
// console.log(a);


// let declares local variable and cannot be re-initialised
// let b = 10;
// console.log(b);
// {
// 	let b = 20;
// 	console.log(b);
// }
// console.log(b);


// Arithmetic operators and concatenation
// let a = 12;
// let b = 2;
// console.log("Addition:", a+b);
// console.log("Subtraction:", a-b);
// console.log("Multiplication:", a*b);
// console.log("Division:", a/b);
// console.log("Remainder:", a%b);
// console.log(`Addition: ${a+b}`);


// Postfix operator
// let i = 1;
// console.log(i);
// let p = i++;
// console.log(p);
// console.log(i);


// Comparison(== doesn't care about datatype)
// let a = "3";
// let b = 3;
// if (a === b) {
// 	console.log("Equal")
// }
// else {
// 	console.log("Not equal")
// }


// Object and (object inside object)
// let car = {
// 	"name":"Audi",
// 	"model":"v8",
// 	"fuel":"petrol",
// 	"colours":{
// 		"white":"m1",
// 		"black":"m2"
// 	}
// };
// console.log(car);
// console.log(car.model);
// console.log(car.colours.white);


// Arrays(in js array is a collection of data - need not be homogenous)
// let fruits = ["Apple","Banana","Orange",12];
// console.log(fruits);
// console.log(fruits[0]);
// console.log("Length:",fruits.length);
// fruits.push("Grapes");
// fruits[0] = "Mango";
// console.log(fruits);
// fruits.unshift("Apple") //Insert element at start
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift() //Removes first element
// console.log(fruits);


// Array of objects
// let fsdclass = [{
// 	name:"goutham",
// 	rollno:45
// },
// {
// 	name:"gokul",
// 	rollno:32
// }];
// console.log(fsdclass);
// console.log(fsdclass[0].name);


// Function
// function add(a,b) {
// 	return a+b;
// }
// console.log(add(1,2));
// //Another method - Arrow function
// const sum = (a,b)=>{
// 	let c = a+b;
// 	console.log(c);
// }
// sum(2,2);
// const fullname = (firstName,lastName)=>{
// 	let fullName = `${firstName} ${lastName}`;
// 	console.log(fullName);
// }
// fullname("goutham","santhosh");


// Loop
//For loop
// for (let i=1;i<=5;i++){
// 	console.log(i);
// }
// let num = [1,4,7,9,3];
// for (let i=0;i<num.length;i++){
// 	console.log(num[i]);
// }
//While loop
// let i = 0;
// while (i<num.length){
// 	console.log(num[i]);
// 	i++;
// }
//Do while
// do{
// 	console.log(num[i]);
// 	i++;
// }
// while (i<num.length);
//Sum of array
// let sum = 0;
// for (i=0;i<num.length;i++){
// 	sum = sum + num[i];
// }
// console.log(sum)