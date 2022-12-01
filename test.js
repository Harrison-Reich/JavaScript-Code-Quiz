// defining variables
const currentIndex = 0;

// array of questions
const questions = [
    {
        question: "This is questions 1",
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
    document.getElementById('title-box').classList.add('d-none');
    document.getElementById('questions-container').classList.add = ('d-block');
    setQuestions();
}

// set questions function
function setQuestions() {
    let currentQuestion = questions[currentIndex];

    const questionTitleElement = document.getElementById('question-title');
    questionTitleElement.textContent = currentQuestion.question;

    const questionChoicesElement = document.getElementById('question-choices');
    currentQuestion.choices.forEach(choice => {
        questionChoicesElement.innerHTML += `<button class="btn btn-primary btnWidth">${choice}</button>`
    })
}