# linear-preset-factory

[![Build Status](https://travis-ci.org/javiercejudo/linear-preset-factory.svg)](https://travis-ci.org/javiercejudo/linear-preset-factory)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/linear-preset-factory/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/linear-preset-factory?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/linear-preset-factory/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/linear-preset-factory)

Linear presets for temperature units

## Install

    npm i linear-preset-factory

## Usage

```js
require('linear-preset-factory')({
  base: 'a',
  conversions: {
    a: [[0, 1], [0, 1]],
    b: [[1, 2], [3, 4]],
    c: [[0, -5], [0, 30]]
  }
});
// =>
// {
//   a_a: [[0, 1], [0, 1]],
//   a_b: [[1, 2], [3, 4]],
//   a_c: [[0, -5], [0, 30]]
// }
```

## Related projects

- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.
