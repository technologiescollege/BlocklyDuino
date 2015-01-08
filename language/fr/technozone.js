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
//www.technozone51fr

// define blocks
if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.technozone_led1red = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([["Allume", "HIGH"], ["Eteint", "LOW"]]), "STAT")
        .appendTitle(" la LED ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1red.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie led rouge ( réf : LED1-RED )');
  }
};

Blockly.Language.technozone_led1green = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([["Allume", "HIGH"], ["Eteint", "LOW"]]), "STAT")
        .appendTitle(" la LED ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1green.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie led verte ( réf : LED1-GREEN )');
  }
};

Blockly.Language.technozone_led1yellow = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([["Allume", "HIGH"], ["Eteint", "LOW"]]), "STAT")
        .appendTitle(" la LED ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1yellow.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie led jaune ( réf : LED1-YELLOW )');
  }
};

Blockly.Language.technozone_relay1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:relay1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("le relais ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/relay1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("à l'état ")
        .appendTitle(new Blockly.FieldDropdown([["Activé", "LOW"], ["Désactivé", "HIGH"]]), "STAT"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Relais de puissance ( réf : RELAY1 )');
  }
};

Blockly.Language.technozone_buzzer1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/buzzer1.jpg", 64, 64))
        .appendTitle(" émet un son sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("NUM", Number)
        .appendTitle(" d'une fréquence (Hz) ")
        .setCheck(Number);
    this.appendValueInput("TPS", Number)
        .appendTitle(" pendant une durée (ms) de ")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Buzzer ( réf : LED1-BUZZER1 )');
  }
};

Blockly.Language.technozone_sonar1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:sonar1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
	      .appendTitle("la distance mesurée en cm")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/sonar1.jpg", 64, 64))
    this.appendDummyInput("")
	      .appendTitle("TRIGER sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "TRIGER")
    this.appendDummyInput("")
        .appendTitle("DIST sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "DIST");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Sonar Ultrasonore ( réf : SONAR1 )');
  }
};

Blockly.Language.technozone_servo1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("Positionne le servo-moteur ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servo1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servomoteur1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("DEGREE", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sur un angle (0~180°) de ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Servo-Moteur ( réf : SERVO1 + SERVO-MOT1 )');
  }
};

Blockly.Language.technozone_btn1white = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("le bouton ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1white.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(" est appuyé");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée bouton blanc ( réf : BTN1-WHITE )');
  }
};

Blockly.Language.technozone_btn1black = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("le bouton ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1black.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(" est appuyé");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée bouton noir ( réf : BTN1-BLACK )');
  }
};

Blockly.Language.technozone_btn1green = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("le bouton ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1green.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(" est appuyé");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée bouton vert ( réf : BTN1-GREEN )');
  }
};

Blockly.Language.technozone_btn1red = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("le bouton ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1red.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(" est appuyé");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée bouton rouge ( réf : BTN1-RED )');
  }
};

Blockly.Language.technozone_switch1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:switch1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("le fin de course ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/switch1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(" est appuyé");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Fin de course ( réf : SWITCH1 ou SWITCH2 )');
  }
};

Blockly.Language.technozone_ils1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ils1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("le capteur ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ils1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(" détecte un champ magnétique");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Capteur Magnétique ( réf : ILS1 )');
  }
};

Blockly.Language.technozone_proxi1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:proxi1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("le capteur de proximité ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/proxi1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(" détecte un obstacle");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Détecteur de Proximité ( réf : PROXI1 )');
  }
};

Blockly.Language.technozone_bari1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:bari1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("la barrière infrarouge ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/bari1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(" détecte un obstacle");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Barrière Infrarouge ( réf : BARI1 )');
  }
};

Blockly.Language.technozone_lig1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lig1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("le capteur ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lig1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(" détecte une ligne");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Détecteur de ligne ( réf : LIG1 )');
  }
};

Blockly.Language.technozone_cmouv1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:cmouv1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("le capteur ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servo1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/cmouv1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(" détecte une présence");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Détecteur de Présence ( réf : SERVO1 + CMOUV1 )');
  }
};

Blockly.Language.technozone_potar1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:potar1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle("position du potentiomètre ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/potar1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, Number);
    this.setTooltip('Entrée potentiomètre ( réf : POTAR1 )');
  }
};

Blockly.Language.technozone_ctn1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ctn1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle("lire la température en C° ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ctn1.jpg", 64, 64))
        .appendTitle(" sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
    this.setOutput(true, Number);
    this.setTooltip('Entrée Capteur de Température ( réf : CTN1 )');
  }
};

Blockly.Language.technozone_ldr1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ldr1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle("lire la luminosité en Lux ")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ldr1.jpg", 64, 64))
        .appendTitle(" sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
    this.setOutput(true, Number);
    this.setTooltip('Entrée Capteur de Luminosité ( réf : LDR1 )');
  }
};

Blockly.Arduino.technozone_led1red = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led1red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_led1green = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led1green_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_led1yellow = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led1yellow_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_relay1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_relay1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_buzzer1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  //var dropdown_stat = this.getTitleValue('STAT');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_relay1'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'tone('+dropdown_pin+','+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.technozone_sonar1 = function() {
  var dropdown_triger_pin = this.getTitleValue('TRIGER');
  var dropdown_dist_pin = this.getTitleValue('DIST');
  Blockly.Arduino.setups_["setup_sonar1"] = "pinMode("+dropdown_triger_pin+",OUTPUT);//Sonar triger pin\n"+
  "  pinMode("+dropdown_dist_pin+",INPUT);//Sonar distance pulse pin\n";
  var code = "";
  
  Blockly.Arduino.definitions_['define_mesure_distance_cm'] = "int mesure_distance_cm(byte trig_pin,byte dist_pin)\n"+
    "{\n"+
    "  digitalWrite(trig_pin,HIGH);\n"+
    "  delayMicroseconds(1000);\n"+
    "  digitalWrite(trig_pin,LOW);\n"+
    "  int value = (pulseIn(dist_pin,HIGH)/2)/29.1+2;\n"+
    "  if (value>255) { value=255; }\n"+
    "  delay(20);\n"+
    "  return value;\n"+
    "}\n";
  code="mesure_distance_cm("+dropdown_triger_pin+","+dropdown_dist_pin+")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_servo1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  //var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['define_servo1'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo1'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo1_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n';
  return code;
};

Blockly.Arduino.technozone_btn1white = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1black = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1black_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1green = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1green_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1red = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_switch1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_switch1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ils1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_ils1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_proxi1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_proxi1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_bari1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_bari1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_lig1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_lig1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_cmouv1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_cmouv1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_potar1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ctn1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  /*
	  temperature=round(-134*Analog_read/1023+116);
  */
  var code = 'round(116-(134*analogRead('+dropdown_pin+')/1023))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ldr1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  /*
	  luminosité=round(1517.288685*exp(-677.1876*Analog_read/10000));
  */
  var code = 'round(1517.288685*exp(-677.1876*analogRead('+dropdown_pin+')/10000))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};