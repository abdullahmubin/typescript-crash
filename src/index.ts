//Basic Types

let id: number = 5;
console.log('number: '+ id);
let nameStr: string = 'Mubin galib'
console.log('string: ' +nameStr)
let isHuman: boolean = true;
console.log('boolean: '+ isHuman);
let x: any = 234;

let ids:number[] = [1,2,3,4];
let idsany: any[] = [1,2, true, 'Test'];

// Tuple
let person: [number, string, boolean] = [1, 'mubin', true]
let employee: [number, string][]

employee = [
    [1, 'mubin'],
    [2, 'galib']
]

console.log('employee: ', employee)

// Union

let pId: string | number;
pId = '222';

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right
}

console.log('enum direction: '+ Direction1.Up);
console.log('enum direction2: '+ Direction2.Up);

enum DirectionString {
    Up = 'Up',
    Down = 'Down'

}

console.log('direction string: '+ DirectionString.Up)

// Object

type user = {
    id: number,
    Name: string
}

let human: user = {
    id: 1,
    Name: 'Mubin'
}

console.log('ojbect');
console.log(human)

// Type assertion

let cId: any = 123;
let assertionOne = <number> cId;
console.log('assertionOne: '+ assertionOne);

let assertionTwo = cId as number;
console.log('assertionTwo: '+ assertionTwo)

// Functions
// return type number
function addNum (x: number, y: number): number {
    return x + y;
}

// return type void
function log(message: string | number): void {
    console.log(message)
}

// Interface

interface userInterface {
    readonly id: number,
    name: string
}

const user1: userInterface = {
    id: 1,
    name: 'mubin'
}

type Point = number | string // we can't use interface in this situation.
const p1: Point = 1;

// interface with function

interface mathFuncInterface {
    (x: number, y: number): number
}
const add: mathFuncInterface = (x: number, y: number): number => x +y;
const sub: mathFuncInterface = (x: number, y: number): number => x - y;

// classes

class Person {
    public id: number
    public name: string

    constructor(id: number, name: string) {
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
console.log(galib.register())

console.log('mubin');
console.log(mubin)
console.log(galib)

// function with interface:-

interface PersonFnInterface {
    id: number;
    name: string;
    register(): string // return type of function is "string"
}

class PersonFn implements PersonFnInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.id} of name: ${this.name}`;
    }


}

// subclass
class Employee extends PersonFn{
    position: string

    constructor(id: number, name: string, position: string)
    {
        super(id, name) // it assign value to PersonFn function constructor
        this.position = position;
    }
}

const emp = new Employee(1, 'employee name', 'junior dev');

console.log('emp em,p');
console.log(emp.name);
console.log(emp.register())

// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3])
let strArray = getArray<string>(['Test 1', 'Test 2']);

console.log('numArray');
console.log(numArray)