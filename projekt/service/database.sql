CREATE DATABASE IF NOT EXISTS `shop_node`
DEFAULT CHARACTER SET utf8 COLLATE uft8_general_ci;
USE `shop_node`;

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



/*Products Table*/

CREATE TABLE IF NOT EXISTS 'products'(
    'id' int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT
    'name' varchar(30) NOT NULL
    'price' decimal(10,2) NOT NULL
    'amount' int(10) NOT NULL
    'image' varchar(20) NOT NULL
)

INSERT INTO 'products' ('id', 'name', 'price', 'amount', 'image') VALUES
(1,'marchewka', 1.50, 100, 'marchewka'),
(2,'pomidor', 2.20, 10, 'pomidor'),
(3,'salata', 4.50, 5, 'salata'),
(4,'jablko', 1.30, 150, 'jablko'),
(5,'gruszka', 1.20, 200, 'gruszka'),
(6,'baklazan', 3.50, 20, 'baklazan'),
(7,'banan', 2.40, 100, 'banan'),
(8,'pomarancza', 3.60, 120, 'pomarancza'),
(9,'mandarynka', 1.70, 80, 'mandarynka'),
(10,'ziemniak', 1.10, 300, 'ziemniak');