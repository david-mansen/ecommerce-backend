#-----CUSTOMER VIEW------

#retrieve all product ids,names,prices,
SELECT item_id, product_name, price
FROM products;

#check stock of product
SELECT product_name, price, stock_quantity 
FROM products
WHERE item_id = 1;

#update stock of product
UPDATE products
SET stock_quantity = 0
WHERE item_id = 1;


#------MANAGER VIEW-------

#view products for sale
SELECT * FROM products;


#view low inventory
SELECT * FROM products
WHERE stock_quantity < 5;

#add to inventory
UPDATE products
SET stock_quantity = 18
WHERE item_id = 1;

#add new product
#example
INSERT INTO products (product_name, department_name, price, stock_quantity, popularity) 
    VALUES ("Brush", "Health", 2.00, 22, 0);





#-------SUPERVISOR VIEW-------