const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

function setNextQuestion() {

}

function selectAnswer() {

}