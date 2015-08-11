/*jshint node:true */

'use strict';

var forOwn = require('for-own');

module.exports = function presetFactory(data) {
  var presets = {};

  forOwn(data.conversions, function addPreset(preset, unit) {
    presets[data.base + '_' + unit] = preset;
  });

  return presets;
};
