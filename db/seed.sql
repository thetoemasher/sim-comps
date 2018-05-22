create table authors(
id serial primary key,
name varchar(40)
);

insert into authors(name)
values('David Levithan');
insert into authors(name)
values('John Green');


create table books(
id serial primary key,
title varchar(40)
);

insert into books(title)
values('Looking for Alaska');
insert into books(title)
values('Will Grayson, Will Grayson');
insert into books(title)
values('Another Day');


create table bookinfo(
id serial primary key,
book_id integer REFERENCES books(id),
author_id integer REFERENCES authors(id)
);

insert into bookInfo(book_id, author_id) 
values(1, 2);
insert into bookInfo(book_id, author_id) 
values(2, 2);
insert into bookInfo(book_id, author_id) 
values(2, 1);
insert into bookInfo(book_id, author_id) 
values(3, 1);


create table userinfo(
id serial primary key,
username varchar(40)
);

insert into userinfo(username)
values ('thetoemasher');
insert into userinfo(username)
values ('johntravolta');


create table favorite_books(
id serial primary key,
user_id integer REFERENCES users(id),
book_id integer REFERENCES books(id)
)

insert into favorite_books(user_id, book_id)
values (1, 2);
insert into favorite_books(user_id, book_id)
values (2, 1);


select * from authors;
select * from books;
select * from bookinfo;
select * from userinfo;
select * from favorite_books;