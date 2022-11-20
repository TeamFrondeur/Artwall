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
-- Table structure for table `USERS`
--

DROP TABLE IF EXISTS `USERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USERS` (
  `idUSERS` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagePath` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idUSERS`,`userName`),
  UNIQUE KEY `userName_UNIQUE` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USERS`
--

LOCK TABLES `USERS` WRITE;
/*!40000 ALTER TABLE `USERS` DISABLE KEYS */;
INSERT INTO `USERS` VALUES (1,'chipa','shojeb.bhuiyan@gmail.com','26955ac706434deb417b1bcae9d485b5b1db3c90','prerana.PNG'),(4,'yes','yes@gmail.com','fb360f9c09ac8c5edb2f18be5de4e80ea4c430d0',NULL),(5,'why','why@gmail.com','10cff4034cedfb92a272cddd774b8b63e3bdad06','prerana.PNG'),(6,'keno','keno@gmail.com','7e3ed8186492aca8c039a0528716df31ad911f7e','prerana.PNG'),(7,'no','no@gmail.com','fd1286353570c5703799ba76999323b7c7447b06','prerana.PNG'),(8,'alif','alif@gmail.com','b413d90c53e7a1f22f9f32cd8965d843612326e9',NULL),(9,'all','all@gmail.com','f7c3bc1d808e04732adf679965ccc34ca7ae3441',NULL),(10,'JohnReese','alif@gmail.com','7eb29680f8ac7e766048548428143c24070eb7de','alif.jpg'),(11,'alif1','alif@gmail.com','7c222fb2927d828af22f592134e8932480637c0d',NULL),(12,'shojeb','shojeb@gmail.com','7c222fb2927d828af22f592134e8932480637c0d',NULL);
/*!40000 ALTER TABLE `USERS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-20  0:54:20
