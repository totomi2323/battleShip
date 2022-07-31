import {shipCreator as shipCreator} from "./ship.js"
const gameBoard = (() => {
  let allShip = {};
  let missedShots = [];
  function createMap() {
    let shipMap = document.createElement("div");
    shipMap.classList.add("map");
    document.body.appendChild(shipMap);
  }

  const placeShip = (shipPositionStart, direction, whichShip) => {
    let i;
    if (direction === "horizontal") {
      for (i = 0; i < whichShip.shipLength; i++) {
        whichShip.shipPositions.push(shipPositionStart + i);
      }
    } else if (direction === "vertical") {
      for (i = 0; i < whichShip.shipLength; i++) {
        whichShip.shipPositions.push(shipPositionStart + i * 10);
      }
    }

    return whichShip.shipPositions;
  };
  const receiveAttack = (coordinate) => {
    let shipHit = false ;
    let hitThisShip;
    for (const checkShip in allShip) {
      for (let i = 0; i < allShip[checkShip].shipPositions.length; i++) {
        if (allShip[checkShip].shipPositions[i] === coordinate) {
          shipHit = true;
         allShip[checkShip].hit(coordinate);
        } 
      }
    }
    if (shipHit === false) {missedShots.push(coordinate)}
    return shipHit;
  };

  return { createMap, placeShip, receiveAttack, allShip, missedShots };
})();

export { gameBoard as gameBoard };
