// Implement a function Highest and Lowest that receives a string of numbers separated by spaces and should return the largest and smallest number

// All numbers are valid Int32, no need to validate them.

// There will always be at least one number in the input string.

// Output string must be two numbers separated by a single space, and highest number is first.

function HighestAndLowest(string) {
  let array = string.split(' ');
  console.log(array);
  let maximum = Math.max(...array);
  console.log(`The highest number is ${maximum}`);

  let minimun = Math.min(...array);
  console.log(`The lowest number is ${minimun}`);


  return  (`${maximum} ${minimun}`);
}

console.log(HighestAndLowest('1 2 3 4 5'));
console.log(HighestAndLowest('1 2 -3 4 5'));