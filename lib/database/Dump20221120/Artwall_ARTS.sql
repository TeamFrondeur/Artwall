-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: Artwall
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ARTS`
--

DROP TABLE IF EXISTS `ARTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ARTS` (
  `idART` int NOT NULL AUTO_INCREMENT,
  `artName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `artistName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currentBid` int DEFAULT NULL,
  `numBidders` int DEFAULT NULL,
  `genre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `artPath` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `owner` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idART`,`artName`),
  UNIQUE KEY `artName_UNIQUE` (`artName`),
  KEY `artistName` (`artistName`),
  CONSTRAINT `ARTS_ibfk_1` FOREIGN KEY (`artistName`) REFERENCES `USERS` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ARTS`
--

LOCK TABLES `ARTS` WRITE;
/*!40000 ALTER TABLE `ARTS` DISABLE KEYS */;
INSERT INTO `ARTS` VALUES (1,'Ensalada y Sol','chipa',5500,3,'Flora','flower3.jpg',NULL,NULL),(2,'Kimochi','chipa',1000000,5000,'Flora','flower1.jpg',NULL,NULL),(3,'yes','chipa',4000,10004,'Flora','flower2.jpg',NULL,NULL),(4,'sugui2','chipa',10000,0,'Misc','sugui2.jpg','2022-11-15 12:01:00',NULL),(5,'sugui3','chipa',10000,0,'Misc','sugui3.jpg','2022-11-16 12:01:00',NULL),(6,'ya','chipa',5000,0,'Misc','ya.jpg','2022-11-01 11:48:00',NULL),(7,'shapes1','chipa',50000,30,'Nature','shapes1.jpg','2022-11-01 11:15:00',NULL),(8,'spin1','chipa',50000,30,'Misc','spin1.jpg','2022-11-01 11:15:00',NULL),(9,'sun1','chipa',50000,30,'Misc','sun1.jpg','2022-11-01 11:15:00',NULL),(10,'woman1','chipa',50000,30,'Life','woman1.jpg','2022-11-01 11:15:00',NULL),(11,'glass','chipa',500,0,'Misc','glass.png','2022-11-18 10:49:00',NULL),(12,'glass2','all',9000,0,'Misc','glass2.png','2022-11-24 11:43:00',NULL),(13,'glass4','JohnReese',9000,0,'Misc','glass4.png','2022-11-29 12:19:00',NULL),(14,'glass5','alif1',7000,0,'Mis','glass5.png','2022-11-23 12:42:00',NULL),(15,'alif','alif1',3000,0,'Life','alif.jpg','2022-11-24 12:47:00',NULL),(18,'Error','alif1',4000,0,'Nature','Error.png','2022-11-24 23:23:00',NULL),(19,'wasabi','chipa',1,0,'Nature','wasabi.png','2022-11-22 23:25:00',NULL),(20,'coke','alif1',1000,0,'Misc','coke.png','2022-11-23 23:39:00',NULL),(21,'random','alif1',20000,0,'Misc','random.png','2022-12-08 23:42:00',NULL),(22,'ss','chipa',20,0,'Misc','ss.png','2022-11-19 18:51:00',NULL);
/*!40000 ALTER TABLE `ARTS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-20 19:53:58
