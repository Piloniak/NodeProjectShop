CREATE DATABASE IF NOT EXISTS `users`
DEFAULT CHARACTER SET utf8 COLLATE uft8_general_ci;
USE `users`;

CREATE TABLE IF NOT EXISTS `users`(
    `id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT
    `username` varchar(50) UNIQUE
    `password` varchar(150)
    `name` varchar(20)
    `lastname` varchar(40)
    `adress` varchar(100)
    `email` varchar(50)
    `phonenumber` varchar(12)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;