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
-- Table structure for table `BIDS`
--

DROP TABLE IF EXISTS `BIDS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BIDS` (
  `idBIDS` int(11) NOT NULL AUTO_INCREMENT,
  `bidArt` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bidderName` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bidAmount` int(11) DEFAULT NULL,
  `bidTime` datetime DEFAULT NULL,
  PRIMARY KEY (`idBIDS`),
  KEY `bidderName` (`bidderName`),
  KEY `fk_BIDS_art_idx` (`bidArt`),
  CONSTRAINT `BIDS_ibfk_2` FOREIGN KEY (`bidderName`) REFERENCES `USERS` (`userName`),
  CONSTRAINT `fk_BIDS_art` FOREIGN KEY (`bidArt`) REFERENCES `ARTS` (`artName`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BIDS`
--

LOCK TABLES `BIDS` WRITE;
/*!40000 ALTER TABLE `BIDS` DISABLE KEYS */;
INSERT INTO `BIDS` VALUES
(1,'Ensalada y Sol','why',5000,NULL),
(2,'Ensalada y Sol','alif1',5500,NULL),
(3,'yes','alif1',1500,'2022-11-20 18:18:10'),
(4,'yes','chipa',2500,'2022-11-20 17:20:10'),
(5,'yes','alif1',3500,'2022-11-20 18:19:10'),
(6,'yes','chipa',4000,'2022-11-20 18:20:10'),
(7,'yes','chipa',4006,'2022-11-20 22:53:55'),
(8,'Ensalada y Sol','chipa',4007,'2022-11-20 23:23:26'),
(9,'Ensalada y Sol','chipa',9000,'2022-11-20 23:23:48'),
(10,'Ensalada y Sol','yes',9001,'2022-11-20 23:24:29'),
(11,'Ensalada y Sol','yes',9002,'2022-11-20 23:32:32'),
(12,'Ensalada y Sol','yes',9005,'2022-11-20 23:32:43'),
(13,'Ensalada y Sol','yes',9006,'2022-11-20 23:37:52'),
(14,'Ensalada y Sol','why',9007,'2022-11-20 23:38:11'),
(15,'Ensalada y Sol','yes',9008,'2022-11-20 23:41:24'),
(16,'Ensalada y Sol','yes',9009,'2022-11-20 23:41:38'),
(17,'Ensalada y Sol','yes',9010,'2022-11-20 23:41:52'),
(18,'Ensalada y Sol','yes',9011,'2022-11-20 23:43:19'),
(19,'Ensalada y Sol','yes',9012,'2022-11-20 23:45:45'),
(20,'Ensalada y Sol','yes',9013,'2022-11-20 23:45:57'),
(21,'Ensalada y Sol','yes',9013,'2022-11-20 23:45:58'),
(22,'Ensalada y Sol','chipa',9014,'2022-11-20 23:54:32'),
(23,'Ensalada y Sol','yes',9015,'2022-11-20 23:54:49'),
(24,'shapes1','yes',4007,'2022-11-21 00:00:27');
/*!40000 ALTER TABLE `BIDS` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`Frondeur`@`localhost`*/ /*!50003 trigger update_bid_info after insert on BIDS for each row
update ARTS
set currentBid=NEW.bidAmount, numBidders=(select count(distinct bidderName) from BIDS)
where artName=NEW.bidArt */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-21  8:28:54
