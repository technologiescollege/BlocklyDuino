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

Blockly.Language.technozone_pap1cc = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("mettre en mouvement continu le")
        .appendTitle(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendTitle("de la carte PAP1")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64))
        .appendTitle("sur le bus I2C");
    this.appendDummyInput("")
        .appendTitle("à l'adresse")
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS", Boolean)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sens horaire ( VRAI ou FAUX ? )");
    this.appendValueInput("VITESSE", Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("vitesse [0~255]");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Language.technozone_pap1relatif = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("mettre en mouvement relatif le")
        .appendTitle(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendTitle("de la carte PAP1")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64))
        .appendTitle("sur le bus I2C");
    this.appendDummyInput("")
        .appendTitle("à l'adresse")
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS", Boolean)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sens horaire ( VRAI ou FAUX ? )");
    this.appendValueInput("VITESSE", Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("vitesse [0~255]");
    this.appendValueInput("PAS", Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("nombre de pas");               
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Language.technozone_pap1init = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle("initialiser la carte PAP1")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64))
        .appendTitle("sur le bus I2C");
    this.appendDummyInput("")
        .appendTitle("à l'adresse")
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");         
    this.appendDummyInput("")
        .appendTitle("le mode de commande des moteurs est")
        .appendTitle(new Blockly.FieldDropdown([["Single Stepping", "SINGLE_STEPPING"], ["Full Stepping", "FULL_STEPPING"], ["Half Stepping", "HALF_STEPPING"]]), "MODE");             
    this.appendDummyInput("")
        .appendTitle("le mode de libération des moteurs est")
        .appendTitle(new Blockly.FieldDropdown([["Auto Relax", "AUTO_RELAX"], ["No Auto Relax", "NO_AUTO_RELAX"]]), "RELAX");                 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Language.technozone_pap1busy = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("l'état de mouvement des moteurs")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64));
    this.appendDummyInput("")
        .appendTitle("à l'adresse sur le bus I2C")
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.setOutput(true, Boolean);
    this.setTooltip('Teste si les moteurs pas à pas sont en mouvement ( réf : PAP1 )');
  }
};

Blockly.Language.technozone_mot2 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:mot2',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("commande le")
        .appendTitle(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendTitle("de la carte MOT2")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/mot2.jpg", 64, 64))
        .appendTitle("connectér sur les broches");
    this.appendDummyInput("")
        .appendTitle("broche de commande de Direction (DIR)")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PINDIR");
    this.appendDummyInput("")
        .appendTitle("broche de commande de la Vitesse (PWM~)")
        .appendTitle(new Blockly.FieldDropdown(profile.default.PWM), "PINPWM");  
    this.appendValueInput("SENS", Boolean)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sens horaire (VRAI ou FAUX ?)");
    this.appendValueInput("VITESSE", Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("vitesse [0~255]");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs CC pour EASYCON1,EASYCON2,EASYBOT1 (réf : MOT2)');
  }
};

Blockly.Language.technozone_telec2 = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:telec2',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("la touche")
        .appendTitle(new Blockly.FieldDropdown([["ON/OFF", "FFA25D"], ["MODE", "FF629D"], ["MUTE", "FFE21D"], ["PLAY/PAUSE", "FF22DD"], ["PREVIOUS", "FF02FD"], ["NEXT", "FFC23D"],
         ["EQ", "FFE1F"], ["VOL-", "FFA857"], ["VOL+", "FF906F"], ["0", "FF6897"], ["RPT", "FF9867"], ["U/SD", "FFB04F"], ["1", "FF30CF"], ["2", "FF18E7"],
          ["3", "FF7A85"], ["4", "FF10EF"], ["5", "FF38C7"], ["6", "FF5AA5"], ["7", "FF42BD"], ["8", "FF4AB5"], ["9", "FF52AD"]]), "TOUCHE")
        .appendTitle("de la télécommande")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/telec2.jpg", 64, 64))
        //.appendTitle(" sur la broche ")
        //.appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("a été appuyée ?");        
    this.setOutput(true, Boolean);
    this.setTooltip('Teste si une touche de la télécommande a été appuyée (réf : IRF1 + TELEC2)');
  }
};

