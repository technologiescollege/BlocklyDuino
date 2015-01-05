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

// define blocks
if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.technozone_led = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("mettre la DEL")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/56-cart_default/kit-carte-sortie-led.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("à l'état")
        .appendTitle(new Blockly.FieldDropdown([["1", "HIGH"], ["0", "LOW"]]), "STAT"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('diode verte');
  }
};

Blockly.Arduino.technozone_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

