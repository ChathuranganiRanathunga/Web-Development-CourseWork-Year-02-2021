var startButton = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionField = document.getElementById("question");
var answerA = document.getElementById("answer1");
var answerB = document.getElementById("answer2");
var answerC = document.getElementById("answer3");
var counter = document.getElementById("counter");
var showScore = document.getElementById("score");
var questionMaker = document.getElementById("questionMarker");
var timerBar = document.getElementById("timerBar");

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

var currentQuestion;
var lastQuestion = questions.length-1;
var count = 0;
var questionTime = 10;
var timer;
var score = 0;
function startQuiz(){
	currentQuestion = 0;
	score = 0;
	showScore.innerHTML = "";
	start.style.display = "none";
	quiz.style.display = "block";
	showScore.style.display = "none";
	setQuestion();
	setTimerBar();
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
		counter.innerHTML = questionTime-count-1;
		document.getElementById("time"+count).style.backgroundColor = "transparent";
		count++
	}else{
		markIncorrect();
		proceedToNext();
		
	}
}

function proceedToNext(){
	count = 0;
	if(currentQuestion < lastQuestion){
		currentQuestion++;
		setQuestion();
		counter.innerHTML = "10";
		timerBar.querySelectorAll('*').forEach(n => n.remove());
		setTimerBar();
	}else{
		clearInterval(timer);
		setScore();
		endQuiz();
		
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
		questionMaker.innerHTML += "<span class='marker' id="+ qNumber + "></span>";
	}
}

function markCorrect(){
	document.getElementById(currentQuestion).style.backgroundColor = "green";
}

function markIncorrect(){
	document.getElementById(currentQuestion).style.backgroundColor = "red";
}

function endQuiz(){
	quiz.style.display = "none";
	start.style.display = "inline-block";
	questionMaker.innerHTML = "";
	showScore.style.display = "block";
	start.innerText = "Retake"; 
	timerBar.innerHTML = "";
	
}

function setScore(){
	if(score>=15){
		showScore.style.backgroundColor = "rgba(64, 255, 31, 50%)";
	}else if(score>=5){
		showScore.style.backgroundColor = "rgba(255, 233, 31, 50%)";
	}else{
		showScore.style.backgroundColor = "rgba(255, 53, 31, 50%)";
	}
	showScore.innerHTML += questionMaker.innerHTML + "<br>";
	showScore.innerHTML += "Your Score is : " + score;
}

function setTimerBar(){
	for(var time=questionTime-1; time>=0; time--){
		timerBar.innerHTML += "<span class='timer-block' id=time"+time+"></span>";
	}
}
