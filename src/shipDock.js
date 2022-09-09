import { shipCreator as shipCreator } from "./ship.js";
import { gameBoard } from "./gameBoard.js";

const shipDock = (() => {
  const makeShips = () => {
    let carrier = shipCreator.createShip("carrier", 5);
    let battleShip = shipCreator.createShip("battleShip", 4);
    let cruiser = shipCreator.createShip("cruiser", 3);
    let submarine = shipCreator.createShip("submarine", 3);
    let destroyer = shipCreator.createShip("destroyer", 2);
  };
  const makeEnemyShips = () => { 
    let carrier = shipCreator.createEnemyShip("carrier", 5);
    let battleShip = shipCreator.createEnemyShip("battleShip", 4);
    let cruiser = shipCreator.createEnemyShip("cruiser", 3);
    let submarine = shipCreator.createEnemyShip("submarine", 3);
    let destroyer = shipCreator.createEnemyShip("destroyer", 2);
  };
  const displayShipDock = () => {
    makeShips();
    makeEnemyShips(); 
    let shipDock = document.createElement("div");
    shipDock.classList.add("shipDock");
    document.querySelector(".playField").appendChild(shipDock);
    for (const ship in gameBoard.allShip) {
      let shipSize = gameBoard.allShip[ship].shipLength;
      let choosenShip = document.createElement("div");
      choosenShip.classList.add("ship");
      choosenShip.setAttribute("draggable",true);
      choosenShip.setAttribute("ship", gameBoard.allShip[ship].shipName);
      choosenShip.id = gameBoard.allShip[ship].shipName;
      choosenShip.setAttribute("length", gameBoard.allShip[ship].shipLength);
      shipDock.appendChild(choosenShip);
      for (let i = 1; i <= shipSize; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        choosenShip.appendChild(square);
      }
    }
    rotationButton();
  };

  function changeRotation () {
    let shipD = document.querySelector(".shipDock");
    shipD.classList.toggle("vertical");
  }
  const rotationButton = () => {
    let rotateButton = document.createElement("button");
    rotateButton.classList.add("rotateButton");
    rotateButton.innerHTML= "Rotate Ships";
    document.querySelector(".playField").appendChild(rotateButton);
    rotateButton.addEventListener("click" , function () { 
      rotateButton.toggleAttribute("turned");
      changeRotation() }
      )
    
  }
  

  return { displayShipDock };
})();

export { shipDock as shipDock };
