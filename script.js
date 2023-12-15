let employees = ["Employee 1", "Employee 2", "Employee 3", ...]; // Add your employees here
let prizes = ["Prize 1", "Prize 2", "Prize 3", ...]; // Add your prizes here
let winners = [];

function drawPrize() {
    if (employees.length === 0 || prizes.length === 0) {
        document.getElementById("result").innerText = "No more prizes or employees left.";
        return;
    }

    let employeeIndex = Math.floor(Math.random() * employees.length);
    let prizeIndex = Math.floor(Math.random() * prizes.length);

    let selectedEmployee = employees.splice(employeeIndex, 1)[0];
    let selectedPrize = prizes.splice(prizeIndex, 1)[0];

    winners.push(selectedEmployee + " won " + selectedPrize);
    updateWinnersList();

    document.getElementById("result").innerText = selectedEmployee + " won " + selectedPrize;
}

function updateWinnersList() {
    let winnersList = document.getElementById("winnersList");
    winnersList.innerHTML = "";
    winners.forEach(function(winner) {
        let listItem = document.createElement("li");
        listItem.innerText = winner;
        winnersList.appendChild(listItem);
    });
}
