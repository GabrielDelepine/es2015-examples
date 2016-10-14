'use strict';

//Example 1
{
    var luke = { occupation: 'jedi', father: 'anakin' };
    var {occupation, father} = luke;
    console.log('Example 1 | occupation = ', occupation); // 'jedi'
    console.log('Example 1 | father     = ', father); // 'anakin'
}

// Example 2
{
    var [a, b] = [10, 20]
    console.log('Example 2 | a = ', a); // 10
    console.log('Example 2 | b = ', b); // 20
}