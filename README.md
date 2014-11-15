### Version francisée de BlocklyDuino

BlocklyDuino est un programme web, un **webware graphique permettant la programmation graphique pour [Arduino](http://www.arduino.cc/)**.
![Blink !](/http://www.technologiescollege.fr/blocklyduino/Capture.jpg)

BlocklyDuino est basé sur [Blockly](https://developers.google.com/blockly/), un éditeur de programme graphique en interface web. Il fournit un seul type de traduction de la programmation graphique _(contrairement à Blockly qui traduit en Python, en JavaScript, etc et permet de le simuler en ligne : [exemple](http://www.technologiescollege.fr/blockly/apps/code/index.html))_, pour générer du code à copier coller dans l'IDE Arduino.

BlocklyDuino possède une bibliothèque de blocs pour les modules [Grove](http://www.seeedstudio.com/wiki/GROVE_System), particulièrement adaptée à la découverte des micro-contrôleurs et aux expérimentations de systèmes mécatroniques.

Cette version a été françisée et réorganisée pour la faire utiliser au mieux par des élèves débutants dans le code.

**_Toutes les remarques sont les bienvenues pour améliorer la syntaxe !_**

### Fonctions

* Programmation pour Arduino en drag'n'drop graphique
* Génère un code totalement compatible avec le code Arduino
* Interaction des cartes Arduino grâce aux modules Grove rajoutés : plus de 10 blocs spécifiques à des capteurs/actionneurs Grove
* Possibilité de charger automatiquement des fichiers sur le site grâce aux paramètres de l'adresse URL _(voir les démos ci-dessous)_

### Démos

BlocklyDuino un outil web, un webware par référence aux software, hardware, etc. Vous pouvez le tester/utiliser à l'adresse suivante :
[Web](http://www.technologiescollege.fr/blocklyduino/apps/blocklyduino/index.html) 

You can link directly to examples
* [demo 1](http://www.technologiescollege.fr/blocklyduino/apps/blocklyduino/index.html?url=/blocklyduino/apps/blocklyduino/exemples/blink.xml)
* [demo 2](http://www.technologiescollege.fr/blocklyduino/apps/blocklyduino/index.html?url=/blocklyduino/apps/blocklyduino/exemples/servo_potentio.xml)

Or watch the [video demo](http://www.youtube.com/watch?v=_swiyXcUvNY)

### Run locally on your web browser

If you want to install it locally. Get code from github and open `blockly/demos/blocklyduino/index.html` in your browser.

The preffered way is to put the BlocklyDuino/web folder into a web server and open the url like localhost/public/blockly/demos/blocklyduino/index.html for use.

### Usage (3 Steps)

1. Open browser to BlocklyDuino, Drag and Drop blocks to make arduino program. 
2. Select 'Arduino' tab to copy source code to Arduino IDE
3. press 'upload' button to burn the code into arduino

### ChangeLog

Check changelog [here](https://github.com/gasolin/BlocklyDuino/blob/master/CHANGELOG.txt)

### Authors and Contributors
Fred Lin (@gasolin)
Merci � Neil Fraser, Q.Neutron de Blockly http://code.google.com/p/blockly/
Thanks Arduino and Seeeduino guys for Arduino and Grove blocks.
The project is also inspired by [arduiblock](https://github.com/taweili/ardublock) and [modkit](http://www.modk.it/)

### License

Copyright (C) 2012~2014 Fred Lin gasolin+blockly@gmail.com

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
