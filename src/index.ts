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