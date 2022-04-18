const ADDING = [0, 9, 108, 1107, 11106, 111105];
const EDGES = [1, 11, 192, 2893, 38894, 488894];

function findDigit(n){
  let N = n.toString().length;
  n *= N;
  return n - ADDING[N - 1];
}

console.log(findDigit(11));