Blockly.Language.technozone_telec1 = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:telec1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("la touche")
        .appendTitle(new Blockly.FieldDropdown([["ON/OFF", "FFA25D"], ["MODE", "FF629D"], ["MUTE", "FFE21D"], ["PREVIOUS", "FF22DD"], ["NEXT", "FF02FD"], ["PLAY/PAUSE", "FFC23D"],
         ["MINUS", "FFE1F"], ["PLUS", "FFA857"], ["EQ", "FF906F"], ["0", "FF6897"], ["100+", "FF9867"], ["RETURN", "FFB04F"], ["1", "FF30CF"], ["2", "FF18E7"],
          ["3", "FF7A85"], ["4", "FF10EF"], ["5", "FF38C7"], ["6", "FF5AA5"], ["7", "FF42BD"], ["8", "FF4AB5"], ["9", "FF52AD"]]), "TOUCHE")
        .appendTitle("de la télécommande")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/telec1.jpg", 64, 64))
        //.appendTitle(" sur la broche ")
        //.appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("a été appuyée ?");        
    this.setOutput(true, Boolean);
    this.setTooltip('Teste si une touche de la télécommande a été appuyée (réf : IRF1 + TELEC1)');
  }
};

Blockly.Language.technozone_telecsetup = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle("initialise la télécommande")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Initialise la télécommande (réf : IRF1 + (TELEC1 ou TELEC2))');
  }
};

Blockly.Language.technozone_telecinit = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("une touche de la télécommande a été appuyée ?")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64));
    this.setOutput(true, Boolean);
    this.setTooltip('Teste si une touche de la télécommande a été appuyée (réf : IRF1)');
  }
};

Blockly.Language.technozone_telecflush = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("vide le tampon de réception de la télécommande")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Vide le tampon de réception de la télécommande (réf :IRF1)");
  }
};

Blockly.Language.technozone_mot1easybot1 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:easybot1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("commande le")
        .appendTitle(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendTitle("sur la carte EASYBOT1")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/easybot.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/kitmot1.jpg", 64, 64));
    this.appendValueInput("SENS", Boolean)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sens horaire (VRAI ou FAUX ?)");
    this.appendValueInput("VITESSE", Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("vitesse [0~255]");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Commande de deux moteurs CC sur EASYBOT1 (réf : EASYBOT1 + KIT-MOT1)');
  }
};

Blockly.Language.technozone_mot1easycon1 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:easybot1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("commande le")
        .appendTitle(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendTitle("sur la carte EASYBOT1")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/easycon1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/kitmot1.jpg", 64, 64));
    this.appendValueInput("SENS", Boolean)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sens horaire (VRAI ou FAUX ?)");
    this.appendValueInput("VITESSE", Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("vitesse [0~255]");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Commande de deux moteurs CC sur EASYCON1 (réf : EASYCON1 + KIT-MOT1)');
  }
};

Blockly.Language.technozone_lcdinit = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle("initialise l'écran LCD")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64))
        .appendTitle("à l'adresse I2C")
        .appendTitle(new Blockly.FieldDropdown([["39", "39"], ["63", "63"]]),"I2C_adress");
    this.appendDummyInput("")    
        .appendTitle("nombre de colonne(s)")
        .appendTitle(new Blockly.FieldTextInput('16',Blockly.Language.math_number.validator), 'nbcol');
    this.appendDummyInput("")    
        .appendTitle("nombre de ligne(s)")
        .appendTitle(new Blockly.FieldTextInput('2',Blockly.Language.math_number.validator), 'nblig');   
    this.appendDummyInput("")    
        .appendTitle("active le rétro-éclairage ?")     
        .appendTitle(new Blockly.FieldCheckbox('TRUE'), 'backlight');   
    this.appendDummyInput("")    
        .appendTitle("active le curseur ?")     
        .appendTitle(new Blockly.FieldCheckbox('FALSE'), 'cursor'); 
    this.appendDummyInput("")    
        .appendTitle("faire clignoter le curseur ?")     
        .appendTitle(new Blockly.FieldCheckbox('FALSE'), 'blink');          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Initialise l'écran LCD sur le bus I2C (réf : LCD1)");
  }
};

