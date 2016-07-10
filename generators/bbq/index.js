'use strict';

const generators                  = require('yeoman-generator');


class Generator extends generators.Base {

  get default() {
    return {
      output: function() {
        this.log('Let\'s BBQ');
      }
    }
  }
  
}

module.exports = Generator;
