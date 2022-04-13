// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToInteger = array => {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    num += array[i] * Math.pow(2, array.length - 1 - i);
  }
  return num;
}

// console.log(binaryArrayToInteger([1, 0, 1, 1]));


const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
console.log(binaryArrayToNumber([0, 0, 1, 1]));