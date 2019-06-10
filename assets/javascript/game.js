//global variables
var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
        
    },
    red: {
        name: "Red",
        value: 0
        
    },
    yellow: {
        name: "Yellow",
        value: 0
        
    }
    
};
//scores
var currentScore = 0;
var targetScore = 0;
//wins and losses
var winCount = 0;
var lossCount = 0;


//Functions
//formula for getting random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
var startGame = function(){
//reset the current score
currentScore = 0;
//set new target score (between 19 and 120)
targetScore = getRandom(19, 120);
//set different values for each of the crystals (1-12)
crystal.blue.value    = getRandom(1, 12);
crystal.red.value     = getRandom(1, 12);
crystal.green.value   = getRandom(1, 12);
crystal.yellow.value  = getRandom(1, 12);

// change the HTML to reflect all of these changes
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);


// testing console

console.log("Target Score: " + targetScore);
console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yelow: " + crystal.yellow.value);

}

//Respond to clicks on the crystals
var addValues = function(crystal) {
    //Change currentScore
    currentScore = currentScore + crystal.value;
    //Update the HTML to reflect changes in currentScore:
    $("#yourScore").html(currentScore);
    //call the checkWin Function
    checkWin();
//testing console
console.log("Your Score: " + currentScore);
}

//check to see is user Won of Lost and Reset the Game:
var checkWin = function() {
//check if currentScore is larger than targetScore:
if(currentScore > targetScore) {
    alert("Sorry. You Lost!");
    console.log("You Lost");
    //add to lost counter
    lossCount++;
    //show/change loss counter on html
    $("#lossCount").html(lossCount);
    //Restart the game
    startGame();
}
else if (currentScore == targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");
    //add to win counter
    winCount++;
    //show/update/change in html page
    $("#winCount").html(winCount);

    //Restart the game
    startGame();
}

}


//starts the game!

startGame();

$("#blue").click(function() {
    addValues(crystal.blue);
});
$("#red").click(function() {
    addValues(crystal.red);
});
$("#green").click(function() {
    addValues(crystal.green);
});
$("#yellow").click(function() {
    addValues(crystal.yellow);
});






