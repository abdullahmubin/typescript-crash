"use strict";
//Basic Types
let id = 5;
console.log('number: ' + id);
let nameStr = 'Mubin galib';
console.log('string: ' + nameStr);
let isHuman = true;
console.log('boolean: ' + isHuman);
let x = 234;
let ids = [1, 2, 3, 4];
let idsany = [1, 2, true, 'Test'];
// Tuple
let person = [1, 'mubin', true];
let employee;
employee = [
    [1, 'mubin'],
    [2, 'galib']
];
console.log('employee: ', employee);
// Union
let pId;
pId = '222';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log('enum direction: ' + Direction1.Up);
console.log('enum direction2: ' + Direction2.Up);
var DirectionString;
(function (DirectionString) {
    DirectionString["Up"] = "Up";
    DirectionString["Down"] = "Down";
})(DirectionString || (DirectionString = {}));
console.log('direction string: ' + DirectionString.Up);
