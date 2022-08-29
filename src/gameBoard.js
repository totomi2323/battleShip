import { shipCreator as shipCreator } from "./ship.js";
const gameBoard = (() => {
  let allShip = {};
  let missedShots = [];
  let sunkedShips = 0;
  function createMap() {
    let shipMap = document.createElement("div");
    shipMap.classList.add("map");
    document.querySelector(".playField").appendChild(shipMap);
  }
  function createBoard() {
    for (let i = 1; i <= 100; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.id = "pos" + i;
      square.setAttribute("pos", i);
      document.querySelector(".map").appendChild(square);
    }
  }
  const placeShip = (shipPositionStart, direction, whichShip) => {
    let i;
    let checkablePositions = [];
    shipPositionStart = parseInt(shipPositionStart);
    if (
      checkValidPosition(shipPositionStart, whichShip.shipLength, direction)
    ) {
      if (direction === "horizontal") {
        for (i = 0; i < whichShip.shipLength; i++) {
          checkablePositions.push(shipPositionStart + i);
        }
      } else if (direction === "vertical") {
        for (i = 0; i < whichShip.shipLength; i++) {
          checkablePositions.push(shipPositionStart + i * 10);
        }
      }
      console.log(checkablePositions);
      console.log(checkShipOverlapping(checkablePositions))
      if (checkShipOverlapping(checkablePositions)) {
        whichShip.shipPositions = checkablePositions;
        if (direction === "horizontal") {
          setShipHorizontaly(whichShip.shipName, shipPositionStart);
        } else {
          setShipVerticaly(whichShip.shipName, whichShip.shipPositions);
        }
        document
          .querySelector("#" + whichShip.shipName)
          .setAttribute("draggable", false);
        removeMapElements(whichShip.shipPositions);
        setShipPositions(whichShip.shipName, whichShip.shipPositions);

        return whichShip.shipPositions;
      }
    }
  };
  const receiveAttack = (coordinate) => {
    let shipHit = false;
    for (const checkShip in allShip) {
      for (let i = 0; i < allShip[checkShip].shipPositions.length; i++) {
        if (allShip[checkShip].shipPositions[i] === coordinate) {
          shipHit = true;
          allShip[checkShip].hit(coordinate);
        }
      }
    }
    if (shipHit === false) {
      missedShots.push(coordinate);
    }
    return shipHit;
  };
  const isAllShipSunked = () => {
    let all = false;
    let allShipLength = Object.keys(allShip).length;
    for (const checkShip in allShip) {
      allShip[checkShip].isSunk();
      if (allShip[checkShip].sunk === true) {
        sunkedShips += 1;
      }
    }
    if (sunkedShips === allShipLength) {
      all = true;
    }
    return all;
  };
  function removeMapElements(elements) {
    for (let i = 0; i < elements.length; i++) {
      let map = document.querySelector(".map");
      let removableElement = document.querySelector("#pos" + elements[i]);
      map.removeChild(removableElement);
    }
  }
  function setShipPositions(name, positions) {
    let i = 0;
    let allSquaresOfShip = document.querySelectorAll("#" + name + " .square");
    allSquaresOfShip.forEach((square) => {
      square.id = "pos" + positions[i];
      i++;
    });
  }
  function setShipVerticaly(name, positions) {
    let i = 0;

    let map = document.querySelector(".map");
    let start = document.querySelector("#pos" + positions[0]);
    let thisShip = document.querySelector("#" + name);
    map.insertBefore(thisShip, start);
    let allSquaresOfShip = document.querySelectorAll("#" + name + " .square");
    allSquaresOfShip.forEach((square) => {
      let pos = positions[i];

      let verticalSquarePosition = document.querySelector(
        "#pos" + pos + ".square"
      );
      map.insertBefore(square, verticalSquarePosition);
      square.classList.add("ship");
      square.setAttribute("ship", name);
      square.setAttribute("pos", pos);
      square.id = name;
      i++;
    });
  }
  function setShipHorizontaly(name, positionsStart) {
    let start = document.querySelector("#pos" + positionsStart);
    let map = document.querySelector(".map");
    let thisShip = document.querySelector("#" + name);
    map.insertBefore(thisShip, start);
    let allSquaresOfShip = document.querySelectorAll("#" + name + " .square");
    allSquaresOfShip.forEach((square) => {
      square.classList.add("ship");
      square.setAttribute("ship", name);
      square.id = name;
    });
  }
  function checkValidPosition(positionsStart, length, direction) {
    let validPosition = true;
    let lastNumber = positionsStart.toString().slice(-1);
    lastNumber = parseInt(lastNumber);
    if (lastNumber === 0) {
      lastNumber = 10;
    }
    if (direction === "horizontal") {
      if (lastNumber + length - 1 > 10) {
        validPosition = false;
      }
    } else if (direction === "vertical") {
      if (positionsStart + (length - 1) * 10 > 100) {
        validPosition = false;
      }
    }
    return validPosition;
  }
  function checkShipOverlapping(positions) {
    let shipPositionsLength = positions.length;
    let validPosition = true;
    for (const ship in gameBoard.allShip) {
      console.log(gameBoard.allShip);
      console.log(gameBoard.allShip[ship]);
      for (let i = 0; i <= gameBoard.allShip[ship].shipPositions.length - 1; i++) {
        for (let j = 0; j <= shipPositionsLength - 1; j++) {
          console.log(gameBoard.allShip[ship].shipPositions[i])
          if (gameBoard.allShip[ship].shipPositions[i] === positions[j]) {
            validPosition = false;
          }
        }
      }
    }
    return validPosition;
  }
  return {
    createMap,
    createBoard,
    placeShip,
    receiveAttack,
    isAllShipSunked,
    allShip,
    missedShots,
  };
})();

export { gameBoard as gameBoard };