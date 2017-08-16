

console.log("security_questions.js loaded");

var questionOne = { 
	question: "what was your first pet's name?",
	expectedAnswer: "Fluffy"
};
var questionTwo = { 
	question: "who was your childhood hero?",
	expectedAnswer: "Goku"
};
var questionThree = { 
	question: "where do you like to go to travel?",
	expectedAnswer: "Heaven!"
};
var security_questions = [];
var inputAnswer = "";

security_questions[0] = questionOne;
security_questions[1] = questionTwo; 
security_questions[2] = questionThree;  

for (let i = 0; i < security_questions.length; i ++){
	inputAnswer = window.prompt(security_questions[i].question);
	if(inputAnswer !== security_questions[i].expectedAnswer){
		console.log("YOU CRIMINAL!");
		break;
	}
}