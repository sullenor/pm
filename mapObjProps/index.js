'use strict';

const { Suite } = require('benchmark');
const { identity, invert, range } = require('lodash');
const forInLoop = require('./forInLoop');
const forLoopWithOKeys = require('./forLoopWithOKeys');
const lodashMap = require('./lodashMap');
const nativeMapWithOKeys = require('./nativeMapWithOKeys');

const collection = invert(range(200));

Suite().on('cycle', e => console.log(String(e.target)))
.add('_.map', () => lodashMap(collection, identity))
.add('for-in-loop', () => forInLoop(collection, identity))
.add('for-loop + Object.keys', () => forLoopWithOKeys(collection, identity))
.add('[].map + Object.keys', () => nativeMapWithOKeys(collection, identity))
.run();
