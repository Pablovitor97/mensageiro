CREATE DATABASE IF NOT EXISTS talkin;

USE talkin;

CREATE TABLE IF NOT EXISTS users(id int primary key auto_increment, name varchar(100), email varchar(100), username varchar(100), password varchar(100), token varchar(255), public_key varchar(50), private_key varchar(50));
CREATE TABLE IF NOT EXISTS logs(senderId int, receiverId int, message text, received_at timestamp default now, foreign key (senderId) references users(id), foreign key (receiverId) references users(id));