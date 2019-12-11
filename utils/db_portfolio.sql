-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 11, 2019 at 10:35 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_database`
--

CREATE TABLE `tbl_database` (
  `ID` int(10) NOT NULL,
  `TITTLE` text NOT NULL,
  `IMAGES` varchar(120) NOT NULL,
  `VIDEO` varchar(130) NOT NULL,
  `DESCRIPTION` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_database`
--

INSERT INTO `tbl_database` (`ID`, `TITTLE`, `IMAGES`, `VIDEO`, `DESCRIPTION`) VALUES
(1, 'Thermosystem', 'boxes_mockup_provisional.png', '', 'I was group assignment in this we are assigned to build-up a website for real product for thermosystem. This system will allow people to access their home heat and also can looks whats going at their home.'),
(2, 'Interactive Infographic', 'infographic poster.svg', '', 'This was project for designing and coding for this I collect the data for recycling done per year.Analyzing the data and come up with the interactive picture which express whole data in small image.'),
(3, 'Commercial Advertisement', 'ikea-ad.svg', '', 'Motion design- Commercial advertisement was bit challenging project for this I build 4d model and present it as new launched product.'),
(4, 'Traa Association', 'trra.svg', '', 'This was existing website and my job was to redesign it and come-up with they more attractive design and functionality.'),
(5, 'Organ Donation', 'Organ_donation.svg', '', 'This was designing assignment for this I build logo, poster and presentation to aware the people about organ donation and their benefits.'),
(6, 'Game Of Thrones', 'got_video.svg', '', 'Authoring 2- This was an application based on game of Trones series and for this I worked on javascript and make interactive that when user click on the houses under the image this scroll to that theme and a video is pop-up.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_database`
--
ALTER TABLE `tbl_database`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_database`
--
ALTER TABLE `tbl_database`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
