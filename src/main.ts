// Annotation of types
let myNum: number = 1;
let myStr: string = '123';
let myBool: boolean = false;
let myUndefined: undefined = undefined;
let myNull: null = null;
let mySymb: Symbol = Symbol();
let myDate: Date = new Date();

// Custom types
type CalendarDate = Date | string;
let myCalDate: CalendarDate = new Date();
myCalDate = '2020-10-10';

// Object Inline declaration
let typedVar: {
  name: string;
  age: number;
} = {
  name: 'username',
  age: 20,
}

// Functions
function sum(num: number, num2: number): number {
  return num + num2
}

// Union
let someVar: number | string | undefined;

someVar = '1';
someVar = 2;

// Intersection
type Age = {
  age: number;
}
type Name = {
  name: string;
}
let someVar2: Age & Name;

someVar2 = {
  age: 1,
  name: 'username',
};

// enum
enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

let c: Color = Color.Red;

// void
function noReturnValue(): void {
  console.log('meow');
}

// never
function wrongAction(): never {
  throw new Error('oops');
}

// any
let anyType: any = 'any type can be here';

// unkown
declare function makeServerRequest(): any;
declare function handleNumericValue(value: number): void;
declare function handleStringValue(value: string): void;

const serverResponse: unknown = makeServerRequest();

if (typeof serverResponse === 'number') {
  handleNumericValue(serverResponse);
}

if (typeof serverResponse === 'string') {
  handleStringValue(serverResponse);
}

