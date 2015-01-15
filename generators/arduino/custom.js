/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author author@email.com (Name)
 */
'use strict';

//define blocks
if (!Blockly.Language) Blockly.Language = {};

//define read block
Blockly.Language.custom_read = {
  category: 'Custom',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("CustomRead PIN#")
	    .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('input block');
  }
};

//define write block
Blockly.Language.custom_write = {
  category: 'Custom',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("CustomWrite PIN#")
	    .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/e0/LED1.jpg/400px-LED1.jpg", 64, 64))
	    .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
	    .appendTitle("value");
	this.appendValueInput("NUM", Number);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Output block');
  }
};

// define generators
Blockly.Arduino.custom_write = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'analogWrite('+dropdown_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.custom_read = function() {
  var dropdown_pin = this.getTitleValue('PIN');  
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
