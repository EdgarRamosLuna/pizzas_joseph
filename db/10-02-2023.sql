-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 10, 2023 at 06:47 PM
-- Server version: 10.4.20-MariaDB-1:10.4.20+maria~buster-log
-- PHP Version: 7.3.33-9+0~20230106.102+debian10~1.gbpc4e85f

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
-- Table structure for table `drinks`
--

CREATE TABLE `drinks` (
  `id` int(11) NOT NULL,
  `id_item` varchar(250) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sale_price` decimal(10,2) NOT NULL,
  `cant` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `drinks`
--

INSERT INTO `drinks` (`id`, `id_item`, `name`, `sale_price`, `cant`, `status`, `is_deleted`) VALUES
(1, '9f38c5d3-0581-4c27-8d77-a680d4bfa5f5', 'Coca Cola vidrio 500 ml', '20.00', 48, 1, 0),
(2, '088ed882-19b9-4d55-b0f0-ee4e9d476461', 'Coca Cola PET 500 ml', '20.00', 48, 1, 0),
(3, '6216688a-6d20-420e-a705-fa84dabb6f27', 'Coca Cola sin azucar 355 ml', '23.00', 48, 1, 0),
(4, '8589a6c9-9d65-49c0-be14-a2aee1772681', 'Coca Cola PET 2lt', '38.00', 48, 1, 0),
(5, '92daa314-a1ff-4ebf-9152-c7e841e427ce', 'Joya Ponche vidrio 500 ml', '20.00', 48, 1, 0),
(6, 'c6f9f12b-9760-4523-97f3-e30bfe46c365', 'Joya Ponche vidrio 500 ml', '20.00', 48, 1, 1),
(7, '3e1046b8-82d4-477c-a3d0-6f8de8ed19b9', 'Joya Manzana vidrio 500 ml', '20.00', 48, 1, 0),
(8, 'd6ea884d-eae3-4f77-81e2-cfd9bbf8ff47', 'Mundet Manzana vidrio 500 ml', '20.00', 48, 1, 0),
(9, 'f4de52c9-e77f-43f1-95b6-e0abf0498b5e', 'Sprite vidrio 500 ml', '20.00', 48, 1, 0),
(10, 'cef04dad-9288-4a89-a9a7-1026e0d25ebe', 'Fresca Toronja vidrio 500 ml', '20.00', 48, 1, 0),
(11, '8b32be23-7549-4fa6-b3eb-fb6d4d37529f', 'Fanta Naranja vidrio 500 ml', '20.00', 47, 1, 0),
(12, 'd3ed455a-7868-4dfd-b314-20c52833a404', 'Fanta Fresa vidrio 500 ml', '20.00', 48, 1, 0),
(13, 'a5f520d1-0279-4e8a-a59b-6ca9f926018c', 'Refrescos Vecinos vidrio 500 ml', '15.00', 48, 1, 0),
(14, '7563486f-ab7e-42fd-8787-7b58ab9a1c02', 'Power Ade ponche 600 ml', '25.00', 48, 1, 0),
(15, 'fd1b5d98-b332-43d4-b737-b5de4a8c6fe8', 'Power Ade moras 600 ml', '25.00', 48, 1, 0),
(16, '09bf26fa-b4a4-452a-b2ea-261d063516d1', 'Fuze Tea durazno 600 ml', '20.00', 48, 1, 0),
(17, '7f80cd86-4eb4-4294-9b10-2f1366ef21c9', 'Fuze Tea frutos 600 ml', '20.00', 48, 1, 0),
(18, 'af675e51-d3de-43d2-b74d-6a2f8739f480', 'Valle Frut Naranja 600 ml', '20.00', 48, 1, 0),
(19, '291704e7-862b-4b68-a15f-e32ca323a0c3', 'Ciel Purificada 600 ml', '15.00', 48, 1, 0),
(20, 'bfba61f4-24ff-40ef-9060-b022963eed10', 'Vasos Desechables', '2.00', 250, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `folios`
--

CREATE TABLE `folios` (
  `id` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `datetoday` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `folios`
--

INSERT INTO `folios` (`id`, `folio`, `datetoday`) VALUES
(1, 2, '2023-02-10');

-- --------------------------------------------------------

--
-- Table structure for table `pj_pro_mp`
--

CREATE TABLE `pj_pro_mp` (
  `id` int(11) NOT NULL,
  `id_item` text NOT NULL,
  `is_ing` tinyint(1) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `cant` int(11) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `date` datetime NOT NULL,
  `is_esp` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pj_pro_mp`
--

INSERT INTO `pj_pro_mp` (`id`, `id_item`, `is_ing`, `name`, `price`, `cant`, `is_deleted`, `date`, `is_esp`) VALUES
(1, '20477c07-0d56-442f-a4fb-94142727e8d4', 1, 'Peperoni', '0.00', 0, 1, '0000-00-00 00:00:00', 0),
(2, '391f4aaa-855b-462b-82e2-41c2eef1c14b', 1, 'Jamon', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(3, 'feb9f7d1-3df8-4e9f-9076-0a5aa69342f4', 1, 'Piña', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(4, '3a8f3f8e-f2ff-46b0-ac80-8c7888d5fa11', 1, 'Tocino', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(5, '622cafe4-09a1-4761-82bb-815f79043b3b', 1, 'Chorizo', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(6, '9e3945a3-aed7-4e85-b89a-0641b25bfae6', 1, 'Champiñones', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(7, '0f874956-3bdf-4226-bf22-f8a6c393525e', 1, 'Salchicha', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(8, 'd8f3f472-0928-49a1-b86f-adf313de5f87', 1, 'Salchicha para asar', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(9, '95150f25-f11e-40d9-bf19-7ce4a24955ae', 1, 'Salami', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(10, 'b1946ca4-fa15-403f-89f4-0eecaf116cae', 1, 'Aceitunas', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(11, '899766a0-19b9-4789-958f-e8233223479c', 1, 'Pimiento', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(12, '05a189a8-6b8a-46ea-885d-a7534308f685', 1, 'Carne', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(13, '0bed5e2c-98b0-4629-b627-699b26302d12', 1, 'Parmesano', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(14, '8d5948da-5200-4b79-8b01-b8971e77e1e0', 1, 'Atun', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(15, '9d0c2503-9088-490c-bb18-cace59320dbf', 1, 'Elote', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
(16, 'f5003326-69d9-4ab9-9b33-4e3437f73a42', 2, 'Cajas', '0.00', 238, 1, '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `pj_pro_op`
--

CREATE TABLE `pj_pro_op` (
  `id` int(11) NOT NULL,
  `id_item` text NOT NULL,
  `product` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `ha` decimal(10,2) NOT NULL,
  `sal` decimal(10,2) NOT NULL,
  `doca` decimal(10,2) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pj_pro_op`
--

INSERT INTO `pj_pro_op` (`id`, `id_item`, `product`, `price`, `ha`, `sal`, `doca`, `is_deleted`, `date`) VALUES
(1, '2863a0ca-e081-459a-8a4e-a479902634a8', 'Calzone', '60.00', '0.00', '0.00', '0.00', 0, '0000-00-00 00:00:00'),
(2, '569cc0e5-c048-4e36-9986-985e0d2c1c26', 'Boneless', '100.00', '0.00', '0.00', '0.00', 0, '0000-00-00 00:00:00'),
(3, '3dd4b800-c574-429e-841f-4baa4199d57d', 'Hamburguesa', '60.00', '70.00', '70.00', '80.00', 0, '0000-00-00 00:00:00'),
(4, 'affb92f8-952c-4bf5-93b0-fc5ca2d4871f', 'Papas francesas', '40.00', '0.00', '0.00', '0.00', 0, '0000-00-00 00:00:00'),
(5, '75acb17e-eb99-4dc3-bb43-bf4d8a2871bf', 'Spaguetti', '20.00', '0.00', '0.00', '0.00', 0, '0000-00-00 00:00:00'),
(6, 'd6dca593-3c63-41e0-9f6d-8019e933e125', 'Lonche Pierna', '60.00', '0.00', '0.00', '0.00', 1, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `pj_pro_pi`
--

CREATE TABLE `pj_pro_pi` (
  `id` int(11) NOT NULL,
  `id_item` text NOT NULL,
  `size` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `exin` decimal(10,2) NOT NULL,
  `chstedm` decimal(10,2) NOT NULL,
  `chstedp` decimal(10,2) NOT NULL,
  `exch` decimal(10,2) NOT NULL,
  `fin` decimal(10,2) NOT NULL,
  `pas` decimal(10,2) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pj_pro_pi`
--

INSERT INTO `pj_pro_pi` (`id`, `id_item`, `size`, `price`, `exin`, `chstedm`, `chstedp`, `exch`, `fin`, `pas`, `is_deleted`, `date`) VALUES
(1, 'e090376a-46b6-402e-b968-ed2f35a294a1', 'Individual', '55.00', '10.00', '10.00', '15.00', '10.00', '0.00', '0.00', 0, '0000-00-00 00:00:00'),
(2, '643fe0d6-717f-4688-b204-c81d62f211b4', 'Chica', '75.00', '10.00', '15.00', '20.00', '15.00', '0.00', '0.00', 0, '0000-00-00 00:00:00'),
(3, 'aabc23fe-6e95-4ea3-b0a7-fae2a1d1fc6e', 'Mediana', '110.00', '15.00', '20.00', '25.00', '20.00', '0.00', '10.00', 0, '0000-00-00 00:00:00'),
(4, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 'Familiar', '140.00', '15.00', '25.00', '30.00', '25.00', '50.00', '15.00', 0, '0000-00-00 00:00:00'),
(5, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 'Mega', '175.00', '20.00', '30.00', '35.00', '30.00', '55.00', '20.00', 0, '0000-00-00 00:00:00'),
(6, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 'Jumbo', '220.00', '20.00', '35.00', '40.00', '35.00', '60.00', '25.00', 0, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `total_cash` decimal(10,2) NOT NULL,
  `total_card` decimal(10,2) NOT NULL,
  `envio` decimal(10,2) NOT NULL,
  `type_order` tinyint(1) NOT NULL,
  `cant` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `address` varchar(250) NOT NULL,
  `client` varchar(250) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `date` datetime NOT NULL,
  `date_sale` date NOT NULL DEFAULT current_timestamp(),
  `folio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `total`, `total_cash`, `total_card`, `envio`, `type_order`, `cant`, `id_user`, `id_client`, `address`, `client`, `status`, `is_deleted`, `date`, `date_sale`, `folio`) VALUES
(1, '205.00', '205.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-09 20:28:59', '2023-02-09', 1),
(2, '175.00', '175.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-09 20:31:54', '2023-02-09', 2),
(3, '160.00', '160.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-09 21:27:49', '2023-02-09', 3),
(4, '60.00', '80.00', '0.00', '20.00', 2, 1, 1, 0, '20 de Noviembre \ncasa morada troca negra\n\ncambio de 200', 'Damian', 1, 0, '2023-02-09 21:42:22', '2023-02-09', 4),
(5, '315.00', '315.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-09 21:48:03', '2023-02-09', 5),
(6, '165.00', '165.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-09 21:49:08', '2023-02-09', 6),
(7, '440.00', '440.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-09 21:54:20', '2023-02-09', 7),
(8, '220.00', '240.00', '0.00', '20.00', 2, 1, 1, 0, 'Priv. Aquiles Serdan 12\ncasa naranja', 'Cristiana', 1, 0, '2023-02-09 22:46:43', '2023-02-09', 8),
(9, '140.00', '160.00', '0.00', '20.00', 2, 1, 1, 0, 'martin torres', '', 1, 0, '2023-02-09 22:47:47', '2023-02-09', 9),
(10, '515.00', '515.00', '0.00', '0.00', 1, 3, 1, 0, '', '', 1, 0, '2023-02-10 09:16:26', '2023-02-10', 1),
(11, '110.00', '130.00', '0.00', '20.00', 2, 1, 1, 0, 'PRIVADA SANGA CRUZ CASA AMARILLA A MEDIACION AFUERA BLOCK SALTILLO 400\nCAMBIO NO\n8421183521', 'ANA MARIA RAMIREZ', 1, 0, '2023-02-10 10:10:20', '2023-02-10', 2);

-- --------------------------------------------------------

--
-- Table structure for table `sales_items`
--

CREATE TABLE `sales_items` (
  `id` int(11) NOT NULL,
  `id_sale` int(11) NOT NULL,
  `id_item` varchar(250) NOT NULL,
  `cant` int(11) NOT NULL,
  `orilla_rell` int(11) NOT NULL,
  `queso_ex` tinyint(1) NOT NULL,
  `deditos` tinyint(1) NOT NULL,
  `pastor` tinyint(1) NOT NULL,
  `is_burg` tinyint(1) NOT NULL,
  `ing_burg` varchar(250) NOT NULL,
  `cat` varchar(250) NOT NULL,
  `type_ing` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales_items`
--

INSERT INTO `sales_items` (`id`, `id_sale`, `id_item`, `cant`, `orilla_rell`, `queso_ex`, `deditos`, `pastor`, `is_burg`, `ing_burg`, `cat`, `type_ing`) VALUES
(1, 1, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 2, 0, 0, 0, 0, '', 'pizza', 2),
(2, 2, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(3, 3, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(4, 3, '8b32be23-7549-4fa6-b3eb-fb6d4d37529f', 1, 0, 0, 0, 0, 0, '', 'drinks', 0),
(5, 4, '2863a0ca-e081-459a-8a4e-a479902634a8', 1, 0, 0, 0, 0, 0, '', 'op', 0),
(6, 5, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(7, 5, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(8, 6, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 2, 0, 0, 0, 0, '', 'pizza', 1),
(9, 7, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(10, 7, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(11, 8, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(12, 9, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(13, 10, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(14, 10, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(15, 10, '643fe0d6-717f-4688-b204-c81d62f211b4', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(16, 11, 'aabc23fe-6e95-4ea3-b0a7-fae2a1d1fc6e', 1, 0, 0, 0, 0, 0, '', 'pizza', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sales_items_ing`
--

CREATE TABLE `sales_items_ing` (
  `id` int(11) NOT NULL,
  `id_sale_item` int(11) NOT NULL,
  `id_ing` int(11) NOT NULL,
  `is_extra` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sales_items_ing`
--

INSERT INTO `sales_items_ing` (`id`, `id_sale_item`, `id_ing`, `is_extra`) VALUES
(1, 1, 1, 0),
(2, 1, 2, 0),
(3, 1, 3, 0),
(4, 2, 1, 0),
(5, 3, 2, 0),
(6, 3, 3, 0),
(7, 3, 5, 0),
(8, 3, 12, 0),
(9, 6, 1, 0),
(10, 6, 6, 0),
(11, 7, 1, 0),
(12, 7, 6, 0),
(13, 7, 2, 0),
(14, 7, 3, 0),
(15, 8, 1, 0),
(16, 8, 2, 0),
(17, 9, 2, 0),
(18, 9, 3, 0),
(19, 10, 4, 0),
(20, 10, 5, 0),
(21, 11, 2, 0),
(22, 11, 3, 0),
(23, 11, 1, 0),
(24, 12, 1, 0),
(25, 13, 1, 0),
(26, 14, 1, 0),
(27, 15, 1, 0),
(28, 16, 1, 0),
(29, 16, 12, 0);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `deliver_price` decimal(10,2) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `deliver_price`, `status`, `is_deleted`) VALUES
(1, '20.00', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `turnos`
--

CREATE TABLE `turnos` (
  `id` int(11) NOT NULL,
  `start` time NOT NULL,
  `end` time NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_admin`
--

CREATE TABLE `usuarios_admin` (
  `id` int(11) NOT NULL,
  `username` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `user_salt` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password_temporal` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `intentos` int(11) NOT NULL,
  `status_cuenta` tinyint(3) DEFAULT NULL,
  `last_login_attempt` int(11) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `p_storage` tinyint(1) NOT NULL,
  `p_sales` tinyint(1) NOT NULL,
  `p_users` tinyint(1) NOT NULL,
  `p_clients` tinyint(1) NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `usuarios_admin`
--

INSERT INTO `usuarios_admin` (`id`, `username`, `password`, `user_salt`, `password_temporal`, `intentos`, `status_cuenta`, `last_login_attempt`, `is_deleted`, `p_storage`, `p_sales`, `p_users`, `p_clients`, `admin`) VALUES
(1, 'admin', 'cdf1e42533759bf12742c13c5a3cf5a4c0c899427c94c400174170ff4f9ecc11ed68f019134424c33d1fffb0d45578f589e4e12136bdce59d23b8b699a92fce0', 'OkwLVStfOF6ClJ38iZB6t1W2e3MJ7Tfi44IhH9trW4UrLVNEQQk3xuylMvrHj2AfoOVop8K8T0sWJ0f0ZR5DU6mzJV9A53McUbTEWTR5aqpg0W1vyRMZE9IGlstCc094wHeRbZJdzYYecp44zXIPT3AGzu4iOT6ceptCwU0GNhoLpvWBkUrdtH6tGczVSfVsocGrxV43', '160c5d1835babbc2f8d8508dd1499dc3240b13f3f11283e029b1fd16cf15d32a528a730b2d5c9ba06ec3bddba7e6e6345707f9039aeaea6399bbcd8a1d286a79', 0, 1, 1676042111, 0, 1, 1, 1, 1, 1),
(2, 'dev', '2029a9cfbeaf81cfc119fe95e9d941dff88ce3441a4b72be89c480c6629672258c487bb176271fcc87a9764d51dd6fc1489a4090b3d0ce86d29995c7e755e972', 'HPGWJVD1sjuOAJbsWwVfgZCQjPFcf2LkQhUUucY0tfomVvaAsgh4JUBZ7dzTipOkx6iIyHu0AcxK91Im24bhlgIdhn0yi2aMVC1E1RZXmuFZcnj5APltU0A7StnSQt2NXFXCBwwpGqIestN8xa8DkgDXjREOufbVi1D9w9qJN9J0m5ML2TVLJDEzkcL6qdjdLRtr7zZz', NULL, 0, 1, 1675985212, 0, 1, 1, 1, 1, 1),
(3, 'recepcion', 'b55a426265dcb396e63d31b1ad244db234fb79a01e78fca2d55b5345d305d3f364c649374e27230a06326c026194c5d2bd3a156e370b41082758cc5597d47c6a', 'PDDDwrEqzTLX8H6eOKm7b6ypl51aKd9zc2itlcvFXnXl1EpUO1JNs6IH8JUq9FPZ3WbVSZeaAC4KEvkKHZhtDUjZhRlkmZ7xywW3kK8YWOZBjNXwPTHN61E3OgrgNEl7YuZvgqyhFUlwY1LJ8h2Qc3a3FSTvYBNucxAkxFosj0nZreZFMVNzdO0a06aXhEvXs7og7iUH', NULL, 0, 1, 1675996903, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_clientes`
--

CREATE TABLE `usuarios_clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `direccion` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `status_cuenta` tinyint(3) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `usuarios_clientes`
--

INSERT INTO `usuarios_clientes` (`id`, `nombre`, `direccion`, `status_cuenta`, `is_deleted`) VALUES
(1, 'Cliente de prueba', 'direccion de prueba', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `drinks`
--
ALTER TABLE `drinks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `folios`
--
ALTER TABLE `folios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pj_pro_mp`
--
ALTER TABLE `pj_pro_mp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pj_pro_op`
--
ALTER TABLE `pj_pro_op`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pj_pro_pi`
--
ALTER TABLE `pj_pro_pi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_items`
--
ALTER TABLE `sales_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_items_ing`
--
ALTER TABLE `sales_items_ing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios_admin`
--
ALTER TABLE `usuarios_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios_clientes`
--
ALTER TABLE `usuarios_clientes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `drinks`
--
ALTER TABLE `drinks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `folios`
--
ALTER TABLE `folios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pj_pro_mp`
--
ALTER TABLE `pj_pro_mp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `pj_pro_op`
--
ALTER TABLE `pj_pro_op`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pj_pro_pi`
--
ALTER TABLE `pj_pro_pi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `sales_items`
--
ALTER TABLE `sales_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `sales_items_ing`
--
ALTER TABLE `sales_items_ing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuarios_admin`
--
ALTER TABLE `usuarios_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuarios_clientes`
--
ALTER TABLE `usuarios_clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
