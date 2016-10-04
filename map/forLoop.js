'use strict';

module.exports = map;

function map(c, f) {
  const length = c.length;
  const nC = Array(length);

  for (var i = 0; i < length; ++i) nC[i] = f(c[i]);
  return nC;
}
