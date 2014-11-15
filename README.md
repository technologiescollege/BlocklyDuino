Version francisée de BlocklyDuino
=====

BlocklyDuino est un programme web, un **webware graphique permettant la programmation graphique pour [Arduino](http://www.arduino.cc/)**.

![Blink !](http://www.technologiescollege.fr/blocklyduino/Capture.jpg)

BlocklyDuino est basé sur [Blockly](https://developers.google.com/blockly/), un éditeur de programme graphique en interface web. Il fournit un seul type de traduction de la programmation graphique _(contrairement à Blockly qui traduit en Python, en JavaScript, etc et permet de le simuler en ligne : [exemple](http://www.technologiescollege.fr/blockly/apps/code/index.html))_, pour générer du code à copier coller dans l'IDE Arduino.

BlocklyDuino possède une bibliothèque de blocs pour les modules [Grove](http://www.seeedstudio.com/wiki/GROVE_System), particulièrement adaptée à la découverte des micro-contrôleurs et aux expérimentations de systèmes mécatroniques.

Cette version a été françisée et réorganisée pour la faire utiliser au mieux par des élèves débutants dans le code.

**_Toutes les remarques sont les bienvenues pour améliorer la syntaxe !_**

## Fonctions

* Programmation pour Arduino en drag'n'drop graphique
* Génère un code totalement compatible avec le code Arduino
* Interaction des cartes Arduino grâce aux modules Grove rajoutés : plus de 10 blocs spécifiques à des capteurs/actionneurs Grove
* Possibilité de charger automatiquement des fichiers sur le site grâce aux paramètres de l'adresse URL _(voir les démos ci-dessous)_

## Démos

BlocklyDuino un outil web, un webware par référence aux software, hardware, etc. Vous pouvez le tester/utiliser à l'adresse suivante :
[Technologies/BlocklyDuino](http://www.technologiescollege.fr/blocklyduino/apps/blocklyduino/index.html) 

Vous pouvez donc aussi lier directement l'ouverture de la page à l'ouverture d'un fichier XML hébergé (_ou tout en local_) :
* [démo 1 : faire clignoter une diode](http://www.technologiescollege.fr/blocklyduino/apps/blocklyduino/index.html?url=/blocklyduino/apps/blocklyduino/exemples/blink.xml)
* [démo 2 : faire varier un servo-moteur proportionnellement à une consigne de potentiomètre](http://www.technologiescollege.fr/blocklyduino/apps/blocklyduino/index.html?url=/blocklyduino/apps/blocklyduino/exemples/servo_potentio.xml)

Le créateur de BlocklyDuino a aussi posté une [vidéo](http://www.youtube.com/watch?v=_swiyXcUvNY)

## Utiliser en local dans son navigateur web

Si vous préfréez l'utiliser en local, il vous suffit de télécharger le code depuis Github (_Download Zip_)et d'ouvrir le fichier `index.html` dans votre navigateur.

Vous pouvez l'héberger sur un serveur, et ainsi y faire accéder de nombreux postes en pointant vers ce fichier 'index.html'.

## Utilisation en 4 temps

1. utiliser votre navigateur pour ouvrir BlocklyDuino grâce au fichier 'index.html'
2. créer son programme Arduino par drag'n'drop (_cliqué-déplacé_) des blocs
3. sélectionner l'onglet 'Arduino' pour en copier le contenu dans l'[IDE Arduino](http://arduino.cc/en/Main/Software)
4. presser le bouton 'Téléverser' pour transférer le code dans la mémoire de la carte Arduino


## Authors and Contributors
Fred Lin (@gasolin)
Merci � Neil Fraser, Q.Neutron de Blockly http://code.google.com/p/blockly/
Thanks Arduino and Seeeduino guys for Arduino and Grove blocks.
The project is also inspired by [arduiblock](https://github.com/taweili/ardublock) and [modkit](http://www.modk.it/)

## License

Copyright (C) 2012~2014 Fred Lin gasolin+blockly@gmail.com

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
