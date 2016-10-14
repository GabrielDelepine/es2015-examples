'use strict';

import { aConstantInModuleA, aFunctionInModuleA as functionModuleA } from './module_a.js';
console.info('aConstantInModuleA = ', aConstantInModuleA);
console.info('functionModuleA = ', functionModuleA);

console.log('');

import * as moduleB from './module_b.js';
console.info('moduleB = ', moduleB);

console.log('');

import aClassInModuleC from './module_c.js';
console.info('aClassInModuleC = ', aClassInModuleC);

console.log('');

import * as moduleD from './module_d.js';
console.info('moduleD = ', moduleD);

console.log('');