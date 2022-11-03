// code structure from https://www.youtube.com/watch?v=riDzcEQbX6k with intention to adjust

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function checkAnswer() {

}

const questions = [
    {
        question: 'How many tones exist in the chromatic scale?',
        answers: [
            { text: '8', correct: false},
            { text: '9', correct: false},
            { text: '14', correct: false},
            { text: '12', correct: true}
        ]
    },
    {
        question: 'Who wrote the song "Blinded By The Light"?',
        answers: [
            { text: 'Bob Dylan', correct: false},
            { text: 'Bob Marley', correct: false},
            { text: 'Bruce Springsteen', correct: true},
            { text: 'Manfred Mann', correct: false}
        ]
    },
    {
        question: 'Where does the "Nyckelharpa" come from?',
        answers: [
            { text: 'Sweden', correct: true},
            { text: 'Norway', correct: false},
            { text: 'Denmark', correct: false},
            { text: 'Finland', correct: false}
        ]
    },
    {
        question: 'Where does the "Hardingfela" come from?',
        answers: [
            { text: 'Sweden', correct: false},
            { text: 'Norway', correct: true},
            { text: 'Denmark', correct: false},
            { text: 'Finland', correct: false}
        ]
    },
    {
        question: 'What is the average radio output frequency',
        answers: [
            { text: '432 Hz', correct: false},
            { text: '528 Hz', correct: false},
            { text: '420 Hz', correct: false},
            { text: '440 Hz', correct: true}
        ]
    },
    {
        question: 'What is a "Stradivarius"?',
        answers: [
            { text: 'Violin', correct: true},
            { text: 'Piano', correct: false},
            { text: 'Program', correct: false},
            { text: 'Guitar', correct: false}
        ]
    }
]