Blockly.Language.technozone_lcdspecial = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("fonctions spéciales de l'écran LCD")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldDropdown([["active le rétroéclairage", "backlight"], ["désactive le rétroéclairage", "noBacklight"],["active le curseur", "cursor"],["désactive le curseur", "noCursor"],["faire clignoter le curseur", "blink"],["arrête le clignotement du curseur", "noBlink"],["active l'affichage", "display"],["désactive l'affichage", "noDisplay"]]),"special");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Fonction spéciales de l'écran LCD (réf : LCD1)");
  }
};

Blockly.Language.technozone_lcdclear = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("efface l'écran LCD")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Efface l'écran LCD sur le bus I2C (réf : LCD1)");
  }
};

Blockly.Language.technozone_lcdwrite = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("écrire sur l'écran LCD")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64))
        .appendTitle("à partir de la position");
    this.appendDummyInput("")    
        .appendTitle("colonne [0..MAXCOL-1]")
        .appendTitle(new Blockly.FieldTextInput('0',Blockly.Language.math_number.validator), 'COL');  
    this.appendDummyInput("")    
        .appendTitle("ligne [0..MAXLIG-1]")
        .appendTitle(new Blockly.FieldTextInput('0',Blockly.Language.math_number.validator), 'LIG');      
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("le texte");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Ecrire sur l'écran LCD (réf : LCD1)");
  }
};

Blockly.Language.technozone_led1red = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([["allume", "HIGH"], ["éteint", "LOW"]]), "STAT")
        .appendTitle("la DEL")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1red.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie led rouge (réf : LED1-RED)');
  }
};

Blockly.Language.technozone_led1green = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([["allume", "HIGH"], ["éteint", "LOW"]]), "STAT")
        .appendTitle("la DEL")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1green.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie led verte (réf : LED1-GREEN)');
  }
};

Blockly.Language.technozone_led1yellow = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([["allume", "HIGH"], ["éteint", "LOW"]]), "STAT")
        .appendTitle("la DEL")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1yellow.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie led jaune (réf : LED1-YELLOW)');
  }
};

Blockly.Language.technozone_relay1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:relay1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("mettre le relais")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/relay1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("à l'état")
        .appendTitle(new Blockly.FieldDropdown([["activé", "LOW"], ["désactivé", "HIGH"]]), "STAT"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Relais de puissance (réf : RELAY1)');
  }
};

Blockly.Language.technozone_buzzer1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		.appendTitle("émettre un son")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/buzzer1.jpg", 64, 64))
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
    this.setTooltip('Sortie Buzzer (réf : LED1-BUZZER1)');
  }
};

Blockly.Language.technozone_sonar1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:sonar1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
	      .appendTitle("la distance mesurée (cm)")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/sonar1.jpg", 64, 64))
    this.appendDummyInput("")
	      .appendTitle("TRIG est sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "TRIGER")
    this.appendDummyInput("")
        .appendTitle("DIST est sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "DIST");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Sonar Ultrasonore (réf : SONAR1)');
  }
};

Blockly.Language.technozone_servo1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("positionne le servo-moteur")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servo1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servomoteur1.jpg", 64, 64))
        .appendTitle("de la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("DEGREE", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sur l'angle [0~180°]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Servo-moteur (réf : SERVO1 + SERVO-MOT1)');
  }
};

Blockly.Language.technozone_btn1white = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("l'état du bouton")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1white.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Language.technozone_btn1black = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("l'état du bouton")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1black.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée bouton noir (réf : BTN1-BLACK)');
  }
};

Blockly.Language.technozone_btn1green = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("l'état du bouton")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1green.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée bouton vert (réf : BTN1-GREEN)');
  }
};

Blockly.Language.technozone_btn1red = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("l'état du bouton")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1red.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée bouton rouge (réf : BTN1-RED)');
  }
};

Blockly.Language.technozone_switch1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:switch1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("l'état du fin de course")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/switch1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Fin de course (réf : SWITCH1 ou SWITCH2)');
  }
};

