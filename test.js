// defining variables
const currentIndex = 0;

// array of questions
const questions = [
    {
        question: "Which team had the most recent Super Bowl? ",
        choices: ["The Packers", "The Saints", "The Broncos", "The Patriots"],
        answer: 3
    },
    {
        question: "This is question 2",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: 2
    },
    {
        question: "This is question 3",
        choices: ["Pick this one", "Or this one", "Not this one", "Maybe this one"],
        answer: 3
    },
]

// start quiz button function
// hiding start page and showing questions
function startButton() {
    document.getElementById('title-box').classList.add('d-none');
    document.getElementById('questions-container').classList.remove('d-none');
    setQuestions();
}

// set questions function
// populating div with questions and choices based on index of questions array
function setQuestions() {
    let currentQuestion = questions[currentIndex];
    // setting question
    const questionTitleElement = document.getElementById('question-title');
    questionTitleElement.textContent = currentQuestion.question;
    // setting choices as buttons
    const questionChoicesElement = document.getElementById('question-choices');
    currentQuestion.choices.forEach(choice => {
        questionChoicesElement.innerHTML += `<button class="btn btn-primary btnWidth">${choice}</button>`
    });
}