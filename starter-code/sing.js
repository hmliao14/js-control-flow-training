console.log("sing.js loaded");

var numVerse = window.prompt("How many times you want to hear?");

var sing = function() {
	var numBottle = numVerse;
	var lineOne = numBottle + " bottles of beer on the wall, " 
					+ numBottle + " bottles of beer!";
	var lineTwo = "";

	if(numBottle===2) {
		numBottle--;
		lineTwo = "Take one down and pass it around, " 
					+ numBottle + " bottle of beer on the wall!";
	} else if (numBottle ===1) {
		lineOne = numBottle + " bottle of beer on the wall," 
					+ numBottle + " bottle of beer!";
		lineTwo = "Take one down and pass it around, " 
					+ "no more bottles of beer on the wall!";
	} else {
		numBottle--;
		lineTwo = "Take one down and pass it around, "
					+ numBottle + " bottles of beer on the wall"; 
	}
	console.log(lineOne + '\n' + lineTwo);
};

while(numVerse > 0) {
	sing();
	numVerse = numVerse - 1;
}
