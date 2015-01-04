//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

// define blocks
if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.grove_led = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("mettre la DEL")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/e0/LED1.jpg/400px-LED1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("à l'état")
        .appendTitle(new Blockly.FieldDropdown([["1", "HIGH"], ["0", "LOW"]]), "STAT"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('diode verte');
  }
};

Blockly.Language.grove_button = {
  category: 'Grove : capteurs numériques',
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Button',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("l'état du bouton")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/9/93/Button1.jpg/400px-Button1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('entrée numérique');
  }
};

Blockly.Language.grove_rotary_angle = {
  category: 'Grove : capteurs analogiques',
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Potentiometer',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle("l'angle de rotation")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/5/59/Potentiometer1.jpg/400px-Potentiometer1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, Number);
    this.setTooltip('sortie Analogique entre 0 et Vcc');
  }
};

Blockly.Language.grove_tilt_switch = {
  category: 'Grove : capteurs numériques',
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Tilt_switch',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("l'état du capteur 'Tilt'")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/9/95/Tilt1.jpg/400px-Tilt1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip("l'interrupteur se ferme : état 1, quand il est bouscule 'tilt'");
  }
};

Blockly.Language.grove_piezo_buzzer = {
  category: 'Grove : actionneurs',
  helpUrl: 'http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b#Grove_.E2.80.93_Buzzer',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("mettre le buzzer piezzo-électrique")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/ed/Buzzer1.jpg/400px-Buzzer1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("à l'état")
        .appendTitle(new Blockly.FieldDropdown([["1", "HIGH"], ["0", "LOW"]]), "STAT");    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('émet un son quand le buzzer est mis à 1');
  }
};

Blockly.Language.grove_relay = {
  category: 'Grove : actionneurs',
  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Relay',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("mettre le relais")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/0/04/Twig-Relay1.jpg/400px-Twig-Relay1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("à l'état")
        .appendTitle(new Blockly.FieldDropdown([["1", "HIGH"], ["0", "LOW"]]), "STAT");    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('capable de commuter des tensions et intensites plus grandes : maximum de 250V a 10 amperes.');
  }
};

Blockly.Language.grove_temporature_sensor = {
  category: 'Grove : capteurs analogiques',
  helpUrl: 'http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle("la température °C lue sur le capteur")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/b/b0/Temperature1.jpg/400px-Temperature1.jpg", 64, 64))
        .appendTitle("de la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
    this.setOutput(true, Number);
    this.setTooltip('renvoie la valeur lue de la température en degrés');
  }
};

