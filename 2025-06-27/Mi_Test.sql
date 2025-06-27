DROP DATABASE IF EXISTS my_cat;
CREATE DATABASE my_cat DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE my_cat;
show databases;

create table tbl_test (	
	no int,
	str_data varchar(50)
);	
##=================================================== 1+2개발 초입 ===================================================
insert into tbl_test values(1,'1');
insert into tbl_test values(2,'2');
insert into tbl_test values(3,'100');
insert into tbl_test values(4,'HELLO WORLD');

select * from tbl_test;
drop table tbl_test;
drop table tbl_visitant_count;
##=================================================== 1+2개발 초입 ===================================================

create table tbl_visitant_count (				#방문자에 대한 정보를 업데이트하는 페이지를 url 요청 시,
	count int									#위 테이블에 count 값을 업데이트 (1씩 증가하는 그런 자동처리 업데이트까지 말고 단순하게
);												#아래 고정 쿼리(update tbl_visitant_count set count = 200) 를 한번 실행하는 기능 추가하기
insert into tbl_visitant_count values(0);				
select * from tbl_visitant_count;			

##=================================================== 방명록 초입 ===================================================
create table tbl_guest(				
	bno int auto_increment primary key,			
	btext text			
);					

insert into tbl_guest (btext) values('개');				
insert into tbl_guest (btext) values('고양이');				
select * from tbl_guest;	

#=================================================== 방명록 초입 ===================================================
			
select * from mi_member;
create table mi_member(
id char(50) primary key,
pw char(50) not null,
name char(50) not null
);

##=================================================== 카드 게임 ===================================================

use my_cat;
show tables;
drop table card_my;
create table card_my(
	no int primary key auto_increment,
    job char(20) not null default '전사',
    grade char(20) not null default 'N',
    id char(20) not null default 'cat'
);
select * from card_my;
insert into card_my value();

create table card_my_party(
	no int primary key auto_increment,
    job char(20) not null default '전사',
    grade char(20) not null default 'N',
    id char(20) not null default 'cat'
);
select * from card_my_party;
insert into card_my_party value();
delete from card_my_party;
truncate card_my_party;

##=================================================== 카드 게임의 자산 ===================================================
drop table my_wealth;
create table my_wealth(
    gold int UNSIGNED not null default 0,	-- 음수(-)를 허용하지 않고, 0 이상의 숫자만 저장할 수 있게 만드는 옵션
    dice int UNSIGNED not null default 0,
    id char(20) not null default 'cat'
);
select * from my_wealth;
insert into my_wealth value();
update my_wealth set gold = -1 where id = 'cat';
update my_wealth set gold = 1 where id = 'cat';
update my_wealth set dice = -1 where id = 'cat';
update my_wealth set dice = 1 where id = 'cat';
truncate my_wealth;