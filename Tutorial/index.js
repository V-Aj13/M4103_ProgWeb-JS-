console.log("Hello World"); //always terminated with a semi colon
//declare a variable with either var or let
let name = "Aldous";
console.log(name);
//variables cannot be a reserverd keyword like if, else etc..
//should be meaning full make the varibale names clear
//cannot start witha number (1name)
//cannot contain a space or hyphe(-)
//they are case-sensitive

let firstName,
  lastName = "Villalobos"; //camel notation
//but the best practice is to separate them

let interestRate = 0.3;
interestRate = 1; //this changes the variable
console.log(interestRate);

const Interestrate = 0.3;
//Interestrate = 1; Error you cannot change the value of a constant
console.log(Interestrate);

let Fristname = "Aldous"; //string
let age = 30; //int floats etc..
let isApproved = false; //boolean
let selectedColor = null; // we use it when we want to clear a value

//object
let person = {
  name: "Aldous",
  age: 22,
};
//how to change the values of the object

//Dot Notation
person.name = "Yolo";

//Bracket Notation
let selection = "name";
person[selection] = "FML";

console.log(person);

//Arrays

let selectedFavorites = ["red", "blue"];
selectedFavorites[2] = 1;
console.log(selectedFavorites); //shows everthting in an array with their index
console.log(selectedFavorites[1]); //shows blue

//Functions
//Performing a Task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName); //concatinations
}

//call the function
greet("Bekir", "Nebi");
greet("Rayan");

// Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));

/*The main difference is scoping rules. 
Variables declared by var keyword are 
scoped to the immediate function body
(hence the function scope) while let variables are scoped 
to the immediate enclosing block denoted by { } 
(hence the block scope). */
function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar); // Foo Bar
  
    {
      var moo = "Mooo"
      let baz = "Bazz";
      console.log(moo, baz); // Mooo Bazz
    }
  
    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
  }
  
  run();
