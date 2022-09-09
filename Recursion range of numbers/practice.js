function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
  return [startNum];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }  
  };
//   below is a single line function

const magic = () => new Date(); 

// write arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2); 

console.log(myConcat([1, 2], [3, 4, 5]));

// set default parametres for your function

const increment = (number, value = 1) => number + value;
console.log(increment());

//Use the Rest Parameter with Function Parameters
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  // copy an array with spread operator
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 =[...arr1];   // Change this line

console.log(arr2);
//Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today , tomorrow} = HIGH_TEMPERATURES;
  // Only change code above this line

  //Use Destructuring Assignment to Assign Variables from Objects
  const HIGH_TEMPERATURE = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    const{ today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

    // Use Destructuring Assignment to Pass an Object as a Function's Parameters
    const stats = {
      max: 56.78,
      standard_deviation: 4.34,
      median: 34.54,
      mode: 23.87,
      min: -0.75,
      average: 35.85
    };
    
    // Only change code below this line
    const half = ({max , min}) => (max + min) / 2.0; 
    console.log(half(stats));
    // Only change code above this line


    // Create Strings using Template Literals

    const result = {
      success: ["max-length", "no-amd", "prefer-arrow-functions"],
      failure: ["no-var", "var-on-top", "linebreak"],
      skipped: ["no-extra-semi", "no-dup-keys"]
    };
    function makeList(arr) {
       // Only change code below this line
      const failureItems = result.failure.map(element => `<li class="text-warning">${element}</li>`);
      // Only change code above this line
      return failureItems;
    
      
    }
    
    const failuresList = makeList(result.failure);

    // Write Concise Object Literal Declarations Using Object Property Shorthand

    const createPerson = (name, age, gender) => {
      // Only change code below this line
      return {name, age, gender};
    
      // Only change code above this line
    };

    // Use class Syntax to Define a Constructor Function

    // Only change code below this line
class Vegetable{
  constructor(name){
   this.name = name;
  }
}

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// Use getters and setters to Control Access to an Object

// Only change code below this line
class Thermostat{
  constructor(fahrenheit){
    this.fahrenheit = fahrenheit;
  }
  // getter
  get temperature(){
    return 5/9 * (this.fahrenheit-32);
  }
  // setter
  set temperature(celsius){
    this.fahrenheit = celsius * 9.0/ 5 + 32;
  }

}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// Use export to Share a Code Block
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export{uppercaseString, lowercaseString};


// Use * to Import Everything from a File
import * as stringFunctions from './string_functions.js';
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Create an Export Fallback with export default
function subtract(x, y) {
  return x - y;
}
export default function(x, y){
  return x- y;
}



// Import a Default Export
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);


// Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {

});

// complete a promise with resolve and reject 
const makeServerRequet = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    // Change this line
    resolve('We got the data');
  } else {  
    // Change this line
    reject('Data not received');
  }
});

// Handle a Fulfilled Promise with then
const makeServerReques = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);

});
makeServerRequest.catch(error => {
  console.log(error);
});

// Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let value = userCheck.test(username);

// Positive and Negative Lookahead

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=.*\d{2,}.*)/; // Change this line
let result = pwRegex.test(sampleWord);

// Check For Mixed Grouping of Characters

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
