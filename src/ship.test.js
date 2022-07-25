const shipCreator = require("./ship");


test("ship object's ship array position to be [1,2,3,4], name Tomi and length 4", ()=> {
    const mediumShip = shipCreator("mediumShip", 4 , 1);
    expect(mediumShip.ship)
    .toEqual({shipName: "mediumShip", shipLength: 4, shipPositions: [1,2,3,4], hitPositions:[]})
} )

test("ship positions to be [2,3,4,5,6]", () => {
    const longShip = shipCreator("dummy", 5, 2);
    expect(longShip.ship.shipPositions).toEqual([2,3,4,5,6])
})

test("ship got hit on position 2", () => {
    const mediumShip = shipCreator("mediumShip", 4 , 1);
    expect(mediumShip.shoot(2)).toBe(true);

})

test("ship didn't got hit on position 2 because ship starts on position 3", () => {
    const mediumShip = shipCreator("mediumShip", 4 , 3);
    expect(mediumShip.shoot(2)).toBe(false);

})

test("ship got sunk", () => {
    const smallShip = shipCreator("smallShip", 2, 3);
    smallShip.shoot(3);
    smallShip.shoot(4);
    expect(smallShip.isSunk()).toBe(true);
})

test("shit got hit on position 12 and 13", ()=> {
    const mediumShip = shipCreator("mediumShip", 4 , 11);
    mediumShip.shoot(12);
    mediumShip.shoot(13);
    expect(mediumShip.ship.hitPositions).toEqual([12,13]);
})