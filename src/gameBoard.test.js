import { gameBoard as gameBoard } from "./gameBoard";
import {shipCreator as shipCreator} from "./ship.js"



test("gameBoard places ship to position 23,24,25,26", () => {
    const mediumShip = shipCreator.createShip("mediumShip", 4 )
    expect(gameBoard.placeShip(23,"horizontal", mediumShip)).toEqual([23,24,25,26 ])
}) 

test("gameBoard places ship to position 11,21,31,41,51", () => {
    const largeShip = shipCreator.createShip("largeShip", 5 )
    expect(gameBoard.placeShip(11 ,"vertical", largeShip)).toEqual([11,21,31,41,51])
}) 


test("receiveAttack functions hits a ship", () => {
    expect(gameBoard.receiveAttack(23)).toEqual(true)
})
test ("receiveAtack function triggers ship.hit function", () =>{
    expect(gameBoard.allShip.mediumShip.hitPositions).toEqual([23]);
})

test("receiveAttack functions doesn't hit a ship", () => {
    expect(gameBoard.receiveAttack(13)).toEqual(false)
})

test("missed shot have been recorded on coordinate 13 and 16", () => {
    gameBoard.receiveAttack(16)
    expect(gameBoard.missedShots).toEqual([13,16])
})
test("check that all ships are sunked and returns a true value", () => {
    gameBoard.receiveAttack(24);
    gameBoard.receiveAttack(25);
    gameBoard.receiveAttack(26);
    gameBoard.receiveAttack(11);
    gameBoard.receiveAttack(21);
    gameBoard.receiveAttack(31);
    gameBoard.receiveAttack(41);
    gameBoard.receiveAttack(51);
    expect(gameBoard.isAllShipSunked()).toBe(true);
})

test("add a small ship and check all ships are sunked is false", () => {
    let smallShip = shipCreator.createShip("smallShip", 2);
    gameBoard.placeShip(71, "horizontal", smallShip);
    expect(gameBoard.isAllShipSunked()).toBe(false);
})

