#usage:  source ecommerce.sql

CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE products(
    item_id         INT NOT NULL AUTO_INCREMENT,
    product_name    VARCHAR(255),
    department_name VARCHAR(255),
    price           DOUBLE(8,2),
    stock_quantity  INT,
    popularity          INT,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity, popularity) 
    VALUES ("Soft Toothbrush", "Health", 2.00, 22, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, popularity) 
    VALUES ("Playstation 4", "Electronics", 300.00, 4, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, popularity) 
    VALUES ("Chocolate Cookies", "Food", 5.00, 5, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, popularity) 
    VALUES ("Milk", "Food", 2.00, 50, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, popularity) 
    VALUES ("Toy Sword", "Toys", 10.00, 22, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, popularity) 
    VALUES ("Vitamin C", "Health", 6.00, 2, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, popularity) 
    VALUES ("Strawberries", "Food", 5.00, 17, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, popularity) 
    VALUES ("Xbox One", "Electronics", 300.00, 0, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, popularity) 
    VALUES ("Mouthwash", "Health", 7.00, 1, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, popularity) 
    VALUES ("Peanuts", "Food", 4.00, 6, 0);