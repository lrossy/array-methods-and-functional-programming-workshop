function forEach(callback, theArray) {
    for (var i = 0; i < theArray.length; i++) {
        callback(theArray[i], i);
    }
}
function map(mappingFunction, theArray) {

    var newArray = [];

    forEach(function(item, idx){
        newArray.push(mappingFunction(item));
    }, theArray);

    return newArray;
}

function multiplyByTwo(x) {
    return x * 2;
}

function isEven(x) {
    return x % 2 === 0;
}

var values = [1,10,15,16];
var evenValues = filter(isEven, values); // [10,16]

function filter(predicate, theArray) {
    var newArray = [];

    forEach(function(item, idx){
        if(predicate(item)){
            newArray.push(item);
        }
    }, theArray);

    return newArray;
}

function every(predicate, theArray) {

    if(theArray.length === 0) return true;

    for(var i = 0; i < theArray.length; i++){
        console.log(theArray[i]);
        if(!predicate(theArray[i])){
            return false;
        }
    }
    return true;
}

function some(predicate, theArray) {

    for(var i = 0; i < theArray.length; i++){
        console.log(theArray[i]);
        if(predicate(theArray[i])){
            return true;
        }
    }
    return false;
}

// var values = [1,12,13,15];
// var evenValues = some(isEven, values); // [10,16]
//
// console.log(evenValues);


// var fruits = ['orange', 'apple', 'banana', 'apple'];
//
//
// console.log(indexOf('apple', fruits));
// console.log(indexOf('pineapple', fruits));
// console.log(indexOf('anything', []));
function indexOf(item, theArray) {

    for(var i = 0; i < theArray.length; i++){

        if(item === theArray[i]){
            return i;
        }
    }
    return -1;
}

var pets = [
    {id: 33, name: 'popcorn', species: 'dog3'},
    {id: 46, name: 'purrito', species: 'cat'},
    {id: 47, name: 'bob', species: 'fish'},
    {id: 49, name: 'nacho', species: 'dog'}
];

function isDog(item) {
    return item.species === 'dog';
}

var firstDogIndex = findIndex(isDog, pets);

// console.log(pets[firstDogIndex]);
function findIndex(predicate, theArray) {
    for(var i = 0; i < theArray.length; i++){

        if(predicate(theArray[i])){
            return i;
        }
    }
    return -1;
}

function first(n, theArray) {

}

function last(n, theArray) {

}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}
function isEven(num) {
    return num % 2 === 0;
}

// var isOdd = negate1(isEven); // function that returns the opposite of isEven for the same input
//
//
// console.log(isEven(3));
// console.log(isOdd(3));
function negate1(predicate) {
    return function(x) {
        return !predicate(x)
    }
}

function firstDividesSecond(first, second) {
    console.log('firstDividesSecond',first, second);
    console.log('firstDividesSecond',second % first === 0);
    return second % first === 0;
}

var firstDoesNotDivideSecond = negate2(firstDividesSecond);

console.log(firstDoesNotDivideSecond(5,10));

function negate2(predicate) {
    return function() {
        return !predicate.apply(undefined, arguments)
    };
}



// function scream(str) {
//     return str.toUpperCase();
// }
// function shout(str) {
//     return str + '!!!';
// }

// var screamAndShout = compose1(shout, scream);
//
// console.log(screamAndShout('Hello World'));

function compose1(fun1, fun2) {

    return function(x){
        console.log('x',x);
        return fun1(fun2(x));
    }
}

// // Takes a string, returns a string
// function toLowerCase(str) {
//     return str.toLowerCase();
// }
// // Takes a string, returns an array
// function splitByWord(str) {
//     return str.split(' ');
// }
// // Takes an array, returns a string
// function joinWithDashes(arrOfWords) {
//     return arrOfWords.join('-');
// }
//
// // Takes a string, returns a string by doing toLowerCase -> splitByWord -> joinWithDashes
// var createSlug = compose2([joinWithDashes, splitByWord, toLowerCase]);
//
// ; // the-quick-brown-fox
//  console.log(createSlug('The Quick Brown Fox'));

function compose2(arrOfFuncs) {

    return function(x){
        // console.log('x',x);
        var val = x;
        for(var i=arrOfFuncs.length-1; i >= 0; i--){
            val = arrOfFuncs[i](val);
        }
        return val;
    }
}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
