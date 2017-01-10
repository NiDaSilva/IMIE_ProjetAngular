-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Mar 10 Janvier 2017 à 14:16
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `angular`
--

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

CREATE TABLE `cours` (
  `id` int(11) NOT NULL,
  `id_forma` int(11) NOT NULL,
  `id_module` int(11) NOT NULL,
  `id_promo` int(11) NOT NULL,
  `date_cours` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `cours`
--

INSERT INTO `cours` (`id`, `id_forma`, `id_module`, `id_promo`, `date_cours`) VALUES
(1, 1, 1, 1, '2017-01-20');

-- --------------------------------------------------------

--
-- Structure de la table `formateurs`
--

CREATE TABLE `formateurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `prenom` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `specialite` varchar(45) COLLATE utf8_bin DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `formateurs`
--

INSERT INTO `formateurs` (`id`, `nom`, `prenom`, `specialite`) VALUES
(1, 'Robin', 'Dimitri', 'C#'),
(2, 'menant', 'Kevin', 'HTML5');

-- --------------------------------------------------------

--
-- Structure de la table `modules`
--

CREATE TABLE `modules` (
  `id` int(11) NOT NULL,
  `nom` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `sujet` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `date_fin` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `modules`
--

INSERT INTO `modules` (`id`, `nom`, `sujet`, `date_fin`) VALUES
(1, 'Angular', 'Angular js , controlleur plus vue', '2016-12-30 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id` int(11) NOT NULL,
  `libelle` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `prix` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `produits`
--

INSERT INTO `produits` (`id`, `libelle`, `prix`) VALUES
(1, 'PC', 1000),
(2, 'Bureau', 200),
(3, 'Souris', 30),
(4, 'Clavier', 50);

-- --------------------------------------------------------

--
-- Structure de la table `promotions`
--

CREATE TABLE `promotions` (
  `id` int(11) NOT NULL,
  `nom` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `nombre_etu` int(11) DEFAULT NULL,
  `niveau` varchar(45) COLLATE utf8_bin DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `promotions`
--

INSERT INTO `promotions` (`id`, `nom`, `nombre_etu`, `niveau`) VALUES
(1, 'CDPN_02', 16, 'Bac+4');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `cours`
--
ALTER TABLE `cours`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_forma` (`id_forma`),
  ADD KEY `id_module` (`id_module`),
  ADD KEY `id_promo` (`id_promo`);

--
-- Index pour la table `formateurs`
--
ALTER TABLE `formateurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `formateurs`
--
ALTER TABLE `formateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `promotions`
--
ALTER TABLE `promotions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
