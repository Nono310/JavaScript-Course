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