Blockly.Language.grove_serial_lcd_print = {
  category: 'Grove : écran LCD',
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("écran LCD")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("TEXT", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("écrire sur la ligne 1");
    this.appendValueInput("TEXT2", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("écrire sur la ligne 2")
    this.appendValueInput("DELAY_TIME", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("pendant (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('ecrit le texte sur un écran LCD de 2 lignes et 16 caracteres');
  }
};

//grove lcd power on/off
Blockly.Language.grove_serial_lcd_power = {
  category: 'Grove : écran LCD',
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("écran LCD")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg", 64, 64))
        .appendTitle("de la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("mettre sur ")
        .appendTitle(new Blockly.FieldDropdown([["marche", "ON"], ["arrêt", "OFF"]]), "STAT"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("eteint ou allume l'écran");
  }
};

//scroll left/right/no scroll/blink/noblink
Blockly.Language.grove_serial_lcd_effect = {
category: 'Grove : écran LCD',
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("écran LCD")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("activer l'effet")
        .appendTitle(new Blockly.FieldDropdown([["défilement vers la gauche", "LEFT"], ["défilement vers la droite", "RIGHT"], ["défilement automatique", "AUTO"]]), "STAT"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('modifie des effets integres : défilements');
  }
};

Blockly.Language.grove_sound_sensor = {
  category: 'Grove : capteurs analogiques',
  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Sound_Sensor',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle("le volume lu par le capteur sonore")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/e3/Twig-Sound-sensor.jpg/400px-Twig-Sound-sensor.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
    this.setOutput(true, Number);
    this.setTooltip('detecte les sons de son environnement et renvoie une valeur proportionnelle au bruit ambiant');
  }
};

Blockly.Language.grove_pir_motion_sensor = {
  category: 'Grove : capteurs numériques',
  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_PIR_Motion_Sensor',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("la détection de mouvements")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/f/fd/Twig-PIR_Motion_Sensor.jpg/400px-Twig-PIR_Motion_Sensor.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.setOutput(true, Number);
    this.setTooltip("quand un mouvement est détecté dans sa portee, l'état est mis a 1");
  }
};

Blockly.Language.grove_line_finder = {
  category: 'Grove : capteurs numériques',
  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Line_Finder',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("le suivi de ligne")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/8/82/Grovelinefinder1.jpg/400px-Grovelinefinder1.jpg", 64, 64))
	      .appendTitle("sur la broche")
	      .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip("résultat numérique (0 ou 1) suivant qu'il lit une ligne noire sur un fond blanc");
  }
};

Blockly.Language.grove_ultrasonic_ranger = {
  category: 'Grove : capteurs analogiques',
  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
	      .appendTitle("la distance mesurée par ultra-son")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/b/b0/Twig_-_Ultrasonic_Ranger2.jpg/200px-Twig_-_Ultrasonic_Ranger2.jpg", 64, 64))
	      .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("en ")
        .appendTitle(new Blockly.FieldDropdown([["cm", "cm"],  ["pouces", "inch"]]), "UNIT");
    this.setOutput(true, Boolean);
    this.setTooltip('mesure de distance par echo ultra-son');
  }
};

