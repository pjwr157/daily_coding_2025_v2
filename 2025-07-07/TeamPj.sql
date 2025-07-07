CREATE DATABASE my_cat DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE my_cat;
show databases;
DROP DATABASE IF EXISTS my_cat;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  category VARCHAR(50),
  imageUrl TEXT);
  
select * from products;
drop table products;