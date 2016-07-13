'use strict';

const { identity, map, range } = require('lodash');
const { Suite } = require('benchmark');

const collection = range(500);

new Suite()
  .on('cycle', event => console.log(String(event.target)))
  .add('[].forEach', () => collection.map(identity))
  .add('_.forEach', () => map(collection, identity))
  .add('improved native for-loop', () => nativeForLoop(collection, identity))
  .run();

function nativeForLoop(collection, iteratee) {
  const nextCollection = new Array(collection.length);

  for (var i = collection.length - 1; i >= 0; i--) {
    nextCollection[i] = identity(collection[i]);
  }

  return nextCollection;
}
