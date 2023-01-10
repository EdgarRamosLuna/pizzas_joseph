-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 30, 2022 at 06:05 PM
-- Server version: 10.4.20-MariaDB-1:10.4.20+maria~buster-log
-- PHP Version: 7.3.33-4+0~20220627.98+debian10~1.gbp40b3e4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tcdnafvwdx`
--

-- --------------------------------------------------------

--
-- Table structure for table `pj_pro_mp`
--

CREATE TABLE `pj_pro_mp` (
  `id` int(11) NOT NULL,
  `id_item` text NOT NULL,
  `is_ing` tinyint(1) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price_bu` decimal(10,2) NOT NULL,
  `cant` int(11) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pj_pro_mp`
--

INSERT INTO `pj_pro_mp` (`id`, `id_item`, `is_ing`, `name`, `price_bu`, `cant`, `is_deleted`, `date`) VALUES
(1, '0', 1, 'Peperoni', '1.00', 100, 0, '0000-00-00 00:00:00'),
(2, '0', 1, 'Jamon', '1.00', 100, 0, '0000-00-00 00:00:00'),
(3, '0', 1, 'Piña', '1.00', 100, 0, '0000-00-00 00:00:00'),
(4, '0', 1, 'Tocino', '1.00', 100, 0, '0000-00-00 00:00:00'),
(5, '0', 1, 'Chorizo', '1.00', 100, 0, '0000-00-00 00:00:00'),
(6, '0', 1, 'Champiñones', '1.00', 100, 0, '0000-00-00 00:00:00'),
(7, '0', 1, 'Salchicha', '1.00', 100, 0, '0000-00-00 00:00:00'),
(8, '0', 1, 'Salchicha para asar', '1.00', 100, 0, '0000-00-00 00:00:00'),
(9, '0', 1, 'Salami', '1.00', 100, 0, '0000-00-00 00:00:00'),
(10, '0', 1, 'Aceitunas', '1.00', 100, 0, '0000-00-00 00:00:00'),
(11, '0', 1, 'Pimiento', '1.00', 100, 0, '0000-00-00 00:00:00'),
(12, '0', 1, 'Carne', '1.00', 100, 0, '0000-00-00 00:00:00'),
(13, '0', 1, 'Parmesano', '1.00', 100, 0, '0000-00-00 00:00:00'),
(14, '0', 1, 'Atun', '1.00', 100, 0, '0000-00-00 00:00:00'),
(15, '0', 1, 'Elote', '1.00', 100, 0, '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pj_pro_mp`
--
ALTER TABLE `pj_pro_mp`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pj_pro_mp`
--
ALTER TABLE `pj_pro_mp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
