// Implement an isogram function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. // Ignore letter case.

function isIsogram(str){

  let arr = str.toLowerCase().split('');
  console.log(arr);
  let obj = {};


  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      console.log("if cond=FALSE", obj[arr[i]]);
      return false;
    } else {
      obj[arr[i]] = true;
      console.log("else cond=TRUE", obj[arr[i]]);
    }
  }
  return true;
}
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('isogram'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
