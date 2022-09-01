import { gameBoard as gameBoard } from "./gameBoard";
const shipCreator = (() => {
  let ship;

  const createShip = (name, shipLength) => {
    let shipName = name;
    ship = {
      shipName,
      shipLength,
      hitPositions: [],
      shipPositions: [],
      sunk: false,
      hit: function (target) {
        this.hitPositions.push(target);
        this.isSunk();
        return this.hitPositions;
      },
      isSunk: function () {
        if (this.shipLength === this.hitPositions.length) {
          this.sunk = true;
        } else {
          this.sunk = false;
        }
        return this.sunk;
      },
    };
    gameBoard.allShip[shipName] = ship;

    return ship;
  };
  const createEnemyShip = (name, shipLength) => {
    let shipName = name;
    ship = {
      shipName,
      shipLength,
      hitPositions: [],
      shipPositions: [],
      sunk: false,
      hit: function (target) {
        this.hitPositions.push(target);
        this.isSunk();
        return this.hitPositions;
      },
      isSunk: function () {
        if (this.shipLength === this.hitPositions.length) {
          this.sunk = true;
        } else {
          this.sunk = false;
        }
        return this.sunk;
      },
    };
    gameBoard.enemyShips[shipName] = ship;

    return ship;
  };
  return { createShip, createEnemyShip };
})();

export { shipCreator as shipCreator };
