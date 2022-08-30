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