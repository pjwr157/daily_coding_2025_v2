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
drop table tbl_visitant_count;

create table tbl_visitant_count (				#방문자에 대한 정보를 업데이트하는 페이지를 url 요청 시,
	count int									#위 테이블에 count 값을 업데이트 (1씩 증가하는 그런 자동처리 업데이트까지 말고 단순하게
);												#아래 고정 쿼리(update tbl_visitant_count set count = 200) 를 한번 실행하는 기능 추가하기
insert into tbl_visitant_count values(0);				
select * from tbl_visitant_count;			

create table tbl_guest(				
	bno int auto_increment primary key,			
	btext text			
);					

insert into tbl_guest (btext) values('개');				
insert into tbl_guest (btext) values('고양이');				
select * from tbl_guest;				