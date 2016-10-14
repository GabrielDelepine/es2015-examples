'use strict';

/*
 * Example 1
 */
function api(success, error) {

    setTimeout(() => {

        success({
            list_id: 5878,
            subject: 'Sapin de noël pas cher',
        });
    }, 500);

}

function brokenApi(success, error) {

    setTimeout(() => {

        success({
            subject: 'Sapin de noël pas cher',
        });
    }, 500);

}
function timeoutApi(success, error) {

    setTimeout(() => {

        error('api timeout');
    }, 500);

}

function fetch(fn) {

    return new Promise((resolve, reject) => {

        fn( // success
            function (response) {

                if (response.list_id) {
                    resolve(response);
                } else {
                    reject('Error : no list_id');
                }
            },
            // error
            function (reason) {

                reject(reason);
            });

    });
}


fetch(api)
    .then(function(response) {

        console.info(`list_id = ${response.list_id}`);
    })
    .catch(function(reason) {

        console.warn(`API return an error : ${reason}`)
    });

fetch(brokenApi)
    .then(function(response) {

        console.info(`list_id = ${response.list_id}`);
    })
    .catch(function(reason) {

        console.warn(`API return an error : ${reason}`)
    });

fetch(timeoutApi)
    .then(function(response) {

        console.info(`list_id = ${response.list_id}`);
    })
    .catch(function(reason) {

        console.warn(`API return an error : ${reason}`)
    });

/*
 * Example 2
 */
function giveMeAnAnswer() {

    return new Promise((resolve, reject) => {

        let answer = prompt('Tell me `yes`');
        if ('yes' === answer) {
            resolve();
        } else {
            reject();
        }
    });
}

giveMeAnAnswer()
    .then(function() {
        console.info('ANSWER CORRECT !');
    })
    .catch(function() {
        console.warn('ANSWER NOT CORRECT !');
    });