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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

//define blocks
if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.base_delay = {
  category: 'Contrôle',
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(120);
    this.appendValueInput("DELAY_TIME", Number)
        .appendTitle("délais (en ms) de")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('spécifier le temps de pause, en millisecondes');
  }
};

Blockly.Language.base_map = {
  category: 'Maths',
  helpUrl: 'http://arduino.cc/en/Reference/map',
  init: function() {
    this.setColour(230);
    this.appendValueInput("NUM", Number)
        .appendTitle("faire la transposée ")
        .setCheck(Number);
    this.appendValueInput("DMAX", Number)
        .appendTitle("sur un intervalle de [0-")
        .setCheck(Number);
    this.appendDummyInput("")
	      .appendTitle("]");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('transfère une valeur sur une échelle de 0 à 1023 vers une autre échelle');
  }
};

Blockly.Language.inout_buildin_led = {
   category: 'Sorties',
   helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
   init: function() {
     this.setColour(230);
     this.appendDummyInput("")
	       .appendTitle("mettre la DEL sur la carte à l'état logique")
	       .appendTitle(new Blockly.FieldDropdown([["1", "HIGH"], ["0", "LOW"]]), "STAT");
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setTooltip('éteint ou allume la DEL sur la carte Arduino');
   }
};

Blockly.Language.inout_digital_write = {
  category: 'Sorties',
  helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
	      .appendTitle("mettre la broche Digital")
	      .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      	.appendTitle("à l'état logique")
      	.appendTitle(new Blockly.FieldDropdown([["1 -> 5V", "HIGH"], ["0 -> 0V", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('écrire un état numérique 0 ou 1 sur une sortie spécifique');
  }
};

Blockly.Language.inout_digital_read = {
  category: 'Entrées',
  helpUrl: 'http://arduino.cc/en/Reference/DigitalRead',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
	      .appendTitle("l'état logique de la broche Digital")
	      .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip("lecture de l'état numérique 0 ou 1 de la broche digital");
  }
};

Blockly.Language.inout_PWM_write = {
  category: 'Sorties',
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
        .appendTitle("écrire sur la broche PWM~")
        .appendTitle(new Blockly.FieldDropdown(profile.default.PWM), "PIN");
    this.appendValueInput("NUM", Number)
        .appendTitle("la valeur")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('envoyer une valeur comprise entre 0 et 255 sur une sortie spécifique\nATTENTION à vérifier le n° sur la carte !');
  }
};

Blockly.Language.inout_analog_write = {
  category: 'Sorties',
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
        .appendTitle("écrire sur la broche Analogique")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.appendValueInput("NUM", Number)
        .appendTitle("la valeur")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('envoyer une valeur comprise entre 0 et 255 sur une sortie spécifique');
  }
};

Blockly.Language.inout_analog_read = {
  category: 'Entrées',
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
        .appendTitle("la valeur lue sur la broche Analogique")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, Number);
    this.setTooltip('Return value between 0 and 1024');
  }
};

Blockly.Language.tone = {
  category: 'Sorties',
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
        .appendTitle("émet un son sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("NUM", Number)
        .appendTitle("d'une fréquence (Hz)")
        .setCheck(Number);
    this.appendValueInput("TPS", Number)
        .appendTitle("pendant une durée (ms) de")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('émet un son sur la broche selectionnée');
  }
};

Blockly.Language.notone = {
  category: 'Sorties',
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
        .appendTitle("stop le son sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")      
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('coupe le son sur la broche selectionnée');
  }
};


Blockly.Language.inout_analog_read = {
  category: 'Entrées',
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
        .appendTitle("la valeur lue sur l'entrée Analogique")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, Number);
    this.setTooltip('renvoie une valeur comprise entre 0 et 1023');
  }
};

Blockly.Language.inout_highlow = {
  category: 'Sorties',
  helpUrl: 'http://arduino.cc/en/Reference/Constants',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([["1 -> 5V", "HIGH"], ["0 -> 0V", "LOW"]]), 'BOOL')
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP_1);
  }
};

Blockly.Language.inout_onoff = {
  category: 'Sorties',
  helpUrl: 'http://arduino.cc/en/Reference/Constants',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([["1 -> 5V", "HIGH"], ["0 -> 0V", "LOW"]]), 'BOOL')
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP_1);
  }
};

//servo block
//http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?cPath=170_171
Blockly.Language.servo_move = {
  category: 'Servo-moteur',
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("faire tourner le servo-moteur")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/a991.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("DEGREE", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("d'un angle (0~180°) de");
    this.appendValueInput("DELAY_TIME", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("pendant un délai (ms) de");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('rotation possible entre 0~180 degrés');
  }
};

Blockly.Language.servo_read_degrees = {
  category: 'Servo-moteur',
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("l'angle du servo-moteur")
        .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/a991.jpg", 64, 64))
        .appendTitle("connecté sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Number);
    this.setTooltip('renvoie le nombre de degrés de la dernière rotation');
  }
};

Blockly.Language.serial_print = {
  category: 'Sorties',
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(230);
    this.appendValueInput("CONTENT", String)
        .appendTitle("envoyer sur le port série la donnée :");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('envoies des données sur le port série pour sruvaillance par le moniteur en ASCII');
  }
};

// define generators
Blockly.Arduino = Blockly.Generator.get('Arduino');

Blockly.Arduino.base_delay = function() {
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  var code = 'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino.base_map = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
  var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'map('+value_num+', 0, 1024, 0, '+value_dmax+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.inout_buildin_led = function() {
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_output_13'] = 'pinMode(13, OUTPUT);';
  var code = 'digitalWrite(13,'+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino.notone = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'noTone('+dropdown_pin+');\n';
  return code;
};

Blockly.Arduino.inout_digital_write = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino.inout_digital_read = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_analog_write = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  //var dropdown_stat = this.getTitleValue('STAT');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'analogWrite('+dropdown_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.inout_PWM_write = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC); //value_num est la valeur de la variable NUM
  var code = 'analogWrite('+dropdown_pin+','+value_num+');\n'; // le code qui sera dans le loop
  return code;
};

Blockly.Arduino.tone = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  //var dropdown_stat = this.getTitleValue('STAT');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'tone('+dropdown_pin+','+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.inout_analog_read = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_highlow = function() {
  // Boolean values HIGH and LOW.
  var code = (this.getTitleValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_onoff = function() {
  // Boolean values HIGH and LOW.
  var code = (this.getTitleValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
//servo
#include <Servo.h>

Servo servo_11;

void setup() { 
  servo_11.attach(11);
}

void loop() { 
servo_11.write(0);
delay(2000);

servo_11.write(150); //0~180
delay(2000);
}
*/
Blockly.Arduino.servo_move = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino.servo_read_degrees = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  Blockly.Arduino.definitions_['define_servo'] = '#include &lt;Servo.h&gt;\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.read()';
  return code;
};

Blockly.Arduino.serial_print = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');
  
  Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
  
  var code = 'Serial.print('+content+');\nSerial.print("\\t");\n';
  return code;
};
