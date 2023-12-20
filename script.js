let employeeString = `Adams, Alexander
Addy, Cabral Ayitey
Aderhold, Julie
Alsina, Marc Anthony
Anderson, Daniel
Anderson, Daniel A
Andrews, Ryan Nikolas
Andricak, Brittany
Andujar Batista, Reinaldo
Arnold, Ricky E
Bailey, Charles K
Baker, Cory Hawk
Baskin, Roger
Bastian, Brent
Bean, Alan James
Beattie, Jeremiah Donald
Beck, Adam
Beck, Crystal Ann
Beck, Matthew
Bennage, Brandon
Bennage, Kimberly J
Bennage, Ricky T
Benscoter, Bradley S
Bergerstock, Cheyenne
Bergerstock, Todd D
Blake, Aysha
Bower, Damian Allen
Bowersox, Jacob Michael
Byerly, Jeffrey
Campbell, Richard
Catherman, Michael A
Clark, Timothy Aaron
Clayton, Tyler Scott
Cook, Richard K
Cook, Tyler Eugene
Cotner, David
Coup, Graydon
Day, Eric
Deitrich, Mariah
Delsite, Douglas
Doebler, Douglas Lee
Donfrancesco, Nicholas C
Dries, Amanda
Drummond, Nastassja
Ebling, Steven Craig
Elliott, Jayson
Eltringham, Kevin Eric
Farley, James L
Feigles, Pamela N
Ferguson, Michael Lee
Figueroa, Jose Anthonio
Figueroa, Osvaldo
Fitzwater, Todd
Fondeur, Ricardo Hugo
Forker, Nathan Daniel
Foster, Ian Allen
France, Steven
Frederick, Adam
Fry, Wayne A
Funk, Joshua
Gajus, Wesley Brandon
Gardiner, Angela J
Gardiner, Cadence Leiter
Garrison, Courtney
Gearhart III, Carl P
Gehrer, Alexander
Gehrer, Austin
Gessner, Marcus
Glica, Brendan
Gomez, Osvaldo
Gross, Caleb Jeffrey-Jo
Guffey, Brian
Haas, Bobbi Jo
Hall, Thomas W
Harner, Justin Sterling
Helsley III, Stephen
Helsley, Stephen
Heverly, Brian K -
Hoffman, William D
Huhn, Christopher
Hulsizer, Brian W
Ikeler, William
Irwin, Tammie S
Jean, Shana
Jeremiah, Tyler
Johnson, Kelvin James
Jones, Malcom
Kane, Dylan Robert
Kearney, Brian J
Kiesinger, Sonya L
Kiger, Steven L
Kirby, Eric Matthew
Kline, Justin Allen
Klinger, Robert L.
Knorr, Angela K
Koch, Carson D
Kratzer, Kean
Kremer, Jodie
Kurtz, Evan
Laforme, Jordan
Lasch, Todd
Leon, Bradley Scott
Leon, Brent Lee
Leon, Devon Charlles
Lindauer, Katelyn
Livziey, Blaze Quinton
Long, Allana Faye
Long, Gregory Jonathan
Long, Jonathon Ray
Loss, John D
Lucas, Christopher P
Lutz, Brian
Mabus, Kristen
Martin, Chad
Martz, Twylia-Dawn
Maxfield, Timothy L
McCarrick, Jason
Miller, Keith A
Miller, Robert D
Miller, Tonya M
Mingle, Charles Forrest
Minium, Greg
Montague, Nicholas Ryan
Morse, Matthew
Moyer, Curtis
Noll, Bonnie M
Noll, Dennis M
Oeler, Heather M
Ortiz, Luis Anibal
Parker, Dustin
Parker, Garrett
Parrish, Shannon
Persun, Jeremy L
Peterson, Donovan Scott
Porras, Jairo
Price, Davon Marchone
Prioleau, James Theodore
Pulicicchio, Daren
Ranck, McKenzie
Reber, Brittany Ann
Reedy, Drew T
Reedy, Millard E
Reigle, Kevin Eugene
Rewolinski, Ty S
Reynolds, Michele R
Robbins, Colby William
Robbins, Lonny D
Roberts, Evelyn
Rosado Colon, Luis A
Ross, Chad
Ross, Sabrena
Rovenolt, Cathy Ann
Sampsell, Brian Eugene
Schreck, Kevin Dean
Seese, Dio M
Shipton, Blake
Sholter, Rodney H
Short, Charles S
Silverman, Molly
Simmon, Scott E
Simon, Brandon
Simon, Laura M
Sims, Brian
Smith, Cody Cheyenne
Smith, Cody Christopher
Smith, Kurtis Alonzo
Snyder, Joshua James
Snyder, Justin
Snyder, Scott Douglas
Staplins, Brittany Marie
Stokes, Donnell
Stoltzfus, Patricia C
Strahan, David E
Straub, Marshall Lamar -
Strohl, Jason Wade
Susan, Eric S
Taggart, Ginger M
Tallman, Zachary
Topliff, Nicolas D
Treibley, Kenneth M
Try, Jeffrey
Ulrich Jr., Timothy Leroy
Ulrich, Robert M
Vanover, Ronda L
Wagner, Aaron Ray
Wagner, Dylan Wesley
Wagner, Walter
Walters, Chad
Weaver, Eric E
Wells, Geoffrey
Wertz, Eric Leroy
Wesner, Preston
West, Michael
Whalen Jr., Frank
White, Annette Yvonne
Willis, Brent Ryan
Wilson, Kyle Anthony
Wise, Dashawn
Wood, Joseph
Wright, Carolyn
Young, Thomas
Zettlemoyer, Ronald`;
let employees = employeeString.split("\n");
employees.sort();

let prizesString = `Leer Cooler
Leer Cooler
Leer Cooler
Leer Cooler
Leer Beanie w/ $50 Amazon card
Leer Beanie w/ $50 Amazon card
Leer Beanie w/ $50 Amazon card
Leer Beanie 
Leer Beanie 
Leer Beanie 
Leer Beanie 
Leer Beanie 
Leer Beanie 
Leer Beanie 
Leer ball cap 
Leer ball cap 
Leer ball cap 
Leer ball cap 
Leer ball cap 
Leer ball cap 
Duffle bag w/ flashlight
Cargo caddy w/ flashlight
Cargo caddy w/ flashlight
Cargo caddy w/ flashlight
$100 Weis Cards
$100 Weis Cards
$100 Weis Cards
$100 Weis Cards
$100 Weis Cards
$100 Weis Cards
$100 Weis Cards
$100 Weis Cards
$100 Weis Cards
L Leer Hoodie 
L Leer Hoodie 
XL Leer Hoodie 
XL Leer Hoodie`;
let prizes = prizesString.split("\n");

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
    
    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
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
    let employeeHead = document.getElementById("employeeHeader");
    employeeHead.innerHTML = "Employees (" + employees.length + ")";
    let employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = "";
    employees.forEach(function(employee) {
        let listItem = document.createElement("li");
        listItem.innerText = employee;
        listItem.className = "list-group-item";
        
        let button = document.createElement("button");
        button.innerHTML = "<i class='bi bi-x-square-fill'></i>";
        button.classList.add("btn", "btn-danger", "btn-sm", "ms-2"); // Bootstrap classes
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
