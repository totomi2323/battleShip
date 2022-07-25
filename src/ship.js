const shipCreator = (name, shipLength, shipPositionStart) => { 
let shipName = name;

let shipPositions = [];
let hitPositions = [];

for (let i = 0; i < shipLength; i++) {
   shipPositions.push((shipPositionStart+i))
}

let ship = {
    shipName,
    shipLength,
    shipPositions,
    hitPositions
}

const shoot = (target) => {
let isHit;
for  (let i = 0; i < shipLength; i++) {
    if(shipPositions[i] === target) {
       isHit = true; 
       hitPositions.push(target);
       break;
    }
    else {isHit = false;}
}
return isHit;
} 

const isSunk = () => {
    sunk = false;
    if (shipPositions.length === hitPositions.length) {
        sunk = true;
    } else { sunk = false}
    return sunk;
}


return {ship, shoot, isSunk};
}

module.exports = shipCreator;