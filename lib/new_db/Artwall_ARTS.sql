-- MariaDB dump 10.19  Distrib 10.9.2-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: Artwall
-- ------------------------------------------------------
-- Server version	10.9.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
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
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ARTS` (
  `idART` int(11) NOT NULL AUTO_INCREMENT,
  `artName` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `artistName` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currentBid` int(11) DEFAULT NULL,
  `numBidders` int(11) DEFAULT NULL,
  `genre` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `artPath` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
INSERT INTO `ARTS` VALUES
(1,'Ensalada y Sol','chipa',9015,4,'Flora','flower3.jpg','2022-11-22 12:00:00','chipa'),
(2,'Kimochi','chipa',4006,3,'Flora','flower1.jpg',NULL,'chipa'),
(3,'yes','chipa',4006,3,'Flora','flower2.jpg',NULL,'chipa'),
(4,'sugui2','chipa',4006,3,'Misc','sugui2.jpg','2022-11-15 12:01:00','chipa'),
(5,'sugui3','chipa',4006,3,'Misc','sugui3.jpg','2022-11-16 12:01:00','chipa'),
(6,'ya','chipa',4006,3,'Misc','ya.jpg','2022-11-01 11:48:00','chipa'),
(7,'shapes1','chipa',4007,4,'Nature','shapes1.jpg','2022-11-01 11:15:00','chipa'),
(8,'spin1','chipa',4006,3,'Misc','spin1.jpg','2022-11-01 11:15:00','chipa'),
(9,'sun1','chipa',4006,3,'Misc','sun1.jpg','2022-11-01 11:15:00','chipa'),
(10,'woman1','chipa',4006,3,'Life','woman1.jpg','2022-11-01 11:15:00','chipa'),
(11,'glass','chipa',4006,3,'Misc','glass.png','2022-11-18 10:49:00','chipa'),
(12,'glass2','all',4006,3,'Misc','glass2.png','2022-11-24 11:43:00','all'),
(13,'glass4','JohnReese',4006,3,'Misc','glass4.png','2022-11-29 12:19:00','JohnReese'),
(14,'glass5','alif1',4006,3,'Mis','glass5.png','2022-11-23 12:42:00','alif1'),
(15,'alif','alif1',4006,3,'Life','alif.jpg','2022-11-24 12:47:00','alif1'),
(18,'Error','alif1',4006,3,'Nature','Error.png','2022-11-24 23:23:00','alif1'),
(19,'wasabi','chipa',4006,3,'Nature','wasabi.png','2022-11-22 23:25:00','chipa'),
(20,'coke','alif1',4006,3,'Misc','coke.png','2022-11-23 23:39:00','alif1'),
(21,'random','alif1',4006,3,'Misc','random.png','2022-12-08 23:42:00','alif1'),
(22,'ss','chipa',4006,3,'Misc','ss.png','2022-11-19 18:51:00','chipa');
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

-- Dump completed on 2022-11-21  8:28:54
