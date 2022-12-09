// defining variables by ID
const startButton = document.getElementById('start-button');
const questionTitleElement = document.getElementById('question-title');
const answerChoicesElement = document.getElementById('answer-choices');
// array of questions
const questions = [
    {
        // question 1
        question: "Inside which HTML element do we put the JavaScript? ",
        choices: ["script", "js", "scripting", "javascript"],
    },
    {
        // question 2
        question: "JavaScript is a strictly typed language",
        choices: ["True", "False"],
    },
    {
        // question 3
        question: "Which of the following is not a primitive data type?",
        choices: ["number", "string", "null", "object"],
    },
    {
        // question 4
        question: "An Array is what kind of datastructure?",
        choices: ["link-list", "tree", "list"],
    },
    {
        // question 5
        question: "JavaScript was invented by Netscape, who is now known as",
        choices: ["Microsoft", "Mozilla", "Google", "Apple"],
    },
    {
        // question 6
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseclick", "onchange", "onmouse", "onclick"],
    },
    {
        // question 7
        question: "The first index of an array is",
        choices: ["Any", "1", "0", "100"],
    },
    {
        // question 8
        question: "What does DOM stand for?",
        choices: ["Date of Maker", "Document Object Model", "Document Object Maker", "Document Oversee Model"],
    },
    {
        // question 9
        question: "String values are enclosed within",
        choices: ["curly brackets", "parentheses", "square brackets", "quotation marks"],
    },
    {
        // question 10
        question: "Who is the best team in the AFC WEST?",
        choices: ["The Denver Broncos", "The Las Vegas Raiders", "The Los Angeles Chargers", "The Kansas City Chiefs"],
    },
]
// correct answers array
const answers = [
    0,0,2,1,2,3,2,1,3,0
]
// current question index
let currentIndex = 0;
// array that will track user answer picks
let userpicks = []
// when clicked, the start button will hide the code quiz window and show the question container while executing the startButton function
startButton.addEventListener('click', () => {
    document.getElementById('title-box').classList.add('d-none');
    document.getElementById('questions-container').classList.remove('d-none');
    showQuestion();
})
// when called, startQuiz will get the current question index and populate the question title and answers according to the question index
const showQuestion = () => {
    // ending quiz if no more questions
    if (currentIndex === questions.length) {
        endQuiz();
    } else {
        // injecting HTML into index with each question and chocies
        let currentQuestion = questions[currentIndex];
        questionTitleElement.innerHTML = currentQuestion.question
        // foreach array method looping over answer choices and creating buttons
        currentQuestion.choices.forEach((choice, userchoice) => {
            answerChoicesElement.innerHTML += `<button onclick="userpick(${userchoice})" class="btn btn-primary btnWidth">${choice}</button>`
        });
    }
}
// onclick function that tracks the users answer choice, increments the current question index and calls setNextQestion and showQuestion functions
const userpick = (answerpicked) => {
    userpicks.push(answerpicked)
    console.group(answerpicked)
    currentIndex++
    setNextQuestion();
    showQuestion();
}
// clearing html data
const setNextQuestion = () => {
    questionTitleElement.innerHTML = ""
    answerChoicesElement.innerHTML = ""
}
// hides questions container, shows high scores container
const endQuiz = () => {
    document.getElementById('questions-container').classList.add('d-none');
    document.getElementById('scores-container').classList.remove('d-none');
    // comparing correct answers array to user answer choices array and incrementing correct answers count
    let correctanswers = 0
    for (let i = 0; i < questions.length; i++) {
        if (answers [i] === userpicks [i]) {
            correctanswers++
        }
    }
    let userScore = document.getElementById('user-score')
    userScore.innerHTML = correctanswers
}