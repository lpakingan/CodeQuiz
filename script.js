var timerEl = document.getElementById('quizTimer');
var startScreen = document.querySelector(".start_screen")
var questionPrompt = document.getElementById('question')
var answersPrompt = document.querySelector(".answers")

var possibleQuestions = 
["Commonly used data types do NOT include _____.",
"The condition of an if/else statement is enclosed with _____.",
"Arrays in JavaScript can be used to store _____.",
"String values must be enclosed within _____ when being assigned to variables.",
"A very useful tool used during development and debugging for printing content to the debugger is:"]

var quizAnswers = [
['strings', 'booleans', 'alerts', 'numbers'],
['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
['commas', 'curly brakcets', 'quotes', 'parenthesis'],
['JavaScript', 'terminal/bash', 'for loops', 'console.log']]

function quizTimer() {
    var quizTime = 80;
    startScreen.style.display = 'none';

    var quizInterval = setInterval(function () {
        if (quizTime >= 10) {
            timerEl.textContent = quizTime + ' seconds';
            quizTime--;
        } else if (quizTime > 1 && quizTime < 10) {
            timerEl.textContent = 'Hurry! ' + quizTime + ' seconds left!';
            quizTime--;
        } else if (quizTime === 1) {
            timerEl.textContent = 'Hurry! ' + quizTime + ' second left!';
            quizTime--;
        } else {
            timerEl.textContent = 'Time\'s up!';
            clearInterval(quizInterval);
        }
    }, 1000);
}

// will pick a random question from the question array to begin the quiz with
// after the question is picked, the relevant index of the question is used to find the corresponding answers
// the question and answers are printed to the page
function randomQuestion() {
    pickedQuestion = possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)];
    answerIndex = possibleQuestions.indexOf(pickedQuestion)
    questionPrompt.textContent = pickedQuestion
    answersPrompt.textContent = quizAnswers[answerIndex]
}

startScreen.style.display = 'none';
randomQuestion()

