const domDisplay = (() => {
  function displayNames() {
    let playerMap = document.querySelector("#nameplayer");
    let computerMap = document.querySelector("#namecomputer");
    let person =prompt("Please enter your name", "Tony Stark");
    if (person !== "") {
      let playerName = document.createElement("div");
      let computerName = document.createElement("div");
      playerName.classList.add("playerName");
      computerName.classList.add("computerName");
      playerName.innerHTML = person;
      computerName.innerHTML = "Computer";
      playerMap.appendChild(playerName);
      computerMap.appendChild(computerName);
    } else {
      displayNames()
    }
  }
  function createMap(player) {
    let shipMapBox = document.createElement("div");
    let shipMap = document.createElement("div");
    shipMap.classList.add("map");
    shipMapBox.classList.add("mapBox");
    shipMapBox.id = "name" + player;
    shipMap.id = player;
    shipMapBox.appendChild(shipMap);
    document.querySelector(".playField").appendChild(shipMapBox);
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

  return { displayNames, createMap, createBoard };
})();

export { domDisplay as domDisplay };
