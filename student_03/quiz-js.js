var startButton = document.getElementById("start");
var questionField = document.getElementById("question");
var answerA = document.getElementById("answer1");
var answerB = document.getElementById("answer2");
var answerC = document.getElementById("answer3");
var counter = document.getElementById("counter");
var showScore = document.getElementById("score");
var questionMaker = document.getElementById("questionMarker");

var questions = [
	{
		question : "What is the highest waterfall in the world?",
		answerA : "Angel Falls",
		answerB : "Piduruthalagala Falls",
		answerC : "Niagara Falls",
		correct : "A"
	},{
		question : "Christ The Redeemer Statue on Corcovado Mountain is located in which country?",
		answerA : "Canada",
		answerB : "England",
		answerC : "Brazil",
		correct : "C"
	},{
		question : "Taj Mahal is located in which country?",
		answerA : "India",
		answerB : "Pakistan",
		answerC : "Singapore",
		correct : "A"
	},{
		question : "If you want to try to see the Loch Ness Monster where would you go?",
		answerA : "Sweden",
		answerB : "Scotland",
		answerC : "Germany",
		correct : "B"
	},{
		question : "Where would you go to find this iconic opera house?",
		answerA : "USA",
		answerB : "Russia",
		answerC : "Australia",
		correct : "C"
	},{
		question : "What is the capital of Sri Lanka?",
		answerA : "Colombo",
		answerB : "Sri JayawardanaPura",
		answerC : "Galle",
		correct : "B"
	},{
		question : "On an African Safari which is an animal that you won't see in Africa?",
		answerA : "Tigers",
		answerB : "Lion",
		answerC : "Giraffe",
		correct : "A"
	},{
		question : "What is Europe’s most mountainous country?",
		answerA : "Spain",
		answerB : "Switzerland",
		answerC : "England",
		correct : "B"
	},{
		question : "What is the world's highest capital?",
		answerA : "Kathmandu, Nepal",
		answerB : "Quito, Ecuador",
		answerC : "La Paz, Bolivia",
		correct : "C"
	},{
		question : "What is the highest mountain in Sri Lanka?",
		answerA : "Piduruthalagala",
		answerB : "Adams Peak",
		answerC : "Hakgala",
		correct : "A"
	}
]

var currentQuestion = 0;
var lastQuestion = questions.length-1;
var count = 0;
var questionTime = 10;
var timer;
var score = 0;
function startQuiz(){
	start.parentNode.removeChild(start);
	setQuestion();
	questionCounter();
	setMarker();
	timer = setInterval(questionCounter,1000);
}

function setQuestion(){
	var qNumber = questions[currentQuestion];
	questionField.innerHTML = qNumber.question;
	answerA.innerHTML = qNumber.answerA;
	answerB.innerHTML = qNumber.answerB;
	answerC.innerHTML = qNumber.answerC;
	
}

function questionCounter(){
	if (count<questionTime){
		counter.innerHTML = count;
		count++
	}else{
		proceedToNext();
		markIncorrect();
	}
}

function proceedToNext(){
	count = 0;
	if(currentQuestion < lastQuestion){
		currentQuestion++;
		setQuestion();
	}else{
		clearInterval(timer);
		showScore.innerHTML = score;
	}
}

function answerCheck(answer){
	if(answer == questions[currentQuestion].correct){
		score +=2;
		markCorrect();
	}else{
		score -=1;
		markIncorrect();
	}
	proceedToNext();
}

function setMarker(){
	for(var qNumber = 0; qNumber<=lastQuestion; qNumber++){
		questionMaker.innerHTML += "<span class='marker' id="+ qNumber + "></span>"
	}
}

function markCorrect(){
	document.getElementById(currentQuestion).style.backgroundColor = "green";
}

function markIncorrect(){
	document.getElementById(currentQuestion).style.backgroundColor = "red";
}
