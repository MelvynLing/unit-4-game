// Variables
		//crystal variables - 
					var crystal = {
						Sapphire:
						{
							value:0
						},
						diamond:
						{
							value:0
						},
						Emerald:
						{
							value:0
						},
						ruby:
						{
							value:0
						},
					}

		//score	
					var currentScore = 0;
					var targetScore = 0;

		//win&losses
					var winCount = 0;
					var lossCount = 0;

//functions

	//random number function
		function getRandom(min,max) {
		return Math.floor(Math.random() * (max - min +1)) + min;
		}


	//start
		function startGame() {

	//reset scores
		currentScore=0;

	//new target score (btw 19 & 120)
		targetScore=getRandom(19,120);

	//diff values for crystals (btw 1 & 12)
		crystal.Sapphire.value = getRandom(1,12);
		crystal.diamond.value = getRandom(1,12);
		crystal.Emerald.value = getRandom(1,12);
		crystal.ruby.value = getRandom(1,12);

	//change html to reflect changes happening
		$("#yourScore").html(currentScore);
		$("#targetScore").html(targetScore);

	//test/debug
		console.log ("--------------------------------------------------------")
		console.log ("target score = " + targetScore);
		console.log ("sapphire score = " +  crystal.Sapphire.value);
		console.log ("diamond score = " + crystal.diamond.value);
		console.log ("emerald score = " + crystal.Emerald.value);
		console.log ("ruby score = " + crystal.ruby.value);
		console.log ("--------------------------------------------------------")
}

//clickevents
var addValues = function(crystal) {

	//changes currentScore
	currentScore = currentScore + crystal.value;

	//effects HTML scores
	$("#yourScore").html(currentScore);

	//call checkwin
	checkWin();

	//test debug
	console.log("your score is " + currentScore);
}


//check to see if won or loss then reset game

function checkWin () {

	//check if current score is larger than targetscore
	if(currentScore > targetScore) {
		alert("Sorry, you lose!");
		console.log("LOSER");

		//add to loss counter
		lossCount++;

		//effects HTML
		$("#lossCount").html(lossCount);

		//restartgame
		startGame();

	}
		else if (currentScore==targetScore) {
			alert("Congratulations! You win!");
		console.log("WINNER");

		//add to win counter
		winCount++;

		//effects HTML
		$("#winCount").html(winCount);

		//restartgame
		startGame();
	}

}

//main process

$("#Sapphire").click(function(){
	addValues(crystal.Sapphire)
	});

$("#diamond").click(function(){
	addValues(crystal.diamond)
	});

$("#Emerald").click(function(){
	addValues(crystal.Emerald)
	});

$("#ruby").click(function(){
	addValues(crystal.ruby)
	});


	//starts game 1st time

	startGame();