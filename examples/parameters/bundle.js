'use strict';

// Example 1
{
    function addTwoNumbers(x=0, y=0) {
        return x + y;
    }
    console.info('Example 1 : ', addTwoNumbers());
}

// Example 2
{
    function logArguments(...args) {
        return args;
    }
    console.info('Example 2 : ', logArguments('A', 'B', 'C'));
}

// Example 3
{
    function initializeCanvas({ height=600, width=400, lineStroke='black'} = {}) {
        return lineStroke;
    }
    console.info('Example 3 : ', initializeCanvas({ height: 300, width: 200 }));
}