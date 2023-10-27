let runs = 0;
let overs = 0;
let balls = 0;
let wickets = 0;
let isAllOut = false;
let actionStack = [];

function incrementRuns(runValue) {
    if (!isAllOut) {
        runs += runValue;
        document.getElementById("runs").innerText = runs;
        actionStack.push(() => {
            runs -= runValue;
            document.getElementById("runs").innerText = runs;
        });
    }
}

function incrementBalls() {
    if (!isAllOut) {
        balls++;
        if (balls === 6) {
            balls = 0;
            overs++;
            document.getElementById("overs").innerText = overs;
        }
        document.getElementById("balls").innerText = balls;
        actionStack.push(() => {
            balls--;
            if (balls < 0) {
                balls = 5;
                overs--;
                document.getElementById("overs").innerText = overs;
            }
            document.getElementById("balls").innerText = balls;
        });
    }
}

function incrementWickets() {
    if (!isAllOut) {
        wickets++;
        document.getElementById("wickets").innerText = wickets;
        if (wickets === 10) {
            isAllOut = true;
            alert("All Out!");
        }
        actionStack.push(() => {
            wickets--;
            document.getElementById("wickets").innerText = wickets;
            isAllOut = false;
        });
    }
}

function undoAction() {
    if (actionStack.length > 0) {
        const undoFunction = actionStack.pop();
        undoFunction();
    }
}

function resetGame() {
    runs = 0;
    overs = 0;
    balls = 0;
    wickets = 0;
    isAllOut = false;
    actionStack = [];

    document.getElementById("runs").innerText = "0";
    document.getElementById("overs").innerText = "0";
    document.getElementById("balls").innerText = "0";
    document.getElementById("wickets").innerText = "0";
}
