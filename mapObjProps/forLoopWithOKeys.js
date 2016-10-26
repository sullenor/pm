'use strict';

module.exports = map;

function map(c, f) {
  const keys = Object.keys(c);
  const length = keys.length;
  const nC = Array(keys.length);

  for (var i = 0; i < length; ++i) nC[i] = f(c[keys[i]]);
  return nC;
}
