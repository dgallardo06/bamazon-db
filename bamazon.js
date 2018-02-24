var mysql = require("mysql");
var inquirer = require("inquirer");

//create connection to the SQL DB
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "biCAriGA69!",
	database: "bamazon_DB"
});


//connect to mySQL server and SQL DB
connection.connect(function(error){
	if (error) throw error;

	//run the app (start function) after connection is made
	start();
	console.log("start function after connect");
});

function start(){
	connection.query("SELECT * FROM bamazon_DB.products", function(error, results){
		if (error) throw error;
		console.log(results);
		connection.end();
	});
}

/*function buyItem(){
	inquirer
		.prompt([
		{
			name: "item",
			type: "input",
			message: "What is the ID of the product you would like to buy?"
		}


			])
}*/