Blockly.Language.grove_motor_shield = {
  category: 'Grove : moteurs',
  helpUrl: 'http://www.seeedstudio.com/wiki/Motor_Shield',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("moteur")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/4/4d/Smotoshield2.jpg/400px-Smotoshield2.jpg", 64, 64))
		.appendTitle("activer la commande")
        .appendTitle(new Blockly.FieldDropdown([["stop", "stop"], ["avance", "forward"], ["droite", "right"], ["gauche", "left"], ["recule", "backward"]]), "DIRECTION");
    /*this.appendValueInput("SPEED", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("Speed");*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('commande des moteurs à courant continu');
  }
};

Blockly.Language.grove_thumb_joystick = {
  category: 'Grove : capteurs analogiques',
  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Thumb_Joystick',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
	.appendTitle("l'angle du joystick")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/e0/Twig_-_Thumb_Joystick_v0.9b.jpg/200px-Twig_-_Thumb_Joystick_v0.9b.jpg", 64, 64))
	.appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
        .appendTitle("suivant l'axe")
        .appendTitle(new Blockly.FieldDropdown([["x", "x"],  ["y", "y"]]), "AXIS");
    this.setOutput(true, Number);
this.setTooltip("renvoie une valeur numérique (200~800) représentant l'inclinaison dans chaque axe");
  }
};

Blockly.Language.grove_rgb_led = {
  category: 'Grove : actionneurs',
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=Twig_-_Chainable_RGB_LED',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
  .appendTitle("allumer la diode RGB en série")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/chanbalelednb1.jpg", 64, 64))
  .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendDummyInput("COLOR0")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("couleur 1")
        .appendTitle(new Blockly.FieldColour("#00ff00"), "RGB0");
    this.setMutator(new Blockly.Mutator(['grove_rgb_led_item']));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("DEL 256 couleurs, pour l'instant la mise en serie n'est pas fonctionnelle");
    this.itemCount_ = 1;
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    for (var x = 0; x < this.itemCount_; x++) {
      var colour_rgb = this.getTitleValue('RGB0');
      //alert(colour_rgb);
      container.setAttribute('RGB' + x, colour_rgb);
    }
    return container;
  },
  domToMutation: function(xmlElement) {
    for (var x = 0; x < this.itemCount_; x++) {
      this.removeInput('COLOR' + x);
    }
    this.itemCount_ = window.parseInt(xmlElement.getAttribute('items'), 10);
    for (var x = 0; x < this.itemCount_; x++) {
      var color = window.parseInt(xmlElement.getAttribute('RGB'+x), "#00ff00");
      var input = this.appendDummyInput('COLOR' + x);
      //if (x == 0) {
        input.setAlign(Blockly.ALIGN_RIGHT)
             .appendTitle("couleur "+(x+1))
             .appendTitle(new Blockly.FieldColour(color), "RGB" + x);
      //}
    }
    if (this.itemCount_ == 0) {
      this.appendDummyInput('COLOR0')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendTitle("couleur 1")
          .appendTitle(new Blockly.FieldColour("#00ff00"), "RGB0");
    }
  },
  decompose: function(workspace) {
    var containerBlock = new Blockly.Block(workspace,
                                           'grove_rgb_led_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
      var itemBlock = new Blockly.Block(workspace, 'grove_rgb_led_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    // Disconnect all input blocks and remove all inputs.
    if (this.itemCount_ == 0) {
      this.removeInput('COLOR0');
    } else {
      for (var x = this.itemCount_ - 1; x >= 0; x--) {
        //console.log("cnt:"+x);
        this.removeInput('COLOR' + x);
      }
    }
    /*var top;
    if(this.itemCount_ > 0){
      top = this.itemCount_-1;
    } else {
      top = 0;
    }
    console.log("top:"+top);*/
    this.itemCount_ = 0;
    // Rebuild the block's inputs.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    while (itemBlock) {
      var colour_rgb = this.getTitleValue('RGB' + this.itemCount_);
      if(colour_rgb==null){
          colour_rgb = "00ff00";
      }
      //console.log("blk:"+this.itemCount_);
      /*if(top>this.itemCount_){
        this.removeInput('COLOR' + this.itemCount_);
      }*/
      var input = this.appendDummyInput('COLOR' + this.itemCount_);
      //if (this.itemCount_ == 0) {
        input.setAlign(Blockly.ALIGN_RIGHT)
             .appendTitle("couleur " + (this.itemCount_+1))
             .appendTitle(new Blockly.FieldColour(colour_rgb), "RGB" + this.itemCount_);
      //}
      // Reconnect any child blocks.
      if (itemBlock.valueConnection_) {
        input.connection.connect(itemBlock.valueConnection_);
      }
      this.itemCount_++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    if (this.itemCount_ == 0) {
      this.appendDummyInput('COLOR0')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendTitle("couleur 1")
          .appendTitle(new Blockly.FieldColour("#00ff00"), "RGB0");
    }
  },
  /*saveConnections: function(containerBlock) {
    // Store a pointer to any connected child blocks.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (itemBlock) {
      var input = this.getInput('COLOR' + x);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      x++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  }*/
};

Blockly.Language.grove_rgb_led_container = {
  // Container.
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendTitle("fonction");
    this.appendStatementInput('STACK');
    this.setTooltip("ajouter ou retirer des items pour reconfigurer la fonction");
    this.contextMenu = false;
  }
};

Blockly.Language.grove_rgb_led_item = {
  // Add items.
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendTitle("Item");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("ajouter un item a la fonction");
    this.contextMenu = false;
  }
};

