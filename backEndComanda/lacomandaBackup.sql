-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2018 a las 17:01:56
-- Versión del servidor: 10.1.22-MariaDB
-- Versión de PHP: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lacomanda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `clave` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `sector` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `perfil` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `avatar` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `usuario`, `clave`, `sector`, `estado`, `perfil`, `avatar`) VALUES
(1, 'ADMIN', '1234', 'Dueño', 'Activo', 'admin', NULL),
(9, 'BARMAN', '1234', 'barra', 'suspendido', 'empleado', NULL),
(10, 'MOZO', '1234', 'candy bar', 'Activo', 'empleado', NULL),
(11, 'CHEF', '1234', 'cocina', 'Activo', 'empleado', NULL),
(12, 'CHEF', '1234', 'cocina', 'Activo', 'empleado', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `numero` int(8) UNSIGNED ZEROFILL NOT NULL,
  `mesa` int(5) UNSIGNED ZEROFILL NOT NULL,
  `importe` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`numero`, `mesa`, `importe`, `fecha`) VALUES
(00000001, 00001, 310, '2018-05-03'),
(00000002, 00002, 570, '2018-06-01'),
(00000003, 00002, 410, '2018-06-05'),
(00000004, 00003, 390, '2018-07-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesas`
--

CREATE TABLE `mesas` (
  `idMesa` int(5) UNSIGNED ZEROFILL NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `canUsos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `mesas`
--

INSERT INTO `mesas` (`idMesa`, `estado`, `canUsos`) VALUES
(00001, 'cliente pagando', 10),
(00002, 'cliente pagando', 5),
(00003, 'con cliente esperando pedido', 12),
(00004, 'con cliente esperando pedido', 2),
(00005, 'con cliente esperando pedido', 2),
(00006, 'cerrada', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidodetalle`
--

CREATE TABLE `pedidodetalle` (
  `idDetalle` int(11) NOT NULL,
  `idPedido` int(5) UNSIGNED ZEROFILL NOT NULL,
  `producto` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `tiempoPreparacion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `tiempoServido` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `sector` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `pedidodetalle`
--

INSERT INTO `pedidodetalle` (`idDetalle`, `idPedido`, `producto`, `idEmpleado`, `estado`, `tiempoPreparacion`, `tiempoServido`, `sector`) VALUES
(1, 00001, 'coca-cola', 3, 'en preparacion', '2018/07/10 18:10', '2018/07/10 17:55', 'barra'),
(2, 00001, 'cerveza', 4, 'en preparacion', '2018/07/10 18:01', '2018/07/10 17:56', 'chopera'),
(3, 00001, 'pizza', 6, 'en preparacion', '2018/07/10 18:03', '2018/07/10 17:54', 'cocina'),
(4, 00001, 'postre', 10, 'en preparacion', '2018/07/10 18:13', '2018/07/10 17:58', 'candy bar'),
(5, 00002, 'plato', 6, 'facturado', '2018/07/10 18:35', '2018/07/10 18:20', 'cocina'),
(6, 00002, 'vino', 3, 'facturado', '2018/07/10 18:35', '2018/07/10 18:20', 'barra'),
(7, 00002, 'vino', 3, 'facturado', '2018/07/10 18:30', '2018/07/10 18:20', 'barra'),
(8, 00002, 'postre', 6, 'facturado', '2018/07/10 18:35', '2018/07/10 18:19', 'candy bar'),
(9, 00002, 'trago', 3, 'facturado', '2018/07/10 18:31', '2018/07/10 18:21', 'barra'),
(10, 00003, 'pizza', 6, 'facturado', '2018/07/10 20:24', '2018/07/10 20:09', 'cocina'),
(11, 00003, 'empanadas', 6, 'facturado', '1970/01/01 1:00', '2018/07/10 20:09', 'cocina'),
(12, 00003, 'cerveza', 4, 'facturado', '2018/07/10 20:19', '2018/07/10 20:14', 'chopera'),
(13, 00003, 'trago', 9, 'facturado', '2018/07/10 20:25', '2018/07/10 20:10', 'barra'),
(14, 00004, 'plato', 0, 'listo para servir', '', '', 'cocina'),
(15, 00004, 'vino', 0, 'listo para servir', '', '', 'barra'),
(16, 00004, 'coca-cola', 0, 'listo para servir', '', '', 'barra'),
(17, 00004, 'postre', 10, 'listo para servir', '1970/01/01 1:00', '2018/07/10 18:19', 'candy bar'),
(18, 00005, 'empanadas', 0, 'listo para servir', '', '', 'cocina'),
(19, 00005, 'cerveza', 0, 'listo para servir', '', '', 'chopera'),
(20, 00005, 'postre', 0, 'listo para servir', '', '', 'candy bar'),
(21, 00006, 'cerveza', 4, 'facturado', '2018/07/10 19:37', '2018/07/10 19:22', 'chopera'),
(22, 00006, 'pizza', 6, 'facturado', '2018/07/10 19:31', '2018/07/10 19:22', 'cocina'),
(23, 00006, 'empanadas', 6, 'facturado', '1970/01/01 1:00', '2018/07/10 19:22', 'cocina'),
(24, 00006, 'vino', 3, 'facturado', '2018/07/10 19:32', '2018/07/10 19:22', 'barra'),
(25, 00007, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(26, 00008, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(27, 00009, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(28, 00010, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(29, 00011, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(30, 00012, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(31, 00013, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(32, 00014, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(33, 00015, 'cerveza', 0, 'pendiente', '', '', 'chopera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `idMesa` int(5) UNSIGNED ZEROFILL NOT NULL,
  `tiempoInicio` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `fotoMesa` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `idMesa`, `tiempoInicio`, `fotoMesa`) VALUES
(00001, 00001, '2018/07/10 17:45,58', './fotos/00001.jpg'),
(00002, 00002, '2018/07/10 17:46,23', './fotos/00002.jpg'),
(00003, 00003, '2018/07/10 17:46,46', './fotos/00003.jpg'),
(00004, 00004, '2018/07/10 17:47,12', './fotos/00004.jpg'),
(00005, 00005, '2018/07/10 17:47,39', './fotos/00005.jpg'),
(00006, 00002, '2018/07/10 19:21,32', './fotos/00002.jpg'),
(00007, 00003, '2018/07/10 21:35,56', './fotos/00003.jpg'),
(00008, 00003, '2018/07/10 21:36,53', './fotos/00003.jpg'),
(00009, 00003, '2018/07/10 21:38,06', './fotos/00003.jpg'),
(00010, 00003, '2018/07/10 21:43,57', './fotos/00003.jpg'),
(00011, 00003, '2018/07/10 21:44,04', './fotos/00003.jpg'),
(00012, 00003, '2018/07/10 21:45,13', './fotos/00003.jpg'),
(00013, 00003, '2018/07/10 21:47,36', './fotos/00003.jpg'),
(00014, 00003, '2018/07/10 21:51,05', './fotos/00003.jpg'),
(00015, 00003, '2018/07/10 21:51,26', './fotos/00003.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`nombre`, `precio`) VALUES
('cerveza', 60),
('coca-cola', 30),
('empanadas', 30),
('pizza', 150),
('plato', 250),
('postre', 70),
('trago', 150),
('vino', 170);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `segundoparcial`
--

CREATE TABLE `segundoparcial` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `clave` varchar(50) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `segundoparcial`
--

INSERT INTO `segundoparcial` (`id`, `nombre`, `clave`, `tipo`, `email`) VALUES
(1, 'pro', '1234', 'profesional', 'pro@pro.com'),
(2, 'normal', '1234', 'normal', 'normal@normal.com'),
(3, 'gratis', '1234', 'free', 'free@free.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesiones`
--

CREATE TABLE `sesiones` (
  `id` int(11) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `horaInicio` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `horaFinal` varchar(20) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `sesiones`
--

INSERT INTO `sesiones` (`id`, `idEmpleado`, `horaInicio`, `horaFinal`) VALUES
(26, 1, '2018/06/16 2:25,50', ''),
(27, 9, '2018/06/18 5:23,45', ''),
(28, 3, '2018/06/18 5:57,03', ''),
(29, 3, '2018/06/20 23:14,37', ''),
(30, 9, '2018/06/21 0:43,59', ''),
(31, 1, '2018/06/21 1:40,44', ''),
(32, 1, '2018/06/22 4:35,16', '2018/06/22 4:40,05'),
(33, 1, '2018/06/22 4:40,44', '2018/06/22 4:45,10'),
(34, 1, '2018/06/22 4:45,16', ''),
(35, 1, '2018/06/23 22:06,59', ''),
(36, 1, '2018/06/24 19:48,29', ''),
(37, 1, '2018/06/24 19:58,42', ''),
(38, 1, '2018/06/24 20:32,41', '2018/06/24 21:10,42'),
(39, 4, '2018/06/24 21:12,51', '2018/06/24 21:30,45'),
(40, 3, '2018/06/24 21:31,07', ''),
(41, 3, '2018/06/25 6:14,37', ''),
(42, 3, '2018/06/25 6:18,41', ''),
(43, 3, '2018/06/25 6:25,14', '2018/06/25 6:25,52'),
(44, 9, '2018/06/25 6:26,00', '2018/06/25 6:33,49'),
(45, 6, '2018/06/25 6:34,23', ''),
(46, 6, '2018/06/25 6:38,07', '2018/06/25 6:42,34'),
(47, 6, '2018/06/25 6:45,09', ''),
(48, 6, '2018/06/25 7:02,20', ''),
(49, 6, '2018/06/28 1:39,37', '2018/06/28 3:58,34'),
(50, 6, '2018/06/28 3:58,58', ''),
(51, 6, '2018/06/28 4:32,04', '2018/06/28 4:33,31'),
(52, 1, '2018/06/28 4:33,37', '2018/06/28 4:39,57'),
(53, 6, '2018/07/03 4:36,24', ''),
(54, 3, '2018/07/03 5:41,37', ''),
(55, 3, '2018/07/04 3:50,18', ''),
(56, 3, '2018/07/04 4:33,24', '2018/07/04 4:39,40'),
(57, 9, '2018/07/04 4:40,10', '2018/07/04 4:40,14'),
(58, 3, '2018/07/04 4:40,20', ''),
(59, 3, '2018/07/04 4:41,20', ''),
(60, 3, '2018/07/04 4:42,30', ''),
(61, 3, '2018/07/04 4:45,27', ''),
(62, 3, '2018/07/04 4:48,42', ''),
(63, 3, '2018/07/05 2:04,47', ''),
(64, 3, '2018/07/05 2:08,52', ''),
(65, 3, '2018/07/06 2:20,23', ''),
(66, 3, '2018/07/06 2:21,23', ''),
(67, 1, '2018/07/09 0:35,44', '2018/07/09 0:35,52'),
(68, 1, '2018/07/09 0:35,59', '2018/07/09 0:37,03'),
(69, 3, '2018/07/09 0:37,09', ''),
(70, 6, '2018/07/09 3:11,41', ''),
(71, 9, '2018/07/09 23:48,42', '2018/07/09 23:49,35'),
(72, 3, '2018/07/09 23:49,42', '2018/07/09 23:50,32'),
(73, 9, '2018/07/09 23:50,37', ''),
(74, 3, '2018/07/10 15:44,23', '2018/07/10 16:39,57'),
(75, 6, '2018/07/10 16:40,02', '2018/07/10 16:40,05'),
(76, 3, '2018/07/10 16:40,09', '2018/07/10 16:40,13'),
(77, 9, '2018/07/10 16:40,19', '2018/07/10 17:45,26'),
(78, 6, '2018/07/10 17:45,35', '2018/07/10 17:55,05'),
(79, 3, '2018/07/10 17:55,12', '2018/07/10 17:56,22'),
(80, 4, '2018/07/10 17:56,29', '2018/07/10 17:56,48'),
(81, 6, '2018/07/10 17:56,58', '2018/07/10 17:57,46'),
(82, 10, '2018/07/10 17:57,57', '2018/07/10 18:19,57'),
(83, 6, '2018/07/10 18:20,07', '2018/07/10 18:20,28'),
(84, 3, '2018/07/10 18:20,32', ''),
(85, 1, '2018/07/10 19:21,40', '2018/07/10 19:21,48'),
(86, 6, '2018/07/10 19:21,52', '2018/07/10 19:22,10'),
(87, 3, '2018/07/10 19:22,16', '2018/07/10 19:22,26'),
(88, 4, '2018/07/10 19:22,34', '2018/07/10 19:22,44'),
(89, 10, '2018/07/10 19:23,02', '2018/07/10 20:08,07'),
(90, 6, '2018/07/10 20:08,13', '2018/07/10 20:10,00'),
(91, 9, '2018/07/10 20:10,10', '2018/07/10 20:10,22'),
(92, 10, '2018/07/10 20:10,33', '2018/07/10 20:14,18'),
(93, 4, '2018/07/10 20:14,23', ''),
(94, 3, '2018/07/10 21:15,00', ''),
(95, 1, '2018/07/10 21:17,38', ''),
(96, 1, '2018/07/10 21:37,24', ''),
(97, 1, '2018/07/10 21:39,22', ''),
(98, 1, '2018/07/10 21:43,27', ''),
(99, 1, '2018/07/10 21:47,45', ''),
(100, 1, '2018/07/10 21:50,55', ''),
(101, 9, '2018/07/10 21:52,05', ''),
(102, 1, '2018/07/12 16:47,21', ''),
(103, 1, '2018/07/12 21:40,45', '2018/07/12 21:41,36'),
(104, 1, '2018/09/16 0:06,10', ''),
(105, 1, '2018/09/16 0:40,21', ''),
(106, 1, '2018/09/16 0:41,16', ''),
(107, 1, '2018/09/16 5:48,03', ''),
(108, 1, '2018/09/16 5:49,49', ''),
(109, 1, '2018/11/07 19:06,15', ''),
(110, 1, '2018/11/08 0:09,35', ''),
(111, 1, '2018/11/08 1:03,05', ''),
(112, 1, '2018/11/08 1:09,36', ''),
(113, 1, '2018/11/08 1:13,52', ''),
(114, 1, '2018/11/08 1:22,01', ''),
(115, 1, '2018/11/10 3:18,48', ''),
(116, 1, '2018/11/10 16:38,35', ''),
(117, 1, '2018/11/10 17:54,13', ''),
(118, 1, '2018/11/10 17:59,03', ''),
(119, 1, '2018/11/10 18:11,36', ''),
(120, 1, '2018/11/10 18:19,15', ''),
(121, 1, '2018/11/10 18:27,04', ''),
(122, 1, '2018/11/10 19:22,33', ''),
(123, 1, '2018/11/10 19:26,26', ''),
(124, 1, '2018/11/10 19:33,57', ''),
(125, 1, '2018/11/10 20:58,31', ''),
(126, 1, '2018/11/11 0:43,55', ''),
(127, 1, '2018/11/11 2:35,45', ''),
(128, 1, '2018/11/11 2:45,03', ''),
(129, 1, '2018/11/11 2:49,14', ''),
(130, 1, '2018/11/11 2:54,14', ''),
(131, 1, '2018/11/11 15:25,37', ''),
(132, 1, '2018/11/11 16:55,20', ''),
(133, 1, '2018/11/11 16:58,00', ''),
(134, 1, '2018/11/11 17:01,00', ''),
(135, 1, '2018/11/11 17:02,45', ''),
(136, 1, '2018/11/11 17:50,17', ''),
(137, 1, '2018/11/11 17:54,34', ''),
(138, 1, '2018/11/11 17:55,19', ''),
(139, 1, '2018/11/11 18:09,01', ''),
(140, 1, '2018/11/11 18:12,56', ''),
(141, 1, '2018/11/11 18:21,20', ''),
(142, 1, '2018/11/11 18:22,58', ''),
(143, 1, '2018/11/11 18:25,02', ''),
(144, 1, '2018/11/14 23:41,47', ''),
(145, 1, '2018/11/14 23:43,45', ''),
(146, 1, '2018/11/14 23:46,22', ''),
(147, 1, '2018/11/14 23:47,29', ''),
(148, 1, '2018/11/14 23:49,22', ''),
(149, 1, '2018/11/14 23:49,23', ''),
(150, 1, '2018/11/14 23:50,42', ''),
(151, 1, '2018/11/14 23:50,48', ''),
(152, 1, '2018/11/14 23:53,04', ''),
(153, 1, '2018/11/14 23:53,08', ''),
(154, 1, '2018/11/14 23:54,16', ''),
(155, 1, '2018/11/14 23:54,35', ''),
(156, 1, '2018/11/15 0:10,49', ''),
(157, 1, '2018/11/15 0:19,35', ''),
(158, 1, '2018/11/15 0:21,52', ''),
(159, 1, '2018/11/15 0:22,45', ''),
(160, 1, '2018/11/15 0:26,07', ''),
(161, 1, '2018/11/15 0:28,06', ''),
(162, 1, '2018/11/15 0:28,53', ''),
(163, 1, '2018/11/15 0:29,54', ''),
(164, 1, '2018/11/15 0:30,33', ''),
(165, 1, '2018/11/15 0:31,17', ''),
(166, 1, '2018/11/15 0:33,06', ''),
(167, 1, '2018/11/15 0:35,44', ''),
(168, 1, '2018/11/15 0:36,14', ''),
(169, 1, '2018/11/15 0:38,03', ''),
(170, 1, '2018/11/15 1:24,14', ''),
(171, 1, '2018/11/15 1:28,09', ''),
(172, 1, '2018/11/15 2:41,26', ''),
(173, 1, '2018/11/15 2:44,15', ''),
(174, 1, '2018/11/15 2:57,56', ''),
(175, 1, '2018/11/15 3:59,46', ''),
(176, 1, '2018/11/15 18:05,39', ''),
(177, 1, '2018/11/15 18:46,10', ''),
(178, 1, '2018/11/15 19:35,36', ''),
(179, 1, '2018/11/15 19:59,35', ''),
(180, 1, '2018/11/15 22:50,28', ''),
(181, 1, '2018/11/15 22:52,34', ''),
(182, 1, '2018/11/15 23:36,29', ''),
(183, 1, '2018/11/16 0:27,08', ''),
(184, 1, '2018/11/16 0:28,42', ''),
(185, 1, '2018/11/16 0:34,49', ''),
(186, 1, '2018/11/16 0:40,56', ''),
(187, 2, '2018/11/16 0:44,51', ''),
(188, 3, '2018/11/16 0:47,39', ''),
(189, 2, '2018/11/16 0:47,42', ''),
(190, 1, '2018/11/16 0:47,44', ''),
(191, 1, '2018/11/16 1:02,49', ''),
(192, 1, '2018/11/16 1:10,40', ''),
(193, 1, '2018/11/16 1:12,22', ''),
(194, 1, '2018/11/16 1:13,15', ''),
(195, 1, '2018/11/16 1:13,21', ''),
(196, 2, '2018/11/16 1:16,58', ''),
(197, 1, '2018/11/16 1:18,06', ''),
(198, 1, '2018/11/16 1:18,34', ''),
(199, 1, '2018/11/16 1:18,56', ''),
(200, 2, '2018/11/16 1:19,02', ''),
(201, 1, '2018/11/16 1:26,19', ''),
(202, 1, '2018/11/16 1:31,37', ''),
(203, 1, '2018/11/16 1:45,33', ''),
(204, 2, '2018/11/16 1:45,42', ''),
(205, 2, '2018/11/16 1:45,47', ''),
(206, 2, '2018/11/16 1:47,02', ''),
(207, 1, '2018/11/16 1:47,06', ''),
(208, 1, '2018/11/16 1:49,02', ''),
(209, 1, '2018/11/16 1:50,16', ''),
(210, 1, '2018/11/16 16:46,35', ''),
(211, 1, '2018/11/17 16:10,30', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `clave` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `perfil` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sexo` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `perfil`, `sexo`) VALUES
(1, 'admin', '1234', 'admin', 'masculino');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`numero`);

--
-- Indices de la tabla `mesas`
--
ALTER TABLE `mesas`
  ADD PRIMARY KEY (`idMesa`);

--
-- Indices de la tabla `pedidodetalle`
--
ALTER TABLE `pedidodetalle`
  ADD PRIMARY KEY (`idDetalle`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`nombre`);

--
-- Indices de la tabla `segundoparcial`
--
ALTER TABLE `segundoparcial`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `numero` int(8) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `mesas`
--
ALTER TABLE `mesas`
  MODIFY `idMesa` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `pedidodetalle`
--
ALTER TABLE `pedidodetalle`
  MODIFY `idDetalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT de la tabla `segundoparcial`
--
ALTER TABLE `segundoparcial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=212;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;