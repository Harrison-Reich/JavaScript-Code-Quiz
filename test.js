// defining variables
const currentIndex = 0;
const startButton = document.getElementById('startButton');

// array of questions
const questions = [
    {
        // question 1
        question: "Which team had the most recent Super Bowl? ",
        choices: ["The Packers", "The Saints", "The Broncos", "The Patriots"],
        answer: 3
    },
    {
        // question 2
        question: "What is the best ice cream flavor?",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: 2
    },
    {
        // question 3
        question: "What is brown and sticky?",
        choices: ["Pick this one", "Or this one", "Not this one", "Maybe this one"],
        answer: 1
    },
]

// when clicked, the start button will hide the code quiz window and show the question container while executing the startQuiz function
startButton.addEventListener('click', () => {
    document.getElementById('title-box').classList.add('d-none');
    document.getElementById('questions-container').classList.remove('d-none');
    startQuiz();
})

// when called, startQuiz will get the current question index and populate the question title and answers according to the question index
const startQuiz = () => {
    let currentQuestion = questions[currentIndex];

    const questionTitleElement = document.getElementById('question-title');
    questionTitleElement.innerHTML = currentQuestion.question
    
    const answerChoicesElement = document.getElementById('answer-choices');
    currentQuestion.choices.forEach(choice => {
        answerChoicesElement.innerHTML += `<button class="btn btn-primary btnWidth">${choice}</button>`
    });
}