console.log(a) // Undefined
var a = 10;

console.log(a) // Reference Error
let a = 10;

console.log(a) // Reference Error
const a = 10;

hello()  // Hello World 
function hello(){
    console.log("Hello World")
}

greet() // TypeError greet is not a function
var greet = function(){
    console.log('Hi')
}

wave() // Reference Error
let wave = function(){
    console.log('Hello')
}

console.log(x); // undefined
var x = 5;

console.log(x); // 5

{
  console.log(m); //  ReferenceError
  let m = 100;
}

var n = 10;
function test() {
  console.log(n); // undefined 
  var n = 20;
}
test();

greet(); // ReferenceError
const greet = () => console.log("Greetings!");
