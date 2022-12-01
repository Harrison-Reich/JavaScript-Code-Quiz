// defining variables
const questionTitleElement = document.getElementById('question-text');
const questionChoicesElement = document.getElementById('question-choices');
const currentIndex = 0;

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
    setQuestions();
}

// set questions function
function setQuestions() {
    let currentQuestion = questions[currentIndex];

    let questionTitleElement = document.getElementById('question-title');
    questionTitleElement.textContent = currentQuestion.question;

    let questionChoicesElement = document.getElementById('question-choices');
    currentQuestion.choices.forEach((choices, i) => {
        let choiceItems = document.createElement('button');
        choiceItems.setAttribute('class', 'chocies');
        choiceItems.setAttribute('value', 'choices');

        choiceItems.textContent = i + 1 + '. ' + choices;
        choices.onclick = questionClick;
        questionChoicesElement.appendChild('choiceItems')
    })
}