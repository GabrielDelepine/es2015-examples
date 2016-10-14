'use strict';

function aFunctionInModuleD() {
    console.info('aFunctionInModuleD');
}

const aConstantInModuleD = 'aFunctionInModuleD';

class aClassInModuleD {
    constructor() {
        this.name = 'aDlassInModuleD';
    }
}

export { aFunctionInModuleD, aConstantInModuleD, aClassInModuleD };
export default aClassInModuleD;