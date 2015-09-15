/*jshint node:true */

'use strict';

module.exports = function presetFactory(data) {
  var presets = {};

  Object.keys(data.conversions).forEach(function addPreset(unit) {
    var preset = data.conversions[unit];

    presets[data.base + '_' + unit] = preset;
  });

  return presets;
};
