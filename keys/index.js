'use strict';

const { invert, keys, range } = require('lodash');
const { Suite } = require('benchmark');

const collection = invert(range(50));

new Suite()
  .on('cycle', event => console.log(String(event.target)))
  .add('Object.keys', () => objectKeys(collection))
  .add('_.keys', () => keys(collection))
  .add('for-loop', () => forLoop(collection))
  .run();

function objectKeys(collection) {
  return Object.keys(collection);
}

function forLoop(collection) {
  const keys = [];
  for (var key in collection) {
    keys.push(key);
  }

  return keys;
}
