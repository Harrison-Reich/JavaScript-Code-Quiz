// defining variables by ID
let currentIndex = 0;
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionTitleElement = document.getElementById('question-title');
const answerChoicesElement = document.getElementById('answer-choices');
var userpicks = []


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
        question: "What is brown and sticky?",
        choices: ["Pick this one", "Or this one", "Not this one", "Maybe this one"],
    },
    {
        // question 7
        question: "What is brown and sticky?",
        choices: ["Pick this one", "Or this one", "Not this one", "Maybe this one"],
    },
    {
        // question 8
        question: "What is brown and sticky?",
        choices: ["Pick this one", "Or this one", "Not this one", "Maybe this one"],
    },
    {
        // question 9
        question: "What is brown and sticky?",
        choices: ["Pick this one", "Or this one", "Not this one", "Maybe this one"],
    },
    {
        // question 10
        question: "What is brown and sticky?",
        choices: ["Pick this one", "Or this one", "Not this one", "Maybe this one"],
    },
]

// answer questions array
const answers = [
    1,1,3,2,3,1,1,1,1,1
]

// when clicked, the start button will hide the code quiz window and show the question container while executing the startQuiz function
startButton.addEventListener('click', () => {
    document.getElementById('title-box').classList.add('d-none');
    document.getElementById('questions-container').classList.remove('d-none');
    showQuestion();
})

// when called, startQuiz will get the current question index and populate the question title and answers according to the question index
const showQuestion = () => {
    if (currentIndex === questions.length) {
        endQuiz();
    } else {
        let currentQuestion = questions[currentIndex];
    
        questionTitleElement.innerHTML = currentQuestion.question
        
        currentQuestion.choices.forEach((choice, userchoice) => {
            answerChoicesElement.innerHTML += `<button onclick="userpick(${userchoice})" class="btn btn-primary btnWidth">${choice}</button>`
        });
    }
}

const userpick = (answerpicked) => {
    userpicks.push(answerpicked)
    console.group(answerpicked)
    currentIndex++
    setNextQuestion();
    showQuestion();
}

const setNextQuestion = () => {
    questionTitleElement.innerHTML = ""
    answerChoicesElement.innerHTML = ""
}

const endQuiz = () => {
    document.getElementById('questions-container').classList.add('d-none');
    document.getElementById('scores-container').classList.remove('d-none');
    let correctanswers = 0
    for (let i = 0; i < questions.length; i++) {
        if (answers [i] === userpicks [i]) {
            correctanswers++
        }
    }
    console.log(correctanswers)
}