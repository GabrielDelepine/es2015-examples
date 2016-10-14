'use strict';

function aFunctionInModuleC() {
    console.info('aFunctionInModuleC');
}

const aConstantInModuleC = 'aFunctionInModuleC';

class aClassInModuleC {
    constructor() {
        this.name = 'aClassInModuleC';
    }
}

export { aFunctionInModuleC, aConstantInModuleC, aClassInModuleC };
export default aClassInModuleC;