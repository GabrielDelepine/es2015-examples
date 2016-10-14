'use strict';

function aFunctionInModuleA() {
    console.info('aFunctionInModuleA');
}

const aConstantInModuleA = 'value_of_aConstantInModuleA';

class aClassInModuleA {
    constructor() {
        this.name = 'aClassInModuleA';
    }
}

export { aFunctionInModuleA, aConstantInModuleA, aClassInModuleA };