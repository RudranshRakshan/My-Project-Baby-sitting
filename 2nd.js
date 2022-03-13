function load() {
    document.getElementById("player1N").innerHTML = localStorage.getItem("player1") + " : ";
    document.getElementById("player2N").innerHTML = localStorage.getItem("player2") + " : ";
    document.getElementById("player1S").innerHTML = "0 ";
    document.getElementById("player2S").innerHTML = "0 ";
    P1Name = localStorage.getItem("player1");
    P2Name = localStorage.getItem("player2");

    document.getElementById("playerQ").innerHTML = "Question Turn: " + P1Name;
    document.getElementById("playerA").innerHTML = "Answer Turn: " + P2Name;
}