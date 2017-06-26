var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "ecommerce"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("\n---------------------------------------------------------------------------");
    console.log("\n\n\teCommerce Management Interface\n\n");
    console.log("---------------------------------------------------------------------------\n");
    entryOptions();
});

function viewProducts(){
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err, queryresults) {
        if (err) throw err;
        console.log("\n================================Displaying All Products======================\n");
        for(var i=0; i<queryresults.length; i++){
            console.log("\tID: "+queryresults[i].item_id+"\tName: "+queryresults[i].product_name+"\t\tPrice: "+queryresults[i].price+"\t\tQuantity: "+queryresults[i].stock_quantity);
        }
        console.log("\n=============================================================================\n");

        entryOptions();
    });
}

function viewLowInventory(){
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products WHERE stock_quantity < 5", function(err, queryresults) {
        if (err) throw err;
        console.log("\n====================Displaying Low Inventory Products======================\n");
        for(var i=0; i<queryresults.length; i++){
            console.log("\tID: "+queryresults[i].item_id+"\tName: "+queryresults[i].product_name+"\t\tPrice: "+queryresults[i].price+"\t\tQuantity: "+queryresults[i].stock_quantity);
        }
        console.log("\n===========================================================================\n");

        entryOptions();
    });
}

function addInventory(){
    inquirer.prompt([
        {
        type: "input",
        name: "idInput",
        message: "Enter ID of product you wish to add inventory for."
        },
        {
        type: "input",
        name: "quantityInput",
        message: "Enter quantity you wish to add."
        }
    ]).then(function(answer){
        connection.query("UPDATE products SET stock_quantity = stock_quantity + ? WHERE item_id = ?", [answer.quantityInput, answer.idInput], function(err, throwaway) {
            if (err) throw err;
            console.log("\n---------------------------------------------------------------------------");
            console.log("\n\tAdded new inventory\n\n");
            console.log("---------------------------------------------------------------------------\n");
            entryOptions();
        });
    });
}

function addNewProduct(){
    inquirer.prompt([
        {
            type: "input",
            name: "nameInput",
            message: "Enter name of new product: "
        },
        {
            type: "list",
            name: "departmentInput",
            message: "Enter name of department for product: ",
            choices: ["Health", "Food","Electronics","Toys"]
        },
        {
            type: "input",
            name: "priceInput",
            message: "Enter price of new product: "
        },
        {
            type: "input",
            name: "quantityInput",
            message: "Enter quantity of new product: "
        }
    ]).then(function(answer){
        connection.query(
            "INSERT INTO products SET ?",
            {
                product_name: answer.nameInput,
                department_name: answer.departmentInput,
                price: answer.priceInput,
                stock_quantity: answer.quantityInput
            },
            function(err) {
                if (err) throw err;
                console.log("\n---------------------------------------------------------------------------");
                console.log("\n\tAdded new inventory\n\n");
                console.log("---------------------------------------------------------------------------\n");
                entryOptions();
            }
        );
    });
}

function entryOptions(){

    options = ["View Products","View Low Inventory","Add to Inventory","Add New Product", "Exit"];

    inquirer.prompt([
        {
            type: "list",
            name: "entryChoice",
            message: "Management Options:",
            choices: options
        }
    ]).then(function(answer){
        if(answer.entryChoice === options[0]){
            viewProducts();
        }
        else if(answer.entryChoice === options[1]){
            viewLowInventory();
        }
        else if(answer.entryChoice === options[2]){
            addInventory();
        }
        else if(answer.entryChoice === options[3]){
            addNewProduct();
        }
        else{
            console.log("Exiting...");
            process.exit();
        }
    });
}