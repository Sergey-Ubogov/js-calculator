'use strict';
 
var fs = require('fs');
 
function calculate(func, num) {
    if (!func) {
        return num;
    } else {
        return func(num);
    }
}

var numbers = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
           'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9}
Object.keys(numbers).forEach(key => {
    global[key] = func => calculate(func, numbers[key]);
});

var operators = {
    'plus': b => a => a+b,
    'minus': b => a => a-b,
    'mul': b => a => a*b,
    'del': b => a => a/b,
    'pow': b => a => Math.pow(a, b)
}

Object.keys(operators).forEach(key => {
    global[key] = operators[key];
});
 
console.info(two(pow(five())));