# bamazon DB

Amazon-like storefront that will take orders from customers and deplete stock from the store's inventory.

## Built With
* Javascript
* Node.js
* NPM Inquirer
* NPM mySQL
* SQL


## How It Works
1. User will first be shown the table of products.
![Products Table](https://github.com/dgallardo06/bamazon-db/blob/master/images/productTable.PNG)
2. User will be prompted with a question asking what they would like to buy.
![Products](https://github.com/dgallardo06/bamazon-db/blob/master/images/buyChoices.PNG)
3. After selecting an item, user will be prompted to enter quantity.
![Products](https://github.com/dgallardo06/bamazon-db/blob/master/images/selectItem.PNG)
4. If there is enough in stock, user will be displayed their total.
![Products](https://github.com/dgallardo06/bamazon-db/blob/master/images/total.PNG)
5. If there is not enough in stock, user will be shown a message of low stock and will be taken back to step 1.
![Products](https://github.com/dgallardo06/bamazon-db/blob/master/images/outOfStock.PNG)