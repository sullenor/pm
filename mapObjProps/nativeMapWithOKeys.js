'use strict';

module.exports = map;

function map(c, f) {
  return Object.keys(c).map(key => f(c[key]));
}
