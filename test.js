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
        question: "Which team had the most recent Super Bowl? ",
        choices: ["The Packers", "The Saints", "The Broncos", "The Patriots"],
    },
    {
        // question 2
        question: "What is the best ice cream flavor?",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    },
    {
        // question 3
        question: "What is brown and sticky?",
        choices: ["Pick this one", "Or this one", "Not this one", "Maybe this one"],
    },
]

const answers = [
    3,0,2
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
    let correctanswers = 0
    for (let i = 0; i < questions.length; i++) {
        if (correctanswers [i] === userpicks [i]) {
            correctanswers++
        }
    }
    console.log(correctanswers)
}