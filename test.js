// defining variables
const questionTextElement = document.getElementById('question-text');
const questionChoicesElement = document.getElementById('question-choices');
const currentQuestion = 0;

// array of questions
const questions = [
    {
        question: "What is my favorite NFL team?",
        choices: ["The Packers", "The Saints", "The Broncos", "The Patriots"],
        answer: 3
    },
    {
        question: "This is question 2",
        choices: ["The Packers", "The Saints", "The Broncos", "The Patriots"],
        answer: 3
    },
    {
        question: "This is question 3",
        choices: ["The Packers", "The Saints", "The Broncos", "The Patriots"],
        answer: 3
    },
]

// start quiz button function
function startButton() {
    document.getElementById('title-box').style.visibility = 'hidden';
    document.getElementById('questions-container').style.visibility = 'visible';
    console.log ('Begin quiz')
}

// set questions function
function setQuestions() {
    const currentQuestion = questions[currentQuestion];
    const questionTextElement = document.getElementById('question-text');
    questionTextElement.textContent = currentQuestion.question
    const questionChoicesElement = document.getElementById('question-choices') 
}

setQuestions();