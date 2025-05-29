DROP DATABASE IF EXISTS my_cat;
CREATE DATABASE my_cat DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE my_cat;
show databases;

create table tbl_test (	
	no int,
	str_data varchar(50)
);	

insert into tbl_test values(1,'1');
insert into tbl_test values(2,'2');
insert into tbl_test values(3,'100');
insert into tbl_test values(4,'HELLO WORLD');

select * from tbl_test;
drop table tbl_test;