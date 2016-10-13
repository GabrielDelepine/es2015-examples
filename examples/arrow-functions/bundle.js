'use strict';

console.info('1) At this point, (`this` === window) === ', this === window);
console.log(this);
console.log(''); // Make a line break to be more readable

var brendon = {
    name: "Brendon",
    helloES6: () => {
        console.log(this);
        console.log(''); // Make a line break to be more readable
    },
    helloES5: function() {
        'use strict';
        console.log(this);
        console.log(''); // Make a line break to be more readable
    },
};

console.info('2) Hello ES5 syntax. `this` = ');
brendon.helloES5();

console.info('3) Hello ES6 arrow function syntax. `this` = ');
brendon.helloES6();

console.info('4) Hello ES6 arrow function syntax, BINDED with `brendon`. `this` = ');
brendon.helloES6.bind({ front_is_the_best: 'correct' })();

class Brenda {
    constructor() {
        this.name = 'Brenda';
        this.helloES6 = () => {
            console.log(this);
            console.log(''); // Make a line break to be more readable
        }
    }

    helloES5() {
        console.log(this);
        console.log(''); // Make a line break to be more readable
    }
}

var brenda = new Brenda();

console.info('5) Hello ES5 syntax IN A CLASS INSTANCE. `this` = ');
brenda.helloES5();

console.info('6) Hello ES6 arrow function syntax IN A CLASS INSTANCE. `this` = ');
brenda.helloES6();

console.info('7) Hello ES5 syntax IN A CLASS INSTANCE AND BINDED. `this` = ');
brenda.helloES5.bind({ front_is_the_best: 'correct' })();

console.info('8) Hello ES6 arrow function syntax IN A CLASS INSTANCE AND BINDED. `this` = ');
brenda.helloES6.bind({ front_is_the_best: 'correct' })();

var elmES5 = document.createElement('DIV');
elmES5.innerHTML = 'Call hello ES5 syntax';
elmES5.style.border = '1px solid red';
elmES5.style.margin = '10px';
elmES5.onclick = brendon.helloES5;
document.body.appendChild(elmES5);

var elmES6 = document.createElement('DIV');
elmES6.innerHTML = 'Call hello ES6 syntax';
elmES6.style.border = '1px solid red';
elmES6.style.margin = '10px';
elmES6.onclick = brendon.helloES6;
document.body.appendChild(elmES6);

var elmES6ClassInstance = document.createElement('DIV');
elmES6ClassInstance.innerHTML = 'Call hello ES5 syntax IN A CLASS INSTANCE';
elmES6ClassInstance.style.border = '1px solid red';
elmES6ClassInstance.style.margin = '10px';
elmES6ClassInstance.onclick = brenda.helloES5;
document.body.appendChild(elmES6ClassInstance);

var elmES6ClassInstance = document.createElement('DIV');
elmES6ClassInstance.innerHTML = 'Call hello ES6 syntax IN A CLASS INSTANCE';
elmES6ClassInstance.style.border = '1px solid red';
elmES6ClassInstance.style.margin = '10px';
elmES6ClassInstance.onclick = brenda.helloES6;
document.body.appendChild(elmES6ClassInstance);
