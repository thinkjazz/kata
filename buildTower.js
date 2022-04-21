// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.


function towerBuilder(nFloors) {
  let star = "*";
  let space = " ";
  let tower = [];

  for(i = 1; i <= nFloors; i++){

    spaceElem = [] = space.repeat(nFloors - i);
    starElem = [] = star.repeat((2 * i) - 1);


    tower.push(`${spaceElem}${starElem}${spaceElem}`);
  }
  return tower;

}

console.log(towerBuilder(10));