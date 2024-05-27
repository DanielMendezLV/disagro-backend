CREATE DATABASE disagro;

USE disagro;


CREATE TABLE Users(
    userId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    CONSTRAINT pk_usuario PRIMARY KEY (userId)
);

CREATE TABLE Products(
    productId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    type INT NOT NULL,
    price decimal(10,2) NOT NULL,
    CONSTRAINT pk_product PRIMARY KEY (productId)
);

CREATE TABLE Events(
    eventId INT NOT NULL AUTO_INCREMENT,
    discountService INT NOT NULL, 
    discountProduct INT NOT NULL,
    datecoming DATETIME NOT NULL,
    userId INT NOT NULL, 
    CONSTRAINT pk_event PRIMARY KEY (eventId),
    CONSTRAINT `fk_events_userId` FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`)
);

CREATE TABLE Events_products(
    eventId INT NOT NULL, 
    productId INT NOT NULL, 
    PRIMARY KEY (`eventId`, `productId`),
    CONSTRAINT `fk_events_products_eventId` FOREIGN KEY (`eventId`) REFERENCES `Events` (`eventId`),
    CONSTRAINT `fk_event_products_productId` FOREIGN KEY (`productId`) REFERENCES  `Products` (`productId`)
);

