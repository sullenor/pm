'use strict';

module.exports = map;

function map(c, f) {
  const length = c.length;
  const nC = Array(length);
  var i = -1;

  while (++i < length) nC[i] = f(c[i]);
  return nC;
}
