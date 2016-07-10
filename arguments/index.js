'use strict';

const { Suite } = require('benchmark');

new Suite()
  .on('cycle', event => console.log(String(event.target)))
  .add('spread operator', () => nativeSpread(0, 1, 2, 3, 4, 5, 6, 7, 8, 9))
  .add('improved native for-loop', () => nativeForLoop(0, 1, 2, 3, 4, 5, 6, 7, 8, 9))
  .run();

function nativeSpread(...args) {
  return args;
}

function nativeForLoop() {
  const args = new Array(arguments.length);

  for (var i = arguments.length - 1; i >= 0; i--) {
    args[i] = arguments[i];
  }

  return args;
}
