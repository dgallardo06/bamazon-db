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
	buyItem();
});

function start(){
	connection.query("SELECT item_id as ID, product_name as Product, price as Price FROM bamazon_DB.products", function(error, results){
		if (error) throw error;
		console.log("\n=========== *Products Available for Purchase* ===================");
		console.log(results);
		console.log("=================================================================\n");
	});
}

function buyItem(){
	connection.query("SELECT * FROM bamazon_DB.products", function(error, results){
		if (error) throw error;
		inquirer
			.prompt([
			{
				name: "item",
				type: "rawlist",
				choices: function(){
					var choiceArray = [];
					for (var i = 0; i < results.length; i++){
						choiceArray.push(results[i].product_name);
					}
					return choiceArray;
				},
				message: "What would you like to buy?"
			},
			{
				name: "quantity",
				type: "input",
				message: "How many?"
			}
			])
			.then(function(answer){
				var chosenItem;

				for (var i = 0; i < results.length; i++) {
					if (results[i].product_name === answer.item){
						chosenItem = results[i];
					}
				}

					if (chosenItem.stock_quantity >= answer.quantity){
						var newStock = chosenItem.stock_quantity - answer.quantity;

						var total = chosenItem.price * answer.quantity;
						
						connection.query("UPDATE bamazon_DB.products SET ? WHERE ?",
							[
								{
									stock_quantity: newStock
								},
								{
									item_id: chosenItem.item_id
								}
							],
							function(error) {
								if (error) throw error;
								console.log("\n=================================================================\n");
								console.log("Your total is: $" + total);
								console.log("=================================================================\n");
								connection.end();
							}
						);
					} else {
						console.log("=================================================================\n");
						console.log("Sorry! We're out of stock... :(");
						console.log("=================================================================\n");
						start();
						buyItem();
					}
			});
	});
	
}