Blockly.Language.technozone_ils1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ils1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("la détection")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ils1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("d'un champ magnétique");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Capteur Magnétique (réf : ILS1)');
  }
};

Blockly.Language.technozone_proxi1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:proxi1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("la détection d'un obstacle à proximité")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/proxi1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Détecteur de Proximité (réf : PROXI1)');
  }
};

Blockly.Language.technozone_bari1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:bari1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("la détection d'un obstacle par la barrière infra-rouge")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/bari1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Barrière Infrarouge (réf : BARI1)');
  }
};

Blockly.Language.technozone_lig1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lig1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("l'état du capteur")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lig1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("de suivi de ligne");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Détecteur de ligne (réf : LIG1)');
  }
};

Blockly.Language.technozone_cmouv1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:cmouv1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("la détection d'une présence")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servo1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/cmouv1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('Entrée Détecteur de Présence (réf : SERVO1 + CMOUV1)');
  }
};

Blockly.Language.technozone_potar1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:potar1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle("la position du potentiomètre")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/potar1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, Number);
    this.setTooltip('Entrée potentiomètre (réf : POTAR1)');
  }
};

Blockly.Language.technozone_ctn1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ctn1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle("la température (°C) lue")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ctn1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
    this.setOutput(true, Number);
    this.setTooltip('Entrée Capteur de Température (réf : CTN1)');
  }
};

Blockly.Language.technozone_ldr1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ldr1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle("la luminosité (Lux) lue")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ldr1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
    this.setOutput(true, Number);
    this.setTooltip('Entrée Capteur de Luminosité (réf : LDR1)');
  }
};

Blockly.Arduino.technozone_lcdinit = function() {
  var dropdown_I2C_adress = this.getTitleValue('I2C_adress');
  var dropdown_nbcol = this.getTitleValue('nbcol');
  var dropdown_nblig = this.getTitleValue('nblig');
  var dropdown_cursor = this.getTitleValue('cursor');
  var dropdown_blink = this.getTitleValue('blink');
  var dropdown_backlight = this.getTitleValue('backlight');
  Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['define_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>\n';
  Blockly.Arduino.definitions_['var_lcd'] = 'LiquidCrystal_I2C lcd('+dropdown_I2C_adress+','+dropdown_nbcol+','+dropdown_nblig+');\n';
  var mysetup='lcd.init();\n';
  if (dropdown_backlight=="TRUE")
  {
    mysetup+='lcd.backlight();\n';
  } else
  {
    mysetup+='lcd.noBacklight();\n';
  }
  if (dropdown_cursor=="TRUE")
  {
    mysetup+='lcd.cursor();\n';
  } else
  {
    mysetup+='lcd.noCursor();\n';
  }
  if (dropdown_blink=="TRUE")
  {
    mysetup+='lcd.blink();\n';
  } else
  {
    mysetup+='lcd.noBlink();\n';
  }
  Blockly.Arduino.setups_['setup_lcd'] = mysetup;
  var code="";
  return code;
};

Blockly.Arduino.technozone_lcdspecial = function() {
  var dropdown_special = this.getTitleValue('special');
  var code="lcd."+dropdown_special+"();\n";
  return code;
};

Blockly.Arduino.technozone_lcdclear = function() {
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino.technozone_lcdwrite = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var dropdown_col = this.getTitleValue('COL');
  var dropdown_lig = this.getTitleValue('LIG');    
  var code = 'lcd.setCursor('+dropdown_col+','+dropdown_lig+');\n'+
  'lcd.print('+text+');\n';
  return code;
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
  var code = 'round(1517.288685*exp(-64.822510*analogRead('+dropdown_pin+')/10000))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_mot2 = function() {
  var dropdown_pindir = this.getTitleValue('PINDIR');
  var dropdown_pinpwm = this.getTitleValue('PINPWM');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_["setup_mot2_"+dropdown_pindir] = "pinMode("+dropdown_pindir+",OUTPUT);//MOT2 DIR pin\n"+
  "  pinMode("+dropdown_pinpwm+",OUTPUT);//MOT2 PWM pin\n";
  var code = ""; 
  Blockly.Arduino.definitions_['define_cmd_mot'] = "void cmd_mot(byte dirpin,byte pwmpin,boolean sens,byte vitesse)\n"+
    "{\n"+
    "  digitalWrite(dirpin,sens);\n"+
    "  analogWrite(pwmpin,vitesse);\n"+
    "}\n";
  code="cmd_mot("+dropdown_pindir+","+dropdown_pinpwm+","+value_sens+","+value_vitesse+");\n";
  return code;
};

Blockly.Arduino.technozone_pap1cc = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var dropdown_moteur = this.getTitleValue('MOT');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  if (dropdown_moteur=='HIGH') 
  {
    //moteur A
    if (value_sens=="(true)") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirA(CW);      //set Motor A Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirA(CCW);      //set Motor A Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedA('+value_vitesse+');     //Set Motor A speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(CC);   //Enter in Continuous mode, Motor run as previously set\n';
  } else
  {
    //moteur B
    if (value_sens=="(true)") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirB(CW);      //set Motor B Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirB(CCW);      //set Motor B Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedB('+value_vitesse+');     //Set Motor B speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(CC);   //Enter in Continuous mode, Motor run as previously set\n';
  }
  return code;
};

