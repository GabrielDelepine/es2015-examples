'use strict';

// Example 1
{

    var snack = 'Meow Mix';

    function getFood(food) {
        if (food) {
            var snack = 'Friskies';
            return snack;
        }
        return snack;
    }

    console.info('Example 1 : ', getFood(false));
}

// Example 2
{
    var snack = 'Meow Mix';

    function getFood(food) {
        var snack;

        if (food) {
            snack = 'Friskies';
            return snack;
        }
        return snack;
    }

    console.info('Example 2 : ', getFood(false));
}

// Example 3
{
    let snack = 'Meow Mix';

    function getFood(food) {

        if (food) {
            let snack = 'Friskies';
            return snack;
        }
        return snack;
    }

    console.info('Example 3 : ', getFood(false));
}

// Example 4
{
    let snack = 'Meow Mix';

    function getFood(food) {

        if (food) {
            let snack = 'Friskies';
            return snack;
        }
        return snack;
    }

    console.info('Example 4 : ', getFood(false));
}