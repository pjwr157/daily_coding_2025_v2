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
INSERT INTO products (name, price, category, imageUrl)
VALUES ('츠나마요', 200, '밥류', 'https://img.kewpie.co.jp/recipes_src/recipe/img/large/QP10008965_1L.jpg');

DELETE FROM products	# WHERE 안쓰면 다 지워짐 
WHERE id = 1;
#WHERE id IN (1,2,3,4);
#WHERE id BETWEEN 1 AND 10;
#WHERE category = '삭제할카테고리';

UPDATE products
SET price = 2000,
    category = '디저트'
    # name = '두바이 초콜릿'
    # imageUrl = 'https://img.croketglobal.net/item/contents/c31f8774-e569-4532-9773-ef995229dc3d.webp'
WHERE id = 1;

DELETE FROM products;
ALTER TABLE products AUTO_INCREMENT = 1;
select * from products;
drop table products;

desc products;

DELETE FROM products WHERE id=2;