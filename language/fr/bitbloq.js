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
//www.bq.com/fr

// define blocks
if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.bq_led = {
  category: 'BQ : actionneurs',
  helpUrl: 'http://www.bq.com/fr/produits/kit-robotica.html',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([["allume", "HIGH"], ["éteint", "LOW"]]), "STAT")
        .appendTitle("la DEL")
        .appendTitle(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec09.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie led (réf : LED)');
  }
};

Blockly.Language.bq_buzzer = {
  category: 'BQ : actionneurs',
  helpUrl: 'http://www.bq.com/fr/produits/kit-robotica.html',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		.appendTitle("émettre un son du buzzer")
        .appendTitle(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec06.jpg", 64, 64))
		.appendTitle("sur la broche")
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
    this.setTooltip('Sortie Buzzer (réf : BUZZER)');
  }
};

Blockly.Language.bq_ultrason = {
  category: 'BQ : capteurs',
  helpUrl: 'http://www.bq.com/fr/produits/kit-robotica.html',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
	      .appendTitle("la distance mesurée (cm)")
        .appendTitle(new Blockly.FieldImage("http://d7smofq56tu69.cloudfront.net/media/catalog/product/cache/9/thumbnail/72x64/9df78eab33525d08d6e5fb8d27136e95/i/m/img_4643.jpg", 64, 64))
    this.appendDummyInput("")
	      .appendTitle("TRIG est sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "TRIGER")
    this.appendDummyInput("")
        .appendTitle("DIST est sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "DIST");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Ultrason (réf : ULTRASON)');
  }
};

Blockly.Language.bq_servo = {
  category: 'BQ : actionneurs',
  helpUrl: 'http://www.bq.com/fr/produits/kit-robotica.html',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("positionne le mini servo-moteur")
        .appendTitle(new Blockly.FieldImage("https://static-bqreaders.s3.amazonaws.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec10.jpg", 64, 64))
        .appendTitle("de la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("DEGREE", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sur l'angle [0~180°]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Servo-moteur (réf : MINI-SERVO)');
  }
};

Blockly.Language.bq_servo_rotation_continue = {
  category: 'BQ : actionneurs',
  helpUrl: 'http://www.bq.com/fr/produits/kit-robotica.html',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("faire tourner le servo-moteur à rotation continue")
        .appendTitle(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec11.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.PWM), "PIN")
    this.appendValueInput("SENS", Boolean)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sens horaire (VRAI ou FAUX ?)");
	this.appendValueInput("VITESSE", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("à la vitesse [0~255] de");
    this.appendValueInput("DELAY_TIME", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("pendant un délai (ms) de");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("rotation possible entre 0~180 degrés : 0~90 puissance variable dans un sens ; 90~180 puissance variable dans l'autre sens");
  }
};

Blockly.Language.bq_bouton_poussoir = {
  category: 'BQ : capteurs',
  helpUrl: 'http://www.bq.com/fr/produits/kit-robotica.html',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("l'état du bouton")
        .appendTitle(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec04.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée bouton poussoir (réf : BOUTON-POUSSOIR)');
  }
};

Blockly.Language.bq_luminosite = {
  category: 'BQ : capteurs',
  helpUrl: 'http://www.bq.com/fr/produits/kit-robotica.html',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle("la luminosité (Lux) lue")
        .appendTitle(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec05.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
    this.setOutput(true, Number);
    this.setTooltip('Entrée Capteur de Luminosité (réf : LUMINOSITE)');
  }
};

Blockly.Language.bq_potentiometre = {
  category: 'BQ : capteurs',
  helpUrl: 'http://www.bq.com/fr/produits/kit-robotica.html',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle("la position du potentiomètre")
        .appendTitle(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec08.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, Number);
    this.setTooltip('Entrée potentiomètre (réf : POTENTIOMETRE');
  }
};

Blockly.Language.bq_bluetooth_slave = {
  category: 'BQ : communication',
  helpUrl: 'http://www.bq.com/fr/produits/kit-robotica.html',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
      .appendTitle("Bluetooth en mode esclave")
      .appendTitle(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec07.jpg", 64, 64))
      .appendTitle("sur la broche")
      .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendDummyInput("")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendTitle("nom declare")
      .appendTitle(new Blockly.FieldTextInput('bluetooth'), 'NAME');
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

Blockly.Language.bq_capteur_de_ligne = {
  category: 'BQ : capteurs',
  helpUrl: 'http://www.bq.com/fr/produits/kit-robotica.html',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("l'état du capteur")
        .appendTitle(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec03.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("de suivi de ligne");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Détecteur de ligne (réf : LIG1)');
  }
};

Blockly.Arduino.bq_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led1red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino.bq_buzzer = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  //var dropdown_stat = this.getTitleValue('STAT');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_relay1'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'tone('+dropdown_pin+','+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.bq_ultrason = function() {
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

Blockly.Arduino.bq_servo = function() {
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

Blockly.Arduino.bq_bouton_poussoir = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bq_capteur_de_ligne = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_lig1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bq_potentiometre = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bq_luminosite = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'round(1517.288685*exp(-64.822510*analogRead('+dropdown_pin+')/10000))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bq_servo_rotation_continue = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  //delay_time = delay_time.replace('(','').replace(')','');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  if (value_sens =="(true)")
		{
		//value_degree = 'map(value_degree, 0, 255, 0 , 90)' ;
		var code = 'servo_'+dropdown_pin+'.write(90 + map('+value_degree+', 0, 255, 0 , 90));\n'+'delay(' + delay_time + ');\n';
		}
		else
		{
		//value_degree = '90 - map(value_degree, 0, 255, 0 , 90)' ;
		var code = 'servo_'+dropdown_pin+'.write(90 - map('+value_degree+', 0, 255, 0 , 90));\n'+'delay(' + delay_time + ');\n';
		}
  // var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};
