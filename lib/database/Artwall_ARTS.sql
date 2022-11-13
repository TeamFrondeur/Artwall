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
  PRIMARY KEY (`idART`,`artName`),
  UNIQUE KEY `artName_UNIQUE` (`artName`),
  KEY `artistName` (`artistName`),
  CONSTRAINT `ARTS_ibfk_1` FOREIGN KEY (`artistName`) REFERENCES `USERS` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ARTS`
--

LOCK TABLES `ARTS` WRITE;
/*!40000 ALTER TABLE `ARTS` DISABLE KEYS */;
INSERT INTO `ARTS` VALUES
(1,'Ensalada y Sol','chipa',1000,1,'Misc','flower3.jpg'),
(2,'Kimochi','chipa',1000000,5000,'Misc','flower1.jpg'),
(3,'yes','chipa',2000000,10000,'Misc','flower2.jpg');
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

-- Dump completed on 2022-11-13 18:15:57
