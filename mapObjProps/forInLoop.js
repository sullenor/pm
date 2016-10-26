'use strict';

module.exports = map;

function map(c, f) {
  const nC = [];

  for (var key in c)
    if (c.hasOwnProperty(key)) nC.push(f(c[key]));
  return nC;
}
