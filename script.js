let players = [];

function addPlayer() {
    const playerName = document.getElementById("playerName").value;
    
    if (playerName && players.length < 10) {
        players.push(playerName);
        document.getElementById("playerName").value = ''; // Clear input field
        updatePlayerList();
        checkGameStatus();
    }
}

function updatePlayerList() {
    const playersList = document.getElementById("playersList");
    playersList.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement("li");
        li.textContent = player;
        playersList.appendChild(li);
    });
}

function checkGameStatus() {
    const statusMessage = document.getElementById("statusMessage");
    if (players.length === 10) {
        statusMessage.textContent = "Stato: La partita è completa!";
        statusMessage.style.color = '#4A4844';
    } else {
        statusMessage.textContent = `Stato: In attesa di ${10 - players.length} giocatori...`;
    }
}
