### Version francis�e de BlocklyDuino

BlocklyDuino est un programme web, un **webware graphique permettant la programmation graphique pour [Arduino](http://www.arduino.cc/)**.

BlocklyDuino est bas� sur [Blockly](http://code.google.com/p/blockly/), un �diteur de programme graphique en interface web. Il fournit un seul type de traduction de la programmation graphique, contrairement � Blockly, pour g�n�rer du code � copier coller dans l'IDE Arduino.

BlocklyDuino poss�de une biblioth�que de blocs pour les modules [Grove](http://www.seeedstudio.com/wiki/GROVE_System), particuli�rement adapt�s � la d�couverte des micro-contr�leurs et aux exp�rimentations de syst�mes m�catroniques.

Cette version a �t� fran�is�e et r�organis�e pour la faire utiliser au mieux par des �l�ves d�butants dans le code.

### Features

* Programming Arduino with visually drag and drop code blocks
* Generate fully compatible Arduino source code
* Interacive Arduino board with 10+ predefined Grove sensor blocks
* Load different on-site examples with url parameters

### Démo

BlocklyDuino is a web tool. You can give it a try at
[Web](http://www.technologiescollege.fr/blocklyduino/apps/blocklyduino/index.html) to see the working BlocklyDuino.

You can link directly to examples
* [demo 1](http://www.technologiescollege.fr/blocklyduino/apps/blocklyduino/index.html?url=/demos/blocklyduino/exemples/blink.xml)
* [demo 2](http://www.technologiescollege.fr/blocklyduino/apps/blocklyduino/index.html?url=/demos/blocklyduino/exemples/servo_potentio.xml)

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
