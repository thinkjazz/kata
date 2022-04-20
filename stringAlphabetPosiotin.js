// Write a function that given a string, replace every letter with its position in the alphabet.

function alphabetPosition(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  console.log('alphabet', alphabet);

  let stringArray = string.toLowerCase().split('');
  console.log('stringArray', stringArray);
  let result = [];
  for (let i = 0; i < stringArray.length; i++) {
    let index = alphabet.indexOf(stringArray[i]);
    console.log('indexOF:', index);
    if (index !== -1) {
      result.push(index + 1);
    }
  }
  console.log('result', result);
  return result.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
console.log(alphabetPosition("The narwhal bacons at midnight.")); // 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20