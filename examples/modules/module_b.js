'use strict';

function aFunctionInModuleB() {
    console.info('aFunctionInModuleC');
}

const aConstantInModuleB = 'aFunctionInModuleB';

class aClassInModuleB {
    constructor() {
        this.name = 'aClassInModuleB';
    }
}

export { aFunctionInModuleB, aConstantInModuleB, aClassInModuleB };