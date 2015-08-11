/*jshint node:true, mocha:true */

'use strict';

require('should');

var presetFactory = require('../src/linear-preset-factory');

describe('linear preset factory', function() {
  it('should create linear presets', function() {
    presetFactory({
      base: 'a',
      conversions: {
        a: [[0, 1], [0, 1]],
        b: [[1, 2], [3, 4]],
        c: [[0, -5], [0, 30]]
      }
    }).should.eql({
      a_a: [[0, 1], [0, 1]],
      a_b: [[1, 2], [3, 4]],
      a_c: [[0, -5], [0, 30]]
    })
  });
});
