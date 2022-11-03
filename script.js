const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'How many tones exist in the chromatic scale?',
        answer: [
            { text: '8', correct: false},
            { text: '9', correct: false},
            { text: '14', correct: false},
            { text: '12', correct: true}
        ]
    },
    {
        question: 'Who wrote the song "Blinded By The Light"?',
        answer: [
            { text: 'Bob Dylan', correct: false},
            { text: 'Bob Marley', correct: false},
            { text: 'Bruce Springsteen', correct: true},
            { text: 'Manfred Mann', correct: false}
        ]
    },
    {
        question: 'Where does the "Nyckelharpa" come from?',
        answer: [
            { text: 'Sweden', correct: true},
            { text: 'Norway', correct: false},
            { text: 'Denmark', correct: false},
            { text: 'Finland', correct: false}
        ]
    },
    {
        question: 'Where does the "Hardingfela" come from?',
        answer: [
            { text: 'Sweden', correct: false},
            { text: 'Norway', correct: true},
            { text: 'Denmark', correct: false},
            { text: 'Finland', correct: false}
        ]
    },
    {
        question: 'What is the average radio output frequency',
        answer: [
            { text: '432 Hz', correct: false},
            { text: '528 Hz', correct: false},
            { text: '420 Hz', correct: false},
            { text: '440 Hz', correct: true}
        ]
    },
    {
        question: 'What is a "Stradivarius"?',
        answer: [
            { text: 'Violin', correct: true},
            { text: 'Piano', correct: false},
            { text: 'Program', correct: false},
            { text: 'Guitar', correct: false}
        ]
    }
]