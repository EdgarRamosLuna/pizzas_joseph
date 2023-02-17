-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 11, 2023 at 11:07 PM
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
(1, '9f38c5d3-0581-4c27-8d77-a680d4bfa5f5', 'Coca Cola vidrio 500 ml', '20.00', 46, 1, 0),
(2, '088ed882-19b9-4d55-b0f0-ee4e9d476461', 'Coca Cola PET 500 ml', '20.00', 47, 1, 0),
(3, '6216688a-6d20-420e-a705-fa84dabb6f27', 'Coca Cola sin azucar 355 ml', '23.00', 48, 1, 0),
(4, '8589a6c9-9d65-49c0-be14-a2aee1772681', 'Coca Cola PET 2lt', '38.00', 48, 1, 0),
(5, '92daa314-a1ff-4ebf-9152-c7e841e427ce', 'Joya Ponche vidrio 500 ml', '20.00', 47, 1, 0),
(6, 'c6f9f12b-9760-4523-97f3-e30bfe46c365', 'Joya Ponche vidrio 500 ml', '20.00', 48, 1, 1),
(7, '3e1046b8-82d4-477c-a3d0-6f8de8ed19b9', 'Joya Manzana vidrio 500 ml', '20.00', 48, 1, 0),
(8, 'd6ea884d-eae3-4f77-81e2-cfd9bbf8ff47', 'Mundet Manzana vidrio 500 ml', '20.00', 48, 1, 0),
(9, 'f4de52c9-e77f-43f1-95b6-e0abf0498b5e', 'Sprite vidrio 500 ml', '20.00', 48, 1, 0),
(10, 'cef04dad-9288-4a89-a9a7-1026e0d25ebe', 'Fresca Toronja vidrio 500 ml', '20.00', 46, 1, 0),
(11, '8b32be23-7549-4fa6-b3eb-fb6d4d37529f', 'Fanta Naranja vidrio 500 ml', '20.00', 47, 1, 0),
(12, 'd3ed455a-7868-4dfd-b314-20c52833a404', 'Fanta Fresa vidrio 500 ml', '20.00', 48, 1, 0),
(13, 'a5f520d1-0279-4e8a-a59b-6ca9f926018c', 'Refrescos Vecinos vidrio 500 ml', '15.00', 48, 1, 0),
(14, '7563486f-ab7e-42fd-8787-7b58ab9a1c02', 'Power Ade ponche 600 ml', '25.00', 48, 1, 0),
(15, 'fd1b5d98-b332-43d4-b737-b5de4a8c6fe8', 'Power Ade moras 600 ml', '25.00', 48, 1, 0),
(16, '09bf26fa-b4a4-452a-b2ea-261d063516d1', 'Fuze Tea durazno 600 ml', '20.00', 48, 1, 0),
(17, '7f80cd86-4eb4-4294-9b10-2f1366ef21c9', 'Fuze Tea frutos 600 ml', '20.00', 48, 1, 0),
(18, 'af675e51-d3de-43d2-b74d-6a2f8739f480', 'Valle Frut Naranja 600 ml', '20.00', 46, 1, 0),
(19, '291704e7-862b-4b68-a15f-e32ca323a0c3', 'Ciel Purificada 600 ml', '15.00', 48, 1, 0),
(20, 'bfba61f4-24ff-40ef-9060-b022963eed10', 'Vasos Desechables', '2.00', 249, 1, 0);

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
(1, 18, '2023-02-11');

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
(1, '20477c07-0d56-442f-a4fb-94142727e8d4', 1, 'Peperoni', '0.00', 100, 0, '0000-00-00 00:00:00', 0),
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
(16, 'f5003326-69d9-4ab9-9b33-4e3437f73a42', 2, 'Cajas', '0.00', 217, 1, '0000-00-00 00:00:00', 0),
(17, '8168976f-8591-48f8-a7aa-69ae82019b67', 1, 'HAWAIIANNA', '0.00', 0, 0, '0000-00-00 00:00:00', 0),
(18, '645dae9c-d360-4466-a610-ed50493da0d1', 1, 'ITALIANA', '0.00', 0, 0, '0000-00-00 00:00:00', 0),
(19, 'fe39f0a5-9a40-4676-9958-1212ddb5b04f', 1, 'MEXICANA', '0.00', 0, 0, '0000-00-00 00:00:00', 0),
(20, '6c6d436a-5a14-45e6-af5a-67845b62d141', 1, 'RANCHERA', '0.00', 0, 0, '0000-00-00 00:00:00', 0),
(21, '17dd82a4-ef00-49c7-b8be-b6c539d04185', 1, 'VEGETARIANA', '0.00', 0, 0, '0000-00-00 00:00:00', 0),
(22, '6f7d86e3-a3f6-41a1-987e-6f30dca75843', 1, 'ESCABECHES', '0.00', 0, 0, '0000-00-00 00:00:00', 0),
(23, '4f468317-ceb8-4b0e-aa01-dd0d0145e4dd', 1, 'CEBOLLA', '0.00', 0, 0, '0000-00-00 00:00:00', 0),
(24, 'b12cc35d-9da0-4223-935f-acfdb25a8e59', 1, 'BBQ', '0.00', 0, 0, '0000-00-00 00:00:00', 0),
(25, 'badca196-e5f1-4885-896b-6acd090a545e', 1, 'BUFALO', '0.00', 0, 0, '0000-00-00 00:00:00', 0),
(26, '145d1823-0d40-445c-99e6-257e7dee5315', 1, 'M. HABANERO', '0.00', 0, 0, '0000-00-00 00:00:00', 0);

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
(1, '2863a0ca-e081-459a-8a4e-a479902634a8', 'Calzone', '60.00', '0.00', '0.00', '0.00', 1, '0000-00-00 00:00:00'),
(2, '569cc0e5-c048-4e36-9986-985e0d2c1c26', 'Boneless', '100.00', '0.00', '0.00', '0.00', 1, '0000-00-00 00:00:00'),
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
(6, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 'Jumbo', '220.00', '20.00', '35.00', '40.00', '35.00', '60.00', '25.00', 0, '0000-00-00 00:00:00'),
(7, '294e1371-af02-49c4-a277-c83b99c7f203', 'Calzone', '60.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', 0, '0000-00-00 00:00:00'),
(8, '33d932ea-92f8-4b72-932b-8f71487ad765', 'Bone Less', '100.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', 0, '0000-00-00 00:00:00');

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
  `folio` int(11) NOT NULL,
  `cambio` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `total`, `total_cash`, `total_card`, `envio`, `type_order`, `cant`, `id_user`, `id_client`, `address`, `client`, `status`, `is_deleted`, `date`, `date_sale`, `folio`, `cambio`) VALUES
