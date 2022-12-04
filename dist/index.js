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
let human = {
    id: 1,
    Name: 'Mubin'
};
console.log('ojbect');
console.log(human);
// Type assertion
let cId = 123;
let assertionOne = cId;
console.log('assertionOne: ' + assertionOne);
let assertionTwo = cId;
console.log('assertionTwo: ' + assertionTwo);
// Functions
// return type number
function addNum(x, y) {
    return x + y;
}
// return type void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'mubin'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.id} of name: ${this.name}`;
    }
}
const mubin = new Person(1, 'Mubin');
console.log(mubin.register());
const galib = new Person(2, "Galib");
console.log(galib.register());
console.log('mubin');
console.log(mubin);
console.log(galib);
class PersonFn {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.id} of name: ${this.name}`;
    }
}
// subclass
class Employee extends PersonFn {
    constructor(id, name, position) {
        super(id, name); // it assign value to PersonFn function constructor
        this.position = position;
    }
}
const emp = new Employee(1, 'employee name', 'junior dev');
console.log('emp em,p');
console.log(emp.name);
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(['Test 1', 'Test 2']);
console.log('numArray');
console.log(numArray);
