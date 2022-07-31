import {shipCreator as shipCreator} from "./ship.js"



test("ship object's name Tomi and length 4 and ship not sunk", () => {
  const mediumShip = shipCreator.createShip("mediumShip", 4);
  expect(mediumShip).toEqual({
    shipName: "mediumShip",
    shipLength: 4,
    hitPositions: [],
    shipPositions: [],
    sunk: false,
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  });
});

test("ship got hit on position 2", () => {
  const mediumShip = shipCreator.createShip("mediumShip", 4);
  expect(mediumShip.hit(2)).toEqual([2]);
});

test("ship got sunk", () => {
  const smallShip = shipCreator.createShip("smallShip", 2);
  smallShip.hit(3);
  smallShip.hit(4);
  expect(smallShip.isSunk()).toBe(true);
});

test("shit got hit on position 12 and 13 ", () => {
  const mediumShip = shipCreator.createShip("mediumShip", 4);
  mediumShip.hit(12);
  mediumShip.hit(13);
  expect(mediumShip.hitPositions).toEqual([12, 13]);
});

