// Need to create a function called isValidWalk that will return true if the walk is 10 minutes, i.e. the array will consist of 10 elements:

// 1. The walk has to be for 10 minutes

// 2. It is necessary to return to the starting point of the route

// 3. Each element in the list (each letter) or a separate block corresponds to 1 minute;

// 4. Сreate two variable also (it's a block or district) and initialize to 0 to track our walk, ns (North-South)  and ew (East-West)
// 5. For every single district or block that we walk i.e ns and es variables, need to increment and decrement with 1

// And then finally we will check we returned to our same position or not

function isValidWalk(walk) {
  // block or district walking route
  let ns = 0;
  let ew = 0;
  // walk.length = 10 minutes
  if (walk.length === 10) {
    for (let i = 0; i < walk.length; i++) {
      // if we move in n direction then ns += 1
      // if we move in s direction (coming back) then ns -= 1

      // if we move in e direction then ew += 1
      // if we move in w direction (coming back) then ew -= 1

      if (walk[i] === "n") {
        ns++;
      } else if (walk[i] === "s") {
        ns--;
      } else if (walk[i] === "e") {
        ew++;
      } else if (walk[i] === "w") {
        ew--;
      }
    }
    // And then finally we will check we returned to our same position or not
    // if ns == 0 and ew == 0 then return true
    // else then return false
    if (ns === 0 && ew === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}



function isValidWalk(walk) {

  function count(letter) {

    console.log('!!! Count function !!!');
    console.log(walk.filter(pace => pace == letter));
    console.log('---Count function length---');
    console.log(walk.filter(pace => pace == letter).length);

    return walk.filter(pace => pace==letter).length;

  }
  console.log('+++ isValidWalk function Start result:', walk.length==10 && count('n')==count('s') && count('w')==count('e'));
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}



function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;

  return walk.length === 10 && north === south && east === west;
}


function isValidWalk(walk) {
  return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // TRUE
console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])); //FALSE

console.log(isValidWalk(["w"])); //FALSE
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // FALSE

