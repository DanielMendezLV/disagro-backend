CREATE TABLE `Users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Products` (
  `productId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Events` (
  `eventId` int NOT NULL AUTO_INCREMENT,
  `discountService` int NOT NULL,
  `discountProduct` int NOT NULL,
  `datecoming` datetime NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`eventId`),
  KEY `fk_events_userId` (`userId`),
  CONSTRAINT `fk_events_userId` FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Events_products` (
  `eventId` int NOT NULL,
  `productId` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`eventId`,`productId`),
  KEY `fk_event_products_productId` (`productId`),
  CONSTRAINT `fk_event_products_productId` FOREIGN KEY (`productId`) REFERENCES `Products` (`productId`),
  CONSTRAINT `fk_events_products_eventId` FOREIGN KEY (`eventId`) REFERENCES `Events` (`eventId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Products` (`productId`, `name`, `type`, `price`) VALUES
(7, 'Regalia Maxx', 1, 1200.00),
(8, 'Supralid', 1, 500.00),
(9, 'Futron', 1, 300.00),
(10, 'Malathion', 1, 500.00),
(11, 'Cepadik', 1, 130.00),
(12, 'Clorfos', 1, 230.00),
(13, 'Agricultura Digital', 2, 1000.00),
(14, 'Eficiencia de Uso de Nutrientes', 2, 200.00),
(15, 'Microbioma del Suelo', 2, 400.00);