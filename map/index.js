'use strict';

const { Suite } = require('benchmark');
const { identity, range } = require('lodash');
const forLoop = require('./forLoop');
const lodashMap = require('./lodashMap');
const nativeMap = require('./nativeMap');
const whileLoop = require('./whileLoop');

const collection = range(200);

Suite().on('cycle', e => console.log(String(e.target)))
.add('[].map', () => nativeMap(collection, identity))
.add('_.map', () => lodashMap(collection, identity))
.add('for-loop', () => forLoop(collection, identity))
.add('while-loop', () => whileLoop(collection, identity))
.run();
