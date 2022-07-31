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
        return this.hitPositions;
      },
      isSunk: function () {
        let sunk;
        if (this.shipLength === this.hitPositions.length) {
          sunk = true;
        } else {
          sunk = false;
        }
        return sunk;
      },
    };
    gameBoard.allShip[shipName] = ship;

    return ship;
  };

  return { createShip };
})();

export { shipCreator as shipCreator };
