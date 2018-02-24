DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(50) NOT NULL,
	price DECIMAL(10,2) NOT NULL DEFAULT 0,
	stock_quantity INT NOT NULL DEFAULT 0,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rocking roller blades", "outdoor", 100, 10),
		("slick spinning spinner", "toys & games", 10, 50),
		("winnie pooh socks", "clothing", 5, 20),
		("tire swing", "outdoor", 30, 1),
		("crunchy carrots", "food & grocery", 1, 500),
		("deodorant", "beauty & health", 6, 40),
		("tricky rotating rubiks cube", "toys & games", 5.50, 25),
		("sick sounding speakers", "electronics", 60, 60),
		("stainless steel silver scooping spoon", "kitchen & dining", 2, 80),
		("cinder block", "home improvement", 4, 150);
