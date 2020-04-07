-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2020 at 08:11 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_video_streaming`
--

-- --------------------------------------------------------

--
-- Table structure for table `cat_1_level_1`
--

CREATE TABLE `cat_1_level_1` (
  `cat_id` int(255) NOT NULL,
  `cat_name` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_date` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cat_1_level_1`
--

INSERT INTO `cat_1_level_1` (`cat_id`, `cat_name`, `created_date`, `updated_date`, `status`) VALUES
(14, 'Diabetes', '2020-02-12 17:49:33', 0, ''),
(18, 'Insulin', '2020-02-12 18:33:49', 0, ''),
(29, 'Education', '2020-02-12 19:04:54', 0, ''),
(34, 'Healthy Recipes', '2020-02-12 19:47:44', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `cat_1_level_2`
--

CREATE TABLE `cat_1_level_2` (
  `sub_id` int(255) NOT NULL,
  `cat_id` int(255) DEFAULT NULL,
  `sub_name` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_date` varchar(200) NOT NULL,
  `last_updated_date` varchar(255) NOT NULL,
  `status` varchar(244) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cat_1_level_2`
--

INSERT INTO `cat_1_level_2` (`sub_id`, `cat_id`, `sub_name`, `created_date`, `updated_date`, `last_updated_date`, `status`) VALUES
(34, 14, 'How-To-Use', '2020-02-13 19:40:24', '', '', ''),
(35, 14, 'Exercises', '2020-02-13 19:40:45', '', '', ''),
(36, 14, 'Healthy Habits', '2020-02-13 19:40:59', '', '', ''),
(37, 18, 'How-To-Use', '2020-02-13 19:41:59', '', '', ''),
(38, 18, 'Exercises', '2020-02-13 19:42:08', '', '', ''),
(39, 18, 'Healthy Habits', '2020-02-13 19:42:18', '', '', ''),
(41, 29, 'How-To-Use', '2020-02-13 19:42:48', '', '', ''),
(42, 29, 'Exercises', '2020-02-13 19:42:57', '', '', ''),
(43, 29, 'Healthy Habits', '2020-02-13 19:43:08', '', '', ''),
(44, 34, 'How-To-Use', '2020-02-13 19:43:28', '', '', ''),
(45, 34, 'Exercises', '2020-02-13 19:43:37', '', '', ''),
(46, 34, 'Healthy Habits', '2020-02-13 19:43:47', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `final_cat`
--

CREATE TABLE `final_cat` (
  `id` int(11) NOT NULL,
  `cat_id` bigint(20) NOT NULL,
  `sub_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `final_cat`
--

INSERT INTO `final_cat` (`id`, `cat_id`, `sub_id`) VALUES
(1, 14, 4),
(2, 14, 5),
(3, 14, 6),
(4, 18, 4),
(5, 18, 5),
(6, 18, 6),
(7, 29, 4),
(8, 29, 5),
(9, 29, 6),
(10, 34, 4),
(11, 34, 5),
(12, 34, 6);

-- --------------------------------------------------------

--
-- Table structure for table `t_portal_users`
--

CREATE TABLE `t_portal_users` (
  `id` int(255) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(800) NOT NULL,
  `token` varchar(255) NOT NULL,
  `status` varchar(244) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_portal_users`
--

INSERT INTO `t_portal_users` (`id`, `role_id`, `name`, `mobile`, `email`, `password`, `token`, `status`) VALUES
(1, 3, 'admin', '', 'admin', '21232f297a57a5a743894a0e4a801fc3', '', 'Active'),
(119, 1, 'waseem', '7349209632', 'ws5650582@gmail.com', '7a674153c63cff1ad7f0e261c369ab2c', '1105010822607130900', 'Active'),
(121, 2, 'abhilash', '6468646', 'abhilashmusti2@gmail.com', 'd76f3d05cc9ac98f1f9160274a39fe33', '1102339701495719700', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `t_roles`
--

CREATE TABLE `t_roles` (
  `id` int(11) DEFAULT NULL,
  `role` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_roles`
--

INSERT INTO `t_roles` (`id`, `role`, `status`) VALUES
(1, 'Uploader', 'C'),
(2, 'Viewer', 'C'),
(3, 'Admin', 'c');

-- --------------------------------------------------------

--
-- Table structure for table `video_info`
--

CREATE TABLE `video_info` (
  `video_id` int(11) NOT NULL,
  `cat_id` int(200) DEFAULT NULL,
  `sub_id` int(255) DEFAULT NULL,
  `user_id` bigint(200) NOT NULL,
  `video_link` varchar(200) DEFAULT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(800) NOT NULL,
  `uploaded_date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `thumbnail` varchar(244) NOT NULL,
  `likes` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `video_info`
--

INSERT INTO `video_info` (`video_id`, `cat_id`, `sub_id`, `user_id`, `video_link`, `title`, `description`, `uploaded_date`, `thumbnail`, `likes`) VALUES
(3, 14, 34, 0, 'eS48Dg9P4B4', 'jai hind', 'jai hind', '2020-02-24 13:10:05', '', '3'),
(9, 14, 35, 0, 'awdawd', 'awdawd', 'kjnkjn', '2020-02-24 13:08:08', 'undefined', '2'),
(10, 14, 36, 0, 'awdawdawd', 'jnij', 'ijui', '2020-02-24 13:08:08', 'undefined', '2'),
(11, 18, 37, 0, 'dfdddddf', '', '', '2020-02-24 13:08:08', 'undefined', '2'),
(12, 18, 38, 0, 'jiush', '', '', '2020-02-24 13:08:08', 'undefined', '2'),
(13, 14, 34, 0, 'dfklaldkn', '', '', '2020-02-24 13:08:08', 'undefined', '2'),
(102, 34, 46, 0, 'awdad', 'jnkjn', 'jnkjn', '2020-02-24 13:08:08', '/public//videos/images-1582175691493.jpg', '2'),
(103, NULL, NULL, 0, NULL, '', '', '2020-02-24 13:08:08', '/public//videos/images-1582525977069.jpg', '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cat_1_level_1`
--
ALTER TABLE `cat_1_level_1`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `cat_1_level_2`
--
ALTER TABLE `cat_1_level_2`
  ADD PRIMARY KEY (`sub_id`);

--
-- Indexes for table `final_cat`
--
ALTER TABLE `final_cat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_portal_users`
--
ALTER TABLE `t_portal_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video_info`
--
ALTER TABLE `video_info`
  ADD PRIMARY KEY (`video_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cat_1_level_1`
--
ALTER TABLE `cat_1_level_1`
  MODIFY `cat_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `cat_1_level_2`
--
ALTER TABLE `cat_1_level_2`
  MODIFY `sub_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `final_cat`
--
ALTER TABLE `final_cat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `t_portal_users`
--
ALTER TABLE `t_portal_users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT for table `video_info`
--
ALTER TABLE `video_info`
  MODIFY `video_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
