console.log("login.js loaded");

let userLogin = {
	username: "Jack Reacher",
	password: "d7"
};
let msg = "Please enter password for user " + userLogin.username; 
let input = "";
let numTries = 3;

input = window.prompt(msg);
while(numTries-1 > 0){
	if(input !== userLogin.password){
		console.log("Please enter the correct password");
		numTries = numTries -1;
		input = window.prompt(msg);
	} else {
		console.log("Welcome");
		break;
	}
}
