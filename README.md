# L'Enquête du Manuscrit Égaré

Bienvenue dans **L'Enquête du Manuscrit Égaré**, un projet interactif inspiré par les enquêtes de Sherlock Holmes. À travers cinq énigmes captivantes, l’utilisateur incarne un détective chargé de résoudre le mystère de la disparition d’un manuscrit inédit et d’identifier le coupable parmi plusieurs suspects.

---

## Table des Matières

- [Introduction](#introduction)
- [Description du Projet](#description-du-projet)
- [Les Énigmes](#les-énigmes)
- [Fonctionnalités](#fonctionnalités)
- [Structure du Projet](#structure-du-projet)
- [Installation](#installation)
- [Utilisation](#utilisation)

---

## Introduction

**L'Enquête du Manuscrit Égaré** est une expérience web immersive qui met à l'épreuve les compétences logiques et techniques des étudiants. En résolvant une série d'énigmes interactives, ils explorent l’univers victorien de Sherlock Holmes, récoltent des indices et avancent pas à pas vers la résolution finale de l’affaire.

---

## Description du Projet

Le projet suit l’enquête sur la disparition d’un manuscrit inédit d’Edmund Hawthorne. Chaque énigme, conçue en HTML, CSS et JavaScript, présente un défi différent. La réussite de chaque étape débloque un indice menant progressivement à l’identification du coupable parmi quatre suspects.

---

## Les Énigmes

1. **Énigme 1 : La Citation Masquée**  
   **Objectif :** Reconstituer la célèbre citation « Élémentaire, mon cher Watson ! » en cliquant sur les mots dans le bon ordre.

2. **Énigme 2 : L'Article Incriminant**  
   **Objectif :** Analyser un article de journal pour repérer et décrypter un indice caché (un chiffre ou un mot clé) qui orientera l’enquête.

3. **Énigme 3 : Le Code Couleur Caché**  
   **Objectif :** Trouver le mot secret en appuyant sur des boutons colorés dans la bonne séquence.  
   *Détail :* Chaque couleur correspond à une lettre; la séquence correcte débloque un indice.

4. **Énigme 4 : Le Coffre de la Tour**  
   **Objectif :** Utiliser l’indice déchiffré pour ouvrir un coffre protégé par une énigme (un mot de passe basé sur une devinette).

5. **Énigme 5 : L'Affaire du Code Secret**  
   **Objectif :** Décoder un télégramme crypté en plusieurs actes qui révèle l’emplacement du document volé et, finalement, permet d’identifier le coupable.  
   *Détail :* Ce module comporte plusieurs scènes, incluant l’analyse d’articles, le déchiffrement de messages et la sélection finale du suspect.

---

## Fonctionnalités

- **Interactivité Dynamique :** Chaque énigme exploite les événements JavaScript pour interagir avec l’utilisateur (clics, saisie de texte, vérification de réponses).
- **Navigation Conditionnelle :** Les boutons de navigation (par exemple, "Suivant" ou "Conclure l’enquête") ne s’affichent que lorsque la bonne solution est trouvée.
- **Indices Progressifs :** Des indices sont dévoilés progressivement au fur et à mesure que les énigmes sont résolues.
- **Ambiance Immersive :** Le design (couleurs, textures de parchemin, typographies) recrée l’atmosphère des enquêtes victorianes de Sherlock Holmes.

---

## Structure du Projet

/Projet-Enquete-Manuscrit-Egaré ├── README.md # Ce fichier ├── index.html # Page d'accueil ├── enigme1/ │ ├── enigme1.html # Énigme 1 : La Citation Masquée │ ├── enigme1.css │ └── script.js ├── enigme2/ │ └── enigme2.html # Énigme 2 : L'Article Incriminant ├── enigme3/ │ ├── enigme3.html # Énigme 3 : Le Code Couleur Caché │ ├── enigme3.css │ └── script.js ├── enigme4/ │ └── enigme4.html # Énigme 4 : Le Coffre de la Tour ├── enigme5/ │ ├── enigme5.html # Énigme 5 : L'Affaire du Code Secret │ ├── enigme5.css │ └── enigme5.js └── assets/ # Images, sons et autres ressources

---

## Installation

Pour exécuter le projet en local, vous aurez besoin de :

- Un navigateur web moderne (Chrome, Firefox, Safari, etc.)
- Un éditeur de texte ou IDE (VSCode, Sublime Text, etc.)

### Étapes d'installation

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/HugoGarrigues/Challenge-48h-Sherlock.git
2. **Ouvrir le dossier du projet dans votre IDE.**
3. **Lancer "index.html" dans votre navigateur pour démarrer l'enquête.**

--- 

## Utilisation
1. **Déroulement de l’enquête :**
L’utilisateur commence par l’Énigme 1 et progresse à travers les énigmes successives. Chaque étape doit être correctement résolue pour débloquer l’énigme suivante.

2. **Interactions :**
Les réponses sont validées via des formulaires ou des clics sur des éléments interactifs. Des messages d’erreur ou de réussite s’affichent en temps réel.

3. **Collecte d’indices :**
Chaque énigme résolue ajoute un indice à l’inventaire, aidant à reconstituer l’ensemble de l’enquête.
