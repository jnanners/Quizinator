const questionContainerEl = document.querySelector("#question-container");

const startButtonEl = document.querySelector("#start-btn");

const questionEl = document.querySelector("#question");

const answer1ButtonEl = document.querySelector("#answer1");
const answer2ButtonEl = document.querySelector("#answer2");
const answer3ButtonEl = document.querySelector("#answer3");
const answer4ButtonEl = document.querySelector("#answer4");

startButtonEl.addEventListener("click", startGame);

answer1ButtonEl.addEventListener("click", selectAnswer);
answer2ButtonEl.addEventListener("click", selectAnswer);
answer3ButtonEl.addEventListener("click", selectAnswer);
answer4ButtonEl.addEventListener("click", selectAnswer);

function startGame() {
    startButtonEl.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    setNextQuestion();
};

function setNextQuestion() {
    for(var i = 0; i < questionArr.length; i++){
        questionEl.innerText = questionArr[i].question;

        answer1ButtonEl.innerText = questionArr[i].answers[0].text;
        answer2ButtonEl.innerText = questionArr[i].answers[1].text;
        answer3ButtonEl.innerText = questionArr[i].answers[2].text;
        answer4ButtonEl.innerText = questionArr[i].answers[3].text;
    }
};

function selectAnswer(event) {
    const targetEl = event.target;
    console.log(targetEl);
};

const questionArr = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "strings", correct: false},
            { text: "booleans", correct: false},
            { text: "alerts", correct: true},
            { text: "numbers", correct: false}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with _________.",
        answers: [
            { text: "quotes", correct: false},
            { text: "parenthesis", correct: true},
            { text: "curly brackets", correct: false},
            { text: "square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        answers: [
            { text: "numbers and strings", correct: false},
            { text: "other arrays", correct: false},
            { text: "booleans", correct: false},
            { text: "all of the above", correct: true}
        ]
    },
    {
        question: "String values must be enclosed with _______ when being assigned to variabels",
        answers: [
            { text: "quotes", correct: true},
            { text: "commas", correct: false},
            { text: "curly brackets", correct: false},
            { text: "parenthesis", correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "JavaScript", correct: false},
            { text: "terminal/bash", correct: false},
            { text: "for loops", correct: false},
            { text: "console.log", correct: true}
        ]
    }
]