Blockly.Language.grove_bluetooth_slave = {
  category: 'Reseau',
  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
      .appendTitle("Bluetooth en mode esclave")
      .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/File:Twigbt00.jpg", 64, 64))
      .appendTitle("sur la broche")
      .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendDummyInput("")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendTitle("nom declare")
      .appendTitle(new Blockly.FieldTextInput('blocklyduino'), 'NAME');
    this.appendDummyInput("")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendTitle("code PIN")
      .appendTitle(new Blockly.FieldTextInput('0000'), 'PINCODE');
    this.appendStatementInput("RCV")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendTitle("recevoir");
    this.appendStatementInput("SNT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendTitle("envoyer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Bluetooth V2.0+EDR esclave. Seulement 1 esclave par carte.');
  }
};
//http://www.seeedstudio.com/wiki/File:Twig-Temp%26Humi.jpg
//http://www.seeedstudio.com/wiki/Grove-_Temperature_and_Humidity_Sensor

//http://www.seeedstudio.com/wiki/Grove_-_125KHz_RFID_Reader

/*
void setup()
{
	pinMode( 3 , OUTPUT);
	pinMode( 1 , INPUT);
}

void loop()
{
	if (digitalRead( 1))
	{
		digitalWrite( 3 , HIGH);
	}
	else
	{
		digitalWrite( 1 , LOW);
	}
}
*/
// define generators
Blockly.Arduino = Blockly.Generator.get('Arduino');

Blockly.Arduino.grove_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino.grove_button = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_rotary_angle = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_tilt_switch = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_tilt_switch_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
int buttonPin = 1; 
int buzzerPin = 2; 

char notes[] = "cdefgabC "; // a space represents a rest 
const int length = sizeof(notes); // the number of notes
int beats[length] = { 1,1,1,1,1,1,1,1,1}; 

int tempo = 300; 

void playTone(int tone, int duration) { 
  for (long i = 0; i < duration * 1000L; i += tone * 2) { 
    digitalWrite(buzzerPin, HIGH); 
    delayMicroseconds(tone); 
    digitalWrite(buzzerPin, LOW); 
    delayMicroseconds(tone); 
  }
} 

void playNote(char note, int duration) { 
  char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C'}; 
  int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 }; 

  // play the tone corresponding to the note name 
  for (int i = 0; i < length; i++) {
    if (names[i] == note) { 
      playTone(tones[i], duration); 
    }
  }
}

void setup() { 
  pinMode(buzzerPin, OUTPUT); 
  pinMode(buttonPin,INPUT); 
} 

void loop() { 
  if(digitalRead(buttonPin)) 
  { 
  for (int i = 0; i < length; i++) { 
    if (notes[i] == ' ') { 
      delay(beats[i] * tempo); // rest 
    } else { 
      playNote(notes[i], beats[i] * tempo); 
    } 

    // pause between notes 
    delay(tempo / 20);  
  } 
  } 
}  
*/
Blockly.Arduino.grove_piezo_buzzer = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_piezo_buzzer_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino.grove_relay = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_relay_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino.grove_temporature_sensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  /*
	a=analogRead(0);
	  resistance=(float)(1023-a)*10000/a; 
	  temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
  */
  var code = 'round('+'(1/(log((float)(1023-analogRead('+dropdown_pin+'))*10000/analogRead('+dropdown_pin+'))/10000)/3975+1/298.15)-273.15'+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
#include <SerialLCD.h> 
#include <SoftwareSerial.h> //this is a must 
SerialLCD slcd(11,12);//this is a must, assign soft serial pins 

void setup() 
{
  slcd.begin();// set up : 
} 

void loop() 
{ 
  slcd.backlight();// Turn on the backlight: //noBacklight
  slcd.setCursor(0,0); // set the cursor to (0,0): 
  slcd.print("  Seeed Studio"); // Print a message to the LCD. 
  slcd.setCursor(0,1); //line 2
  slcd.print("   Starter kit   ");  
  delay(5000);
  //slcd.scrollDisplayLeft();//scrollDisplayRight/autoscroll/
  //slcd.clear(); 
  //Power/noPower
} 
*/