Blockly.Arduino.technozone_pap1relatif = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var dropdown_moteur = this.getTitleValue('MOT');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var value_pas = Blockly.Arduino.valueToCode(this, 'PAS', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  if (dropdown_moteur=='HIGH') 
  {
    //moteur A
    if (value_sens=="(true)") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirA(CW);      //set Motor A Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirA(CCW);      //set Motor A Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedA('+value_vitesse+');     //Set Motor A speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.StepA('+value_pas+');         //Set step number for motor A \n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(RELATIVE);   //Enter in Relative mode, Motor run as previously set\n';
  } else
  {
    //moteur B
    if (value_sens=="(true)") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirB(CW);      //set Motor B Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirB(CCW);      //set Motor B Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedB('+value_vitesse+');     //Set Motor B speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.StepB('+value_pas+');         //Set step number for motor B \n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(RELATIVE);   //Enter in Relative mode, Motor run as previously set\n';
  }
  return code;
};

Blockly.Arduino.technozone_pap1init = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var dropdown_mode = this.getTitleValue('MODE');
  var dropdown_relax = this.getTitleValue('RELAX');
  Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['define_Pap1'] = '#include <Pap1.h>\n';
  Blockly.Arduino.definitions_['define_MyStepper_'+dropdown_i2cadd] = 'Pap1 MyStepper_'+dropdown_i2cadd+'(16);\n';
  Blockly.Arduino.setups_["setup_wire_begin"+dropdown_i2cadd] = "Wire.begin(); // join i2c bus before calling the stepper constructor";
  Blockly.Arduino.setups_["setup_pap1_"+dropdown_i2cadd] = "MyStepper_"+dropdown_i2cadd+".Begin("+dropdown_mode+","+dropdown_relax+");\n"+
  'MyStepper_'+dropdown_i2cadd+'.SetMode(IDLE); //Motor stopped by default\n'+
  'MyStepper_'+dropdown_i2cadd+'.SpeedA(0);     //Motor A speed to 0\n'+
  'MyStepper_'+dropdown_i2cadd+'.SpeedB(0);     //Motor B speed to 0\n'+
  'MyStepper_'+dropdown_i2cadd+'.SetMode(CC);   //Enter in Continious Current Mode\n';
  var code = ""; 
  return code;
};

