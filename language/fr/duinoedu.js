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

Blockly.Language.duinoedu_joystick = {
  category: 'DuinoEdu : capteurs',
  helpUrl: 'http://duinoedu.com/store1/04-modules-de-base/80-joystick-xy-clic-dupont.html',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
	.appendTitle("l'angle du joystick")
        .appendTitle(new Blockly.FieldImage("http://duinoedu.com/store1/225-large_default/joystick-xy-clic-dupont.jpg", 64, 64))
	.appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
        .appendTitle("suivant l'axe")
        .appendTitle(new Blockly.FieldDropdown([["x", "x"],  ["y", "y"]]), "AXIS");
    this.setOutput(true, Number);
this.setTooltip("renvoie une valeur numérique (200~800) représentant l'inclinaison dans chaque axe");
  }
};
Blockly.Arduino.duinoedu_joystick =  function() {
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