var _get_next_pin = function(dropdown_pin) {
  var NextPIN = dropdown_pin;
  if(parseInt(NextPIN)){
    NextPIN = parseInt(dropdown_pin)+1;
  } else {
    NextPIN = 'A'+(parseInt(NextPIN.slice(1,NextPIN.length))+1);
  }
  //check if NextPIN in bound
  var pinlen = profile.default.digital.length;
  var notExist=true;
  for(var i=0;i<pinlen;i++){
    if(profile.default.digital[i][1] == NextPIN){
      notExist=false;
    } 
  }
  if(notExist){
    alert("Le capteur Grove necessite le port PIN#+1, la configuration actuelle sort des limites.");
    return null;
  } else {
    return NextPIN;
  }
}

Blockly.Arduino.grove_serial_lcd_print = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var text2 = Blockly.Arduino.valueToCode(this, 'TEXT2',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  /*if(text.length>16||text2.length>16){
      alert("string is too long");
  }*/
  Blockly.Arduino.definitions_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.definitions_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN = _get_next_pin(dropdown_pin);

  Blockly.Arduino.definitions_['var_lcd_'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';
  
  Blockly.Arduino.setups_['setup_lcd_'+dropdown_pin] = 'slcd_'+dropdown_pin+'.begin();\n';
  var code = 'slcd_'+dropdown_pin+'.backlight();\n';
  code    += 'slcd_'+dropdown_pin+'.setCursor(0,0);\n';
  code    += 'slcd_'+dropdown_pin+'.print('+text+');\n';//text.replace(new RegExp('\'',"gm"),'')
  code    += 'slcd_'+dropdown_pin+'.setCursor(0,1);\n';
  code    += 'slcd_'+dropdown_pin+'.print('+text2+');\n';
  code    += 'delay('+delay_time+');\n';
  return code;
};

Blockly.Arduino.grove_serial_lcd_power = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');

  Blockly.Arduino.definitions_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.definitions_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN = _get_next_pin(dropdown_pin);

  Blockly.Arduino.definitions_['var_lcd'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';
  var code = 'slcd_'+dropdown_pin;
  if(dropdown_stat==="ON"){
    code += '.Power();\n';
  } else {
    code += '.noPower();\n';
  }
  return code;
};

Blockly.Arduino.grove_serial_lcd_effect = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  
  Blockly.Arduino.definitions_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.definitions_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN = _get_next_pin(dropdown_pin);

  Blockly.Arduino.definitions_['var_lcd'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';
  var code = 'slcd_'+dropdown_pin;
  if(dropdown_stat==="LEFT"){
    code += '.scrollDisplayLeft();\n';
  } else if(dropdown_stat==="RIGHT"){
    code += '.scrollDisplayRight();\n';
  } else {
    code += '.autoscroll();\n';
  }
  return code;
};

Blockly.Arduino.grove_sound_sensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_pir_motion_sensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_line_finder = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_ultrasonic_ranger = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_unit = this.getTitleValue('UNIT');
  Blockly.Arduino.definitions_['define_ultrasonic'] = '#include <Ultrasonic.h>\n';
  Blockly.Arduino.definitions_['var_ultrasonic'+dropdown_pin] = 'Ultrasonic ultrasonic_'+dropdown_pin+'('+dropdown_pin+');\n';
  var code;
  if(dropdown_unit==="cm"){
    Blockly.Arduino.setups_['setup_ultrasonic_'+dropdown_pin] = 'ultrasonic_'+dropdown_pin+'.MeasureInCentimeters();';
    code = 'ultrasonic_'+dropdown_pin+'.RangeInCentimeters();';
  } else {
    Blockly.Arduino.setups_['setup_ultrasonic_'+dropdown_pin] = 'ultrasonic_'+dropdown_pin+'.MeasureInInches();';
    code = 'ultrasonic_'+dropdown_pin+'.RangeInInches();';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_motor_shield = function() {
  var dropdown_direction = this.getTitleValue('DIRECTION');
  var speed = 127;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(8,OUTPUT);//I1\n"+
  "  pinMode(11,OUTPUT);//I2\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(12,OUTPUT);//I3\n"+
  "  pinMode(13,OUTPUT);//i4\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(12,LOW);\n"+
     "  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n"+
     "  digitalWrite(8,HIGH);\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(12,HIGH);\n"+
     "  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n"+
     "  digitalWrite(8,HIGH);\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(12,LOW);\n"+
     "  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n"+
     "  digitalWrite(8,LOW);\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(12,HIGH);\n"+
     "  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n"+
     "  digitalWrite(8,LOW);\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "digitalWrite(9,LOW);// Un-enable the pin, to stop the motor. this should be done to avoid damaging the motor.\n"+
     "digitalWrite(10,LOW);\n"+
     "delay(1000);\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.grove_thumb_joystick =  function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_axis = this.getTitleValue('AXIS');
  var stickPIN = "0"
  if(dropdown_axis==="y"){
    stickPIN = _get_next_pin(dropdown_pin);
  } else {
    stickPIN = dropdown_pin
  }
  var code = 'analogRead('+stickPIN+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

Blockly.Arduino.grove_rgb_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var NextPIN = _get_next_pin(dropdown_pin);
  
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  Blockly.Arduino.setups_['setup_input_'+NextPIN] = 'pinMode('+NextPIN+', OUTPUT);';
  Blockly.Arduino.definitions_['define_uint8'] = "#define uint8 unsigned char";
  Blockly.Arduino.definitions_['define_uint16'] = "#define uint16 unsigned int";
  Blockly.Arduino.definitions_['define_uint32'] = "#define uint32 unsigned long int";
  Blockly.Arduino.definitions_['define_clkproduce_'+dropdown_pin] = "void ClkProduce_"+dropdown_pin+"(void)\n"+
  "{\n"+
  "  digitalWrite("+dropdown_pin+", LOW);\n"+
  "  delayMicroseconds(20);\n"+
  "  digitalWrite("+dropdown_pin+", HIGH);\n"+
  "  delayMicroseconds(20);\n"+
  "}\n";
  Blockly.Arduino.definitions_['define_send32zero_'+dropdown_pin] = "void Send32Zero_"+dropdown_pin+"(void)\n"+
  "{\n"+
  "  uint8 i;\n"+
  "  for (i=0; i<32; i++)\n"+
  "  {\n"+
  "    digitalWrite("+NextPIN+", LOW);\n"+
  "    ClkProduce_"+dropdown_pin+"();\n"+
  "  }\n"+
  "}\n";
  Blockly.Arduino.definitions_['define_taskanticode'] = "uint8 TakeAntiCode(uint8 dat)\n"+
  "{\n"+
  "  uint8 tmp = 0;\n"+
  "  if ((dat & 0x80) == 0)\n"+
  "  {\n"+
  "    tmp |= 0x02;\n"+
  "  }\n"+
  "  \n"+
  "  if ((dat & 0x40) == 0)\n"+
  "  {\n"+
  "    tmp |= 0x01;\n"+
  "  }\n"+
  "  return tmp;\n"+
  "}\n";
  Blockly.Arduino.definitions_['define_datasend_'+dropdown_pin] = "// gray data\n"+
  "void DatSend_"+dropdown_pin+"(uint32 dx)\n"+
  "{\n"+
  "  uint8 i;\n"+
  "  for (i=0; i<32; i++)\n"+
  "  {\n"+
  "    if ((dx & 0x80000000) != 0)\n"+
  "    {\n"+
  "      digitalWrite("+NextPIN+", HIGH);\n"+
  "    }\n"+
  "    else\n"+
  "    {\n"+
  "      digitalWrite("+NextPIN+", LOW);\n"+
  "    }\n"+
  "  dx <<= 1;\n"+
  "  ClkProduce_"+dropdown_pin+"();\n"+
  "  }\n"+
  "}\n";
  Blockly.Arduino.definitions_['define_datadealwithsend_'+dropdown_pin] = "// data processing\n"+
"void DataDealWithAndSend_"+dropdown_pin+"(uint8 r, uint8 g, uint8 b)\n"+
"{\n"+
  "  uint32 dx = 0;\n"+
  "  dx |= (uint32)0x03 << 30;             // highest two bits 1，flag bits\n"+
  "  dx |= (uint32)TakeAntiCode(b) << 28;\n"+
  "  dx |= (uint32)TakeAntiCode(g) << 26;\n"+
  "  dx |= (uint32)TakeAntiCode(r) << 24;\n"+
 "\n"+
  "  dx |= (uint32)b << 16;\n"+
  "  dx |= (uint32)g << 8;\n"+
  "  dx |= r;\n"+
 "\n"+
  "  DatSend_"+dropdown_pin+"(dx);\n"+
"}\n";
  var code = "Send32Zero_"+dropdown_pin+"(); // begin\n";
  //console.log(this.itemCount_);
  if (this.itemCount_ == 0) {
    return '';
  } else {
    for (var n = 0; n < this.itemCount_; n++) {
      var colour_rgb = this.getTitleValue('RGB'+n);
      //console.log(colour_rgb);
      code += "DataDealWithAndSend_"+dropdown_pin+"("+hexToR(colour_rgb)+", "+hexToG(colour_rgb)+", "+hexToB(colour_rgb)+"); // first node data\n";
    }
  }
  code += "Send32Zero_"+dropdown_pin+"();  // send to update data\n";
  return code;
};

Blockly.Arduino.grove_bluetooth_slave = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var NextPIN = _get_next_pin(dropdown_pin);
  var name = this.getTitleValue('NAME')
  var pincode = this.getTitleValue('PINCODE');
  var statement_receive = Blockly.Arduino.statementToCode(this, "RCV")
  var statement_send = Blockly.Arduino.statementToCode(this, "SNT")
  /* if(pincode.length != 4){
    alert("pincode length should be 4");
  } */
  Blockly.Arduino.definitions_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['var_bluetooth_'+dropdown_pin] = 'SoftwareSerial blueToothSerial_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';

  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] = 'Serial.begin(9600);\n';
  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] += '  pinMode('+dropdown_pin+', INPUT);\n';
  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] += '  pinMode('+NextPIN+', OUTPUT);\n';
  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] += '  setupBlueToothConnection_'+dropdown_pin+'();\n';

  Blockly.Arduino.definitions_['define_setupBlueToothConnection_'+dropdown_pin] = 'void setupBlueToothConnection_'+dropdown_pin+'()\n'+
  '{\n'+
  '  blueToothSerial_'+dropdown_pin+'.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STNA='+name+'\\r\\n"); //set the bluetooth name as "'+name+'"\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n'+
  '  Serial.println("The slave bluetooth is inquirable!");\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial_'+dropdown_pin+'.flush();\n'+
  '}\n';
  var code = 'char recvChar_'+dropdown_pin+';\n'+
  'while(1) {\n'+
  '  if(blueToothSerial_'+dropdown_pin+'.available()) {//check if there is any data sent from the remote bluetooth shield\n'+
  '    recvChar_'+dropdown_pin+' = blueToothSerial_'+dropdown_pin+'.read();\n'+
  '    Serial.print(recvChar_'+dropdown_pin+');\n'+
       statement_receive+
  '  }\n'+
  '  if(Serial.available()){//check if there is any data sent from the local serial terminal, you can add the other applications here\n'+
  '    recvChar_'+dropdown_pin+' = Serial.read();\n'+
  '    blueToothSerial_'+dropdown_pin+'.print(recvChar_'+dropdown_pin+');\n'+
       statement_send+
  '  }\n'+
  '}\n';
  return code;
};