Blockly.Arduino.technozone_pap1busy = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var code = ""; 
  code='MyStepper_'+dropdown_i2cadd+'.Busy()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_mot1easybot1 = function() {
  var dropdown_mot = this.getTitleValue('MOT');
  var dropdown_pindir; 
  var dropdown_pinpwm;
  if (dropdown_mot==="HIGH") {
   //moteur A
   dropdown_pindir=12;
   dropdown_pinpwm=5;
  } else {
   //moteur B
   dropdown_pindir=13;
   dropdown_pinpwm=6;
  }
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_["setup_mot1_"+dropdown_pindir] = "pinMode("+dropdown_pindir+",OUTPUT);//MOT2 DIR pin\n"+
  "  pinMode("+dropdown_pinpwm+",OUTPUT);//MOT2 PWM pin\n";
  var code = "";
  Blockly.Arduino.definitions_['define_cmd_mot'] = "void cmd_mot(byte dirpin,byte pwmpin,boolean sens,byte vitesse)\n"+
    "{\n"+
    "  digitalWrite(dirpin,sens);\n"+
    "  analogWrite(pwmpin,vitesse);\n"+
    "}\n";
  code="cmd_mot("+dropdown_pindir+","+dropdown_pinpwm+","+value_sens+","+value_vitesse+");\n";
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};


Blockly.Arduino.technozone_mot1easycon1 = function() {
  var dropdown_mot = this.getTitleValue('MOT');
  var dropdown_pindir; 
  var dropdown_pinpwm;
  if (dropdown_mot==="HIGH") {
   //moteur A
   dropdown_pindir=52;
   dropdown_pinpwm=13;
  } else {
   //moteur B
   dropdown_pindir=53;
   dropdown_pinpwm=12;
  }
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_["setup_mot1_"+dropdown_pindir] = "pinMode("+dropdown_pindir+",OUTPUT);//MOT2 DIR pin\n"+
  "  pinMode("+dropdown_pinpwm+",OUTPUT);//MOT2 PWM pin\n";
  var code = "";
  Blockly.Arduino.definitions_['define_cmd_mot'] = "void cmd_mot(byte dirpin,byte pwmpin,boolean sens,byte vitesse)\n"+
    "{\n"+
    "  digitalWrite(dirpin,sens);\n"+
    "  analogWrite(pwmpin,vitesse);\n"+
    "}\n";
  code="cmd_mot("+dropdown_pindir+","+dropdown_pinpwm+","+value_sens+","+value_vitesse+");\n";
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};

Blockly.Arduino.technozone_telec2 = function() {
  //var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_touche = this.getTitleValue('TOUCHE');
  var code = ""; 
  code='IRkey("'+dropdown_touche+'")';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_telecsetup = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = ""; 
    Blockly.Arduino.setups_["setup_telec2_"+dropdown_pin] = "pinMode("+dropdown_pin+",INPUT);//IR télécommande pin\n"+
  '  IRrecv irrecv('+dropdown_pin+');\n'+
  '  irrecv.enableIRIn();\n'+
  '  irrecv.resume();\n';
  Blockly.Arduino.definitions_['define_IRkeypressed'] ='boolean IRkeypressed()\n'+
  '{\n'+
  '  if (irrecv.decode(&results)) {return true;} else {return false;}\n'+
  '}'; 
  Blockly.Arduino.definitions_['define_telec'] = '#include <IRremote.h>\n'+
  '//Déclaration de la broche utilisée pour le récepteur infrarouge\n'+
  'int RECV_PIN = '+dropdown_pin+'; //Broche du récepteur Infrarouge\n'+
  'IRrecv irrecv(RECV_PIN);\n'+
  'decode_results results;\n'; 
  Blockly.Arduino.definitions_['define_IRkey'] ='boolean IRkey(String thekey)\n'+
  '{\n'+
  'if (irrecv.decode(&results))\n'+
  '  {\n'+
  '    //Une touche dans le tampon\n'+
  '    String s=String(long(results.value), HEX);\n'+
  '    s.toUpperCase();\n'+
  '    if (s.equals(thekey))\n'+ 
  '    {\n'+
  '      irrecv.resume(); //vide le tampon de la télécommande\n'+
  '      return true;\n'+
  '    } else {return false;}\n'+
  '  } else {return false;}\n'+
  ' }\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_telec1= function() {
  //var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_touche = this.getTitleValue('TOUCHE');
  var code = ""; 
  code='IRkey("'+dropdown_touche+'")';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_telecinit = function() {
  var code = ""; 
  code='IRkeypressed()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_telecflush = function() {
  var code='irrecv.resume(); //vide le tampon de la télécommande\n';
  return code;
};