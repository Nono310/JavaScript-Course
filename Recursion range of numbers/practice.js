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