(1, '205.00', '205.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-09 20:28:59', '2023-02-09', 1, '0.00'),
(2, '175.00', '175.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-09 20:31:54', '2023-02-09', 2, '0.00'),
(3, '160.00', '160.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-09 21:27:49', '2023-02-09', 3, '0.00'),
(4, '60.00', '80.00', '0.00', '20.00', 2, 1, 1, 0, '20 de Noviembre \ncasa morada troca negra\n\ncambio de 200', 'Damian', 1, 0, '2023-02-09 21:42:22', '2023-02-09', 4, '0.00'),
(5, '315.00', '315.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-09 21:48:03', '2023-02-09', 5, '0.00'),
(6, '165.00', '165.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-09 21:49:08', '2023-02-09', 6, '0.00'),
(7, '440.00', '440.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-09 21:54:20', '2023-02-09', 7, '0.00'),
(8, '220.00', '240.00', '0.00', '20.00', 2, 1, 1, 0, 'Priv. Aquiles Serdan 12\ncasa naranja', 'Cristiana', 1, 0, '2023-02-09 22:46:43', '2023-02-09', 8, '0.00'),
(9, '140.00', '160.00', '0.00', '20.00', 2, 1, 1, 0, 'martin torres', '', 1, 0, '2023-02-09 22:47:47', '2023-02-09', 9, '0.00'),
(10, '515.00', '515.00', '0.00', '0.00', 1, 3, 1, 0, '', '', 1, 0, '2023-02-10 09:16:26', '2023-02-10', 1, '0.00'),
(11, '110.00', '130.00', '0.00', '20.00', 2, 1, 1, 0, 'PRIVADA SANGA CRUZ CASA AMARILLA A MEDIACION AFUERA BLOCK SALTILLO 400\nCAMBIO NO\n8421183521', 'ANA MARIA RAMIREZ', 1, 0, '2023-02-10 10:10:20', '2023-02-10', 2, '0.00'),
(12, '55.00', '55.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 13:04:53', '2023-02-10', 3, '0.00'),
(13, '220.00', '220.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 13:26:44', '2023-02-10', 4, '0.00'),
(14, '205.00', '205.00', '0.00', '0.00', 1, 3, 1, 0, '', '', 1, 0, '2023-02-10 13:31:00', '2023-02-10', 5, '0.00'),
(15, '150.00', '150.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-10 13:40:21', '2023-02-10', 6, '0.00'),
(16, '40.00', '40.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-10 14:05:22', '2023-02-10', 7, '0.00'),
(17, '110.00', '110.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 14:46:59', '2023-02-10', 8, '0.00'),
(18, '175.00', '175.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 14:56:36', '2023-02-10', 9, '0.00'),
(19, '75.00', '75.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-10 15:15:19', '2023-02-10', 10, '0.00'),
(20, '110.00', '110.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 15:56:17', '2023-02-10', 11, '0.00'),
(21, '220.00', '220.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 16:08:39', '2023-02-10', 12, '0.00'),
(22, '95.00', '95.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-10 16:40:15', '2023-02-10', 13, '0.00'),
(23, '175.00', '195.00', '0.00', '20.00', 2, 1, 1, 0, 'VIESCA 112\n\nANTES DE PANTEON DE SAN JOSE ESTANQUILLO EN BANQUETA\n\nCmbio de 200', 'KARLA', 1, 0, '2023-02-10 16:58:45', '2023-02-10', 14, '0.00'),
(24, '55.00', '55.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 17:21:45', '2023-02-10', 15, '0.00'),
(25, '160.00', '160.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-10 17:46:48', '2023-02-10', 16, '0.00'),
(26, '175.00', '195.00', '0.00', '20.00', 2, 1, 1, 0, 'guadalupe 7 agua de los padres rosa 2 pisos en la esquina tienda peralito cam 500', 'andrea garcia', 1, 0, '2023-02-10 18:14:19', '2023-02-10', 17, '0.00'),
(27, '140.00', '160.00', '0.00', '20.00', 2, 1, 1, 0, 'santa catarina #69,atras del combugas en la huerta\ncambio de $200\n8421189138', 'hector robledo', 1, 0, '2023-02-10 18:47:45', '2023-02-10', 18, '0.00'),
(28, '220.00', '240.00', '0.00', '20.00', 2, 1, 1, 0, 'calle margaritas  134 saltillo 400\ncasa amarilla cam 500\n8421132378', 'maria del carmen perez', 1, 0, '2023-02-10 18:54:28', '2023-02-10', 19, '0.00'),
(29, '140.00', '140.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 19:08:51', '2023-02-10', 20, '0.00'),
(30, '55.00', '75.00', '0.00', '20.00', 2, 1, 1, 0, 'prolongacion cepeda 102 saltillo 400\ndela farmacia hacia arriba segunda casa  cafe c amarillo\n cam 200', 'marina quesada', 1, 0, '2023-02-10 19:15:16', '2023-02-10', 21, '0.00'),
(31, '140.00', '160.00', '0.00', '20.00', 2, 1, 1, 0, 'CIRILO RDZ 317 CIUDADELA\n\nMARCELA ESPINOZA\n\nCAMBIO 200', '', 1, 0, '2023-02-10 19:25:18', '2023-02-10', 22, '0.00'),
(32, '440.00', '440.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-10 19:27:18', '2023-02-10', 23, '0.00'),
(33, '205.00', '225.00', '0.00', '20.00', 2, 1, 1, 0, 'granada 203 valle de parras\n\nXITLALY RANGEL', '', 1, 0, '2023-02-10 19:31:39', '2023-02-10', 24, '0.00'),
(34, '280.00', '280.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-10 19:36:19', '2023-02-10', 25, '0.00'),
(35, '110.00', '0.00', '130.00', '20.00', 2, 1, 1, 0, 'NUEVO LEON 142 COL FEDERICO CARDENAS CASA NARANJA C AMARILLO \nCAMIONETA CAFE ', '', 1, 0, '2023-02-10 19:44:54', '2023-02-10', 26, '0.00'),
(36, '75.00', '75.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 20:01:19', '2023-02-10', 27, '0.00'),
(37, '110.00', '110.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 20:27:51', '2023-02-10', 28, '0.00'),
(38, '480.00', '480.00', '0.00', '0.00', 1, 3, 1, 0, '', '', 1, 0, '2023-02-10 20:33:48', '2023-02-10', 29, '0.00'),
(39, '175.00', '175.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 20:38:19', '2023-02-10', 30, '0.00'),
(40, '165.00', '165.00', '0.00', '0.00', 1, 3, 1, 0, '', '', 1, 0, '2023-02-10 20:54:31', '2023-02-10', 31, '0.00'),
(41, '140.00', '160.00', '0.00', '20.00', 2, 1, 1, 0, 'PROL MORELOS 29 CASA NARANJA PORTON CAFE A 2 CASAS MENUDO LA NEGRITA PERICO BAJANDO CENTRAL\nNO CAMB', 'CARMEN IBARRA', 1, 0, '2023-02-10 21:01:59', '2023-02-10', 32, '0.00'),
(42, '97.00', '97.00', '0.00', '0.00', 1, 3, 1, 0, '', '', 1, 0, '2023-02-10 21:25:56', '2023-02-10', 33, '0.00'),
(43, '175.00', '195.00', '0.00', '20.00', 2, 1, 1, 0, 'SANTO NIÑO CALLE FRANCISCO Y MADERO 685 CASA VERDE CAMIONETA VERDE CASA DE INFONAVIT \n8421482383', 'ALBERTO PEREZ ', 1, 0, '2023-02-10 21:31:12', '2023-02-10', 34, '0.00'),
(44, '165.00', '165.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-10 21:32:30', '2023-02-10', 35, '0.00'),
(45, '140.00', '160.00', '0.00', '20.00', 2, 1, 1, 0, 'GRANADA # 314 VALLE DE PARRAS\n2 PISOS NARANJA\n\nCAMBIO $200', 'Teresa de la Tore', 1, 0, '2023-02-11 11:35:34', '2023-02-11', 1, '0.00'),
(46, '140.00', '140.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-11 11:47:19', '2023-02-11', 2, '0.00'),
(47, '130.00', '130.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-11 11:59:36', '2023-02-11', 3, '0.00'),
(48, '195.00', '195.00', '0.00', '0.00', 1, 1, 1, 0, '\n8421016671', '', 1, 0, '2023-02-11 12:06:23', '2023-02-11', 4, '0.00'),
(49, '60.00', '60.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-11 12:20:28', '2023-02-11', 5, '0.00'),
(50, '40.00', '40.00', '0.00', '0.00', 1, 2, 1, 0, '', '', 1, 0, '2023-02-11 12:34:34', '2023-02-11', 6, '0.00'),
(51, '140.00', '140.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-11 12:51:41', '2023-02-11', 7, '0.00'),
(52, '165.00', '185.00', '0.00', '20.00', 2, 1, 1, 2, 'CANTERAS DE SAN ISIDRO SN.\nFACHADA DE PIEDRA\nTACUBAYA', 'Edgar Ramos', 1, 0, '2023-02-11 13:29:24', '2023-02-11', 8, '0.00'),
(53, '175.00', '175.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-11 15:09:58', '2023-02-11', 9, '0.00'),
(54, '140.00', '140.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-11 15:20:24', '2023-02-11', 10, '0.00'),
(55, '75.00', '95.00', '0.00', '20.00', 2, 1, 1, 0, 'nayarit 315coi vidriera\ncam 100', 'lourdes', 1, 0, '2023-02-11 15:24:37', '2023-02-11', 11, '0.00'),
(56, '175.00', '195.00', '0.00', '20.00', 2, 1, 1, 0, 'saltillo 400 calle margaritas 11\nmicelanea tadeo \ncam200', 'yobani', 1, 0, '2023-02-11 15:29:04', '2023-02-11', 12, '0.00'),
(57, '170.00', '170.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-11 15:31:38', '2023-02-11', 13, '0.00'),
(58, '220.00', '220.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-11 15:50:34', '2023-02-11', 14, '0.00'),
(59, '220.00', '240.00', '0.00', '20.00', 2, 1, 1, 0, 'calle segunda 710 col vidriera casa 2 pisos barandal blanco de corazon carro blanco 8421014855\n', 'cristina sustaita', 1, 0, '2023-02-11 16:22:26', '2023-02-11', 15, '0.00'),
(60, '140.00', '140.00', '0.00', '0.00', 1, 1, 1, 0, '', '', 1, 0, '2023-02-11 16:23:31', '2023-02-11', 16, '0.00'),
(61, '280.00', '300.00', '0.00', '20.00', 2, 1, 1, 0, 'TORTILLERIA LA IDEAL', '', 1, 0, '2023-02-11 16:43:58', '2023-02-11', 17, '0.00'),
(62, '140.00', '160.00', '0.00', '20.00', 2, 1, 1, 0, 'CUAUHTEMOC # 64\nENTRE FLOR DE MAYO Y ROBERTO RIVAS,\nMARILLA FACHADA DE PIEDRA\n\nGIBRAN', '', 1, 0, '2023-02-11 16:46:29', '2023-02-11', 18, '0.00');

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
(16, 11, 'aabc23fe-6e95-4ea3-b0a7-fae2a1d1fc6e', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(17, 12, 'e090376a-46b6-402e-b968-ed2f35a294a1', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(18, 13, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(19, 14, '643fe0d6-717f-4688-b204-c81d62f211b4', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(20, 14, '643fe0d6-717f-4688-b204-c81d62f211b4', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(21, 14, 'e090376a-46b6-402e-b968-ed2f35a294a1', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(22, 15, '643fe0d6-717f-4688-b204-c81d62f211b4', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(23, 15, '643fe0d6-717f-4688-b204-c81d62f211b4', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(24, 16, '088ed882-19b9-4d55-b0f0-ee4e9d476461', 1, 0, 0, 0, 0, 0, '', 'drinks', 0),
(25, 16, 'cef04dad-9288-4a89-a9a7-1026e0d25ebe', 1, 0, 0, 0, 0, 0, '', 'drinks', 0),
(26, 17, 'aabc23fe-6e95-4ea3-b0a7-fae2a1d1fc6e', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(27, 18, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(28, 19, 'e090376a-46b6-402e-b968-ed2f35a294a1', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(29, 19, 'cef04dad-9288-4a89-a9a7-1026e0d25ebe', 1, 0, 0, 0, 0, 0, '', 'drinks', 0),
(30, 20, 'aabc23fe-6e95-4ea3-b0a7-fae2a1d1fc6e', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(31, 21, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(32, 22, '643fe0d6-717f-4688-b204-c81d62f211b4', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(33, 22, '9f38c5d3-0581-4c27-8d77-a680d4bfa5f5', 1, 0, 0, 0, 0, 0, '', 'drinks', 0),
(34, 23, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(35, 24, 'e090376a-46b6-402e-b968-ed2f35a294a1', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(36, 25, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(37, 25, 'af675e51-d3de-43d2-b74d-6a2f8739f480', 1, 0, 0, 0, 0, 0, '', 'drinks', 0),
(38, 26, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(39, 27, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(40, 28, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(41, 29, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(42, 30, 'e090376a-46b6-402e-b968-ed2f35a294a1', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(43, 31, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(44, 32, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(45, 32, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(46, 33, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 2, 0, 0, 0, 0, '', 'pizza', 2),
(47, 34, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(48, 34, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(49, 35, 'aabc23fe-6e95-4ea3-b0a7-fae2a1d1fc6e', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(50, 36, '643fe0d6-717f-4688-b204-c81d62f211b4', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(51, 37, 'aabc23fe-6e95-4ea3-b0a7-fae2a1d1fc6e', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(52, 38, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(53, 38, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(54, 38, '569cc0e5-c048-4e36-9986-985e0d2c1c26', 2, 0, 0, 0, 0, 0, '', 'op', 0),
(55, 39, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(56, 40, 'e090376a-46b6-402e-b968-ed2f35a294a1', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(57, 40, 'e090376a-46b6-402e-b968-ed2f35a294a1', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(58, 40, 'e090376a-46b6-402e-b968-ed2f35a294a1', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(59, 41, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(60, 42, '643fe0d6-717f-4688-b204-c81d62f211b4', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(61, 42, '92daa314-a1ff-4ebf-9152-c7e841e427ce', 1, 0, 0, 0, 0, 0, '', 'drinks', 0),
(62, 42, 'bfba61f4-24ff-40ef-9060-b022963eed10', 1, 0, 0, 0, 0, 0, '', 'drinks', 0),
(63, 43, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(64, 44, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 2, 0, 0, 0, 0, '', 'pizza', 2),
(65, 45, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(66, 46, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(67, 47, 'aabc23fe-6e95-4ea3-b0a7-fae2a1d1fc6e', 1, 2, 0, 0, 0, 0, '', 'pizza', 1),
(68, 48, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(69, 49, '294e1371-af02-49c4-a277-c83b99c7f203', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(70, 50, '9f38c5d3-0581-4c27-8d77-a680d4bfa5f5', 1, 0, 0, 0, 0, 0, '', 'drinks', 0),
(71, 50, 'af675e51-d3de-43d2-b74d-6a2f8739f480', 1, 0, 0, 0, 0, 0, '', 'drinks', 0),
(72, 51, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(73, 52, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 2, 0, 0, 0, 0, '', 'pizza', 1),
(74, 53, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(75, 54, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(76, 55, '643fe0d6-717f-4688-b204-c81d62f211b4', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(77, 56, 'c3d059d3-4d37-4dd8-b078-d5c548fa2baa', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(78, 57, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 1, 0, 0, 0, 0, '', 'pizza', 2),
(79, 58, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(80, 59, '6da6a924-c92d-43a9-8b6a-f3e76e002b4a', 1, 0, 0, 0, 0, 0, '', 'pizza', 2),
(81, 60, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1),
(82, 61, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 2, 0, 0, 0, 0, 0, '', 'pizza', 1),
(83, 62, 'bdf494b9-b3d5-4145-ae5f-45b19a953c3c', 1, 0, 0, 0, 0, 0, '', 'pizza', 1);

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
(29, 16, 12, 0),
(30, 17, 4, 0),
(31, 17, 12, 0),
(32, 18, 1, 0),
(33, 18, 6, 0),
(34, 18, 2, 0),
(35, 18, 5, 0),
(36, 19, 1, 0),
(37, 19, 4, 0),
(38, 20, 1, 0),
(39, 20, 12, 0),
(40, 21, 1, 0),
(41, 21, 12, 0),
(42, 22, 1, 0),
(43, 23, 1, 0),
(44, 23, 2, 0),
(45, 23, 5, 0),
(46, 26, 1, 0),
(47, 26, 2, 0),
(48, 27, 2, 0),
(49, 27, 3, 0),
(50, 27, 4, 0),
(51, 27, 12, 0),
(52, 28, 2, 0),
(53, 28, 4, 0),
(54, 30, 1, 0),
(55, 30, 2, 0),
(56, 31, 1, 0),
(57, 31, 4, 0),
(58, 32, 4, 0),
(59, 32, 12, 0),
(60, 34, 2, 0),
(61, 34, 7, 0),
(62, 34, 1, 0),
(63, 34, 5, 0),
(64, 35, 1, 0),
(65, 35, 5, 0),
(66, 36, 1, 0),
(67, 38, 1, 0),
(68, 39, 1, 0),
(69, 39, 5, 0),
(70, 40, 1, 0),
(71, 40, 2, 0),
(72, 40, 7, 0),
(73, 40, 5, 0),
(74, 41, 19, 0),
(75, 41, 1, 0),
(76, 42, 1, 0),
(77, 42, 4, 0),
(78, 43, 2, 0),
(79, 44, 1, 0),
(80, 45, 19, 0),
(81, 46, 18, 0),
(82, 46, 19, 0),
(83, 47, 1, 0),
(84, 47, 3, 0),
(85, 48, 4, 0),
(86, 48, 5, 0),
(87, 49, 1, 0),
(88, 49, 7, 0),
(89, 50, 1, 0),
(90, 51, 1, 0),
(91, 52, 20, 0),
(92, 53, 1, 0),
(93, 55, 1, 0),
(94, 55, 9, 0),
(95, 56, 1, 0),
(96, 57, 1, 0),
(97, 58, 4, 0),
(98, 58, 12, 0),
(99, 59, 1, 0),
(100, 60, 17, 0),
(101, 63, 17, 0),
(102, 64, 17, 0),
(103, 64, 1, 0),
(104, 65, 1, 0),
(105, 66, 1, 0),
(106, 66, 5, 0),
(107, 67, 1, 0),
(108, 67, 2, 0),
(109, 68, 4, 0),
(110, 68, 12, 0),
(111, 68, 2, 0),
(112, 68, 5, 0),
(113, 68, 1, 1),
(114, 69, 1, 0),
(115, 72, 18, 0),
(116, 73, 1, 0),
(117, 73, 7, 0),
(118, 74, 1, 0),
(119, 74, 17, 0),
(120, 75, 1, 0),
(121, 76, 1, 0),
(122, 76, 2, 0),
(123, 77, 1, 0),
(124, 77, 5, 0),
(125, 77, 17, 0),
(126, 78, 2, 0),
(127, 78, 3, 0),
(128, 78, 1, 0),
(129, 79, 17, 0),
(130, 79, 18, 0),
(131, 80, 1, 0),
(132, 80, 20, 0),
(133, 81, 17, 0),
(134, 81, 1, 0),
(136, 82, 1, 0),
(137, 83, 1, 0);

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
(1, 'admin', '6435729ef42babf58dbd6bc1318adf3419f2bb8129c9b8b538b853ba300328655b9eba2b48a89b2e793d47e2b5b49577d21edf7ad08cb14ba55fab52f9be55b9', 'OkwLVStfOF6ClJ38iZB6t1W2e3MJ7Tfi44IhH9trW4UrLVNEQQk3xuylMvrHj2AfoOVop8K8T0sWJ0f0ZR5DU6mzJV9A53McUbTEWTR5aqpg0W1vyRMZE9IGlstCc094wHeRbZJdzYYecp44zXIPT3AGzu4iOT6ceptCwU0GNhoLpvWBkUrdtH6tGczVSfVsocGrxV43', '160c5d1835babbc2f8d8508dd1499dc3240b13f3f11283e029b1fd16cf15d32a528a730b2d5c9ba06ec3bddba7e6e6345707f9039aeaea6399bbcd8a1d286a79', 0, 1, 1676149731, 0, 1, 1, 1, 1, 1),
(2, 'dev', '2029a9cfbeaf81cfc119fe95e9d941dff88ce3441a4b72be89c480c6629672258c487bb176271fcc87a9764d51dd6fc1489a4090b3d0ce86d29995c7e755e972', 'HPGWJVD1sjuOAJbsWwVfgZCQjPFcf2LkQhUUucY0tfomVvaAsgh4JUBZ7dzTipOkx6iIyHu0AcxK91Im24bhlgIdhn0yi2aMVC1E1RZXmuFZcnj5APltU0A7StnSQt2NXFXCBwwpGqIestN8xa8DkgDXjREOufbVi1D9w9qJN9J0m5ML2TVLJDEzkcL6qdjdLRtr7zZz', NULL, 0, 1, 1676057771, 0, 1, 1, 1, 1, 1),
(3, 'recepcion', '975562b5d445a36ab9d3b4c54e6a26e95be316afefe9da1ea96192a99ef149b9dd7ec902f9ea34ee659c9ee9c08bcfbb943e20426758684e12fd0d6c7234359f', 'PDDDwrEqzTLX8H6eOKm7b6ypl51aKd9zc2itlcvFXnXl1EpUO1JNs6IH8JUq9FPZ3WbVSZeaAC4KEvkKHZhtDUjZhRlkmZ7xywW3kK8YWOZBjNXwPTHN61E3OgrgNEl7YuZvgqyhFUlwY1LJ8h2Qc3a3FSTvYBNucxAkxFosj0nZreZFMVNzdO0a06aXhEvXs7og7iUH', NULL, 0, 1, 1676057888, 0, 0, 0, 0, 0, 0);

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
(1, 'Cliente de prueba', 'direccion de prueba', 1, 0),
(2, 'Edgar Ramos', 'CANTERAS DE SAN ISIDRO SN.\nFACHADA DE PIEDRA\nTACUBAYA', 1, 0),
(3, 'Cialyn Cervantes', 'MUZQUIZ ESQ. OCAMPO\nCASA DOS PISOS\nBLANCO NARANJA, PORTON CAFE', 1, 0),
(4, 'Teresa de la Torre', 'GRANADA # 314 VALLE DE PARRAS\nCASA NARANJA 2 PISOS FTE. PLACITA', 1, 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `pj_pro_op`
--
ALTER TABLE `pj_pro_op`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pj_pro_pi`
--
ALTER TABLE `pj_pro_pi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `sales_items`
--
ALTER TABLE `sales_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `sales_items_ing`
--
ALTER TABLE `sales_items_ing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
