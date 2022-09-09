import { shipCreator as shipCreator } from "./ship.js";
const gameBoard = (() => {
  let allShip = {};
  let enemyShips = {};
  let sunkedShips = 0;
  let enemyMissedShots = [];
  let playerMissedShots = [];
  let hitToRemember = 0;
  let tries = 1;
  function createMap(player) {
    let shipMap = document.createElement("div");
    shipMap.classList.add("map");
    shipMap.id = player;
    document.querySelector(".playField").appendChild(shipMap);
  }
  function createBoard(id) {
    for (let i = 1; i <= 100; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.id = "pos" + i;
      square.setAttribute("pos", i);
      document.querySelector("#" + id + ".map").appendChild(square);
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
      if (checkShipOverlapping(checkablePositions, gameBoard.allShip)) {
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
  const placeEnemyShips = (whichEnemyShip) => {
    let i;
    let valid = false;
    let direction;
    let checkablePositions = [];
    let startingPosition = Math.floor(Math.random() * (99 - 1 + 1) + 1);
    if (Math.floor(Math.random() * (2 - 1 + 1) + 1) === 1) {
      direction = "horizontal";
    } else {
      direction = "vertical";
    }
    startingPosition = parseInt(startingPosition);
    if (
      checkValidPosition(startingPosition, whichEnemyShip.shipLength, direction)
    ) {
      if (direction === "horizontal") {
        for (i = 0; i < whichEnemyShip.shipLength; i++) {
          checkablePositions.push(startingPosition + i);
        }
      } else if (direction === "vertical") {
        for (i = 0; i < whichEnemyShip.shipLength; i++) {
          checkablePositions.push(startingPosition + i * 10);
        }
      }
      if (checkShipOverlapping(checkablePositions, gameBoard.enemyShips)) {
        whichEnemyShip.shipPositions = checkablePositions;
        valid = true;
      }
    }
    return valid;
  };

  function setEnemeyShipsToBoard() {
    let set = false;
    for (const setThisShip in gameBoard.enemyShips) {
      set = false;
      while (set === false) {
        if (placeEnemyShips(gameBoard.enemyShips[setThisShip])) {
          set = true;
        }
      }
    }
  }

  const receiveAttack = (coordinate, player) => {
    let shipHit = false;
    let missedShots;
    let target;
    if (player === "computer") {
      target = gameBoard.enemyShips;
      missedShots = enemyMissedShots;
    } else if (player === "player") {
      target = gameBoard.allShip;
      missedShots = playerMissedShots;
    }
    coordinate = parseInt(coordinate);
    for (const checkShip in target) {
      for (let i = 0; i <= target[checkShip].shipPositions.length - 1; i++) {
        if (target[checkShip].shipPositions[i] === coordinate) {
          shipHit = true;
          target[checkShip].hit(coordinate);
          isAllShipSunked(target);
        }
      }
    }
    if (shipHit === false) {
      missedShots.push(coordinate);
    }
    return shipHit;
  };

  const isAllShipSunked = (target) => {
    let all = false;
    for (const checkShip in target) {
      target[checkShip].isSunk();
      if (target[checkShip].sunk === true) {
        sunkedShips += 1;
      }
    }
    if (sunkedShips === 5) {
      all = true;
      window.alert("all ship sunked");
    } else {
      sunkedShips = 0;
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
      square.setAttribute("pos", positions[i]);
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
  function checkShipOverlapping(positions, player) {
    let shipPositionsLength = positions.length;
    let validPosition = true;
    for (const ship in player) {
      for (let i = 0; i <= player[ship].shipPositions.length - 1; i++) {
        for (let j = 0; j <= shipPositionsLength - 1; j++) {
          if (player[ship].shipPositions[i] === positions[j]) {
            validPosition = false;
          }
        }
      }
    }
    return validPosition;
  }
  function enemyShooting() {
    let set = false;
    while (!set) {
    let target;
    if (hitToRemember === 0) {
    target = Math.floor(Math.random() * (99 - 1 + 1) + 1);
    } else {
      console.log("remember:" +hitToRemember);
      target = shootAround(hitToRemember, tries);
      tries++;
    }
    for (let i = 0; i <= enemyMissedShots.length; i++) {
      if (target !== enemyMissedShots[i]) {
        set = true;
      }
      else {set = false};
    }
    if (set) {
      let playerMap = document.querySelector("#player");
      let targetSquare = playerMap.querySelector('[pos="'+target+'"]')
      receiveAttack(target, "player");
      let shoot = receiveAttack(target, "player");
      if (shoot) {
        targetSquare.classList.add("hit");
        let direction = target - hitToRemember;
        // if direction 1 hit and next is missed, go the other way around -1//
        if (direction = 1) {
          tries = 1;
        } else if (direction = -1) {
          tries = 2
        } else if (direction = -10) {
          tries = 3
        } else if (direction = 10) {
          tries = 4
        }
        hitToRemember = target;
        
      } else {
        targetSquare.classList.add("missed");
        tries = 0;
      }
    }
    }
  }


  function shootAround(target, tries) {
    let newTarget;
    if (tries === 1) {
      newTarget = target + 1;
    } else if (tries === 2) {
      newTarget = target - 1;
    } else if (tries === 3) {
      newTarget = target - 10;
    } else if (tries === 4) {
      newTarget = target + 10;
    } else {
      hitToRemember = 0;
      tries = 0;
    }
    console.log(tries);
    console.log("new target:" +newTarget);
    return newTarget;
  }

  return {
    createMap,
    createBoard,
    placeShip,
    receiveAttack,
    isAllShipSunked,
    setEnemeyShipsToBoard,
    enemyShooting,
    allShip,
    enemyShips,
  };
})();

export { gameBoard as gameBoard };
