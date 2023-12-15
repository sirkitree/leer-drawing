let employees = ["Adams, Alexander", "Addy, Cabral Ayitey", "Aderhold, Julie", "Alsina, Marc Anthony", "Anderson, Daniel", "Anderson, Daniel A", "Andrews, Ryan Nikolas", "Andricak, Brittany", "Andujar Batista, Reinaldo", "Arnold, Ricky E", "Bailey, Charles K", "Baker, Cory Hawk", "Baskin, Roger", "Bastian, Brent", "Bean, Alan James", "Beattie, Jeremiah Donald", "Beck, Adam", "Beck, Crystal Ann", "Beck, Matthew", "Bennage, Brandon", "Bennage, Kimberly J", "Bennage, Ricky T", "Benscoter, Bradley S", "Bergerstock, Cheyenne", "Bergerstock, Todd D", "Blake, Aysha", "Bower, Damian Allen", "Bowersox, Jacob Michael", "Byerly, Jeffrey", "Campbell, Richard", "Catherman, Michael A", "Clark, Timothy Aaron", "Clayton, Tyler Scott", "Cook, Richard K", "Cook, Tyler Eugene", "Cotner, David", "Coup, Graydon", "Day, Eric", "Deitrich, Mariah", "Delsite, Douglas", "Doebler, Douglas Lee", "Donfrancesco, Nicholas C", "Dries, Amanda", "Drummond, Nastassja", "Ebling, Steven Craig", "Elliott, Jayson", "Eltringham, Kevin Eric", "Farley, James L", "Feigles, Pamela N", "Ferguson, Michael Lee", "Figueroa, Jose Anthonio", "Figueroa, Osvaldo", "Fitzwater, Todd", "Fondeur, Ricardo Hugo", "Forker, Nathan Daniel", "Foster, Ian Allen", "France, Steven", "Frederick, Adam", "Fry, Wayne A", "Funk, Joshua", "Gajus, Wesley Brandon", "Gardiner, Angela J", "Gardiner, Cadence Leiter", "Garrison, Courtney", "Gearhart III, Carl P", "Gehrer, Alexander", "Gehrer, Austin", "Gessner, Marcus", "Glica, Brendan", "Gomez, Osvaldo", "Gross, Caleb Jeffrey-Jo", "Guffey, Brian"]; 
let prizes = ["cooler", "beanie", "cap", "duffle bag", "cargo caddy", "Weis cards", "flashlight", "amazon cards"];
let winners = [];

document.addEventListener('DOMContentLoaded', function() {
    updateEmployeeList();
    updatePrizeList();
}, false);

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
    updateEmployeeList();
    updatePrizeList();

    document.getElementById("result").innerText = selectedEmployee + " won " + selectedPrize;
}

function markAbsent(employeeName) {
    let index = employees.indexOf(employeeName);
    if (index > -1) {
        employees.splice(index, 1);
        updateEmployeeList();
    }
}

function updateWinnersList() {
    let winnersList = document.getElementById("winnersList");
    winnersList.innerHTML = "";
    winners.forEach(function(winner) {
        let listItem = document.createElement("li");
        listItem.innerText = winner;
        listItem.className = "list-group-item";
        winnersList.appendChild(listItem);
    });
}

function updateEmployeeList() {
    let employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = "";
    employees.forEach(function(employee) {
        let listItem = document.createElement("li");
        listItem.innerText = employee;
        listItem.className = "list-group-item";
        
        let button = document.createElement("button");
        button.innerHTML = "<i class='bi bi-calendar-x'></i>";
        button.className = "btn btn-danger";
        button.onclick = function() { markAbsent(employee); };

        listItem.prepend(button);
        employeeList.appendChild(listItem);
    });
}

function updatePrizeList() {
    let prizeList = document.getElementById("prizeList");
    prizeList.innerHTML = ""; // Clear existing list
    prizes.forEach(function(prize, index) {
        let listItem = document.createElement("li");
        listItem.innerText = prize;
        listItem.classList.add("list-group-item"); // Bootstrap class for styling

        // Add remove button
        let removeButton = document.createElement("button");
        removeButton.innerHTML = '<i class="bi bi-x-square-fill"></i>';
        removeButton.classList.add("btn", "btn-danger", "btn-sm", "ms-2"); // Bootstrap classes
        removeButton.onclick = function() { removePrize(index); };
        listItem.prepend(removeButton);

        prizeList.appendChild(listItem);
    });
}

function addPrize(event) {
    event.preventDefault(); // Prevent form from submitting normally
    let newPrize = document.getElementById("newPrize").value.trim();
    if (newPrize) {
        prizes.push(newPrize);
        updatePrizeList();
        document.getElementById("newPrize").value = ''; // Clear the input field
    }
}

function removePrize(index) {
    prizes.splice(index, 1); // Remove prize from the array
    updatePrizeList();
}

// Attach event listener to the form for adding prizes
document.getElementById("prizeForm").addEventListener('submit', addPrize);
