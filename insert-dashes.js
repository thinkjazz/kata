// Write a function InsertDash(num) that will insert dashes ('-') between each two odd digits in num.
// For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
// Note that the number will always be non-negative (>= 0).

// 1. Convert a number to string
// 2. Loop through the string


// function insertDash(num) {
//   let str = num.toString();
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
//       result += str[i] + '-';
//     } else {
//       result += str[i];
//     }
//   }
//   return result;

// }


function insertDash(num) {
  var result = []
   num = num.toString().split('').map(Number)
   for(var i=0;i<num.length;i++){
   if(num[i] % 2 !== 0 && num[i+1] % 2 !== 0){
     result.push(num[i])
     result.push('-')
     }
   else {
     result.push(num[i])
     }
   }
   if(result[result.length-1]=='-') result.pop()
   return result.join("")
}

console.log(insertDash(454793)); // 4547-9-3
console.log(insertDash(123456)); // 123456
console.log(insertDash(1003567)); // 1003-567


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(insertDash(454793),'4547-9-3');
//     assert.strictEqual(insertDash(123456),'123456');
//     assert.strictEqual(insertDash(1003567),'1003-567');
//   })
// });
