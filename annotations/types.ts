let apples = 5;
let speed: string = 'fast';
let hasName:boolean = true;

let nothingMuch: null = null;
let nothing:undefined = undefined;

// built in objects, which means they could be assigned to different objects with different types
let now : Date = new Date();

//Array -
let colors:string[] = ["red","green","blue"];
let myNumbers:number[] = [1,2,3];
let truth: boolean[] = [true,true,false];

class Car{

}
//Assigning a car Object to the variable car
let car: Car = new Car();

// Object literal
let point: {x:number; y:number} = {
  x:10,
  y:20
};

//Function definition with type constraints, watch for the squiggly lines
const logNumber = (i) => {
  console.log(i);
}

//Integer are replaced by number in Typescript
//Everything to the left hand side of the equal sign repersents the statement, the parameters and the return values of the function call
//Everything to the right hand side of the equal sign repersents the function call itself
const linNumber:(i:number) => void = (i:number)=>{
  console.log(i)
}

//When to use annotations
// 1) Function that returns the 'any' type, JSON.parse

const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
