var options = ["✊","✋","✌"]
var winCounter = 0;
var winCounterNPC = 0;
var matches = [];

function play(option){
    var npc = Math.floor(Math.random() * 3);
    if (option === options[npc]){
    document.getElementById("resultado").innerHTML =
    "Empate por: " + options[npc];
}else if(option === "✊" && options[npc] === "✌"){
    victoria()
}else if(option === "✌" && options[npc] === "✋"){
    victoria()
}else if(option === "✋" && options[npc] === "✊"){
    victoria()
}else if(option === "✌" && options[npc] === "✊"){
    derrota()
}else if(option === "✋" && options[npc] === "✌"){
    derrota()
}else if(option === "✊" && options[npc] === "✋"){
    derrota()
}
history(option, options[npc])
}

function victoria() {
    let win = "Ganaste";
    winCounter++;
    document.getElementById("resultado").innerHTML = win;
    document.getElementById("victorias").innerHTML = winCounter;
}

function derrota() {
    let lose = "Perdiste";
    winCounterNPC++;
    document.getElementById("resultado").innerHTML = lose;
    document.getElementById("derrotas").innerHTML = winCounterNPC
}

function history(player, npc) {
    document.getElementById("Historial").innerHTML = "";
    matches.unshift(player + " - " + npc);
    if (matches.length > 5) {
        matches.pop();
    }
    for (const match of matches) {
      let node = document.createElement("p");
      node.innerHTML = match;
      document.getElementById("Historial").appendChild(node)
    }
}