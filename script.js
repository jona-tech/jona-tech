// code structure from https://www.youtube.com/watch?v=riDzcEQbX6k with a few adjustments

/**
 * Declared variables to target elements in HTML document
 */
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultMessagesElement = document.getElementById('result-messages')

let shuffledQuestions, currentQuestionIndex
let scoreBox = document.getElementById('score')

/**
 * Event listeners to make start button and next button work
 */
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
});
// score counter from Love Maths project
function incrementScore() {
    let oldScore = parseInt(document.getElementById('count-correct').innerText)
    document.getElementById('count-correct').innerText = ++oldScore
};

/**
 * function to make start button disappear and question container appear with randomly sorted questions from array
 */
function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    document.getElementById('count-correct').innerText = '0';
};

/**
 * code to move on to next question and reset the container
 */

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

/**
 * function to show question and options from the array list of question and answers and check if answer is correct
 */

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
};

/**
 * resets question container after answering */

function resetState() {
    resultMessagesElement.classList.add('hide')
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
};


/**
 * function to select option, check correct answer, increment score if correct, show a restart button if all questions have been answered
 */

function selectAnswer(e) {
    let selectedButton = e.target;
    let correct = selectedButton.dataset.correct;
    if (correct) {
        incrementScore()
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        button.disabled = true
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        resultMessagesElement.classList.remove('hide')
        let score = parseInt(document.getElementById('count-correct').innerText)
        if (score === 10){
            resultMessagesElement.innerText = 'Excellent job! Play again?'
        } else if (score >= 5) {
            resultMessagesElement.innerText = 'Good job! Play again?'
        } else {
            resultMessagesElement.innerText = 'Better luck next time'
        }
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        questionContainerElement.classList.add('hide')
    }
};

/**
 * functions to make right answer button green and wrong answers grey
 */

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
};

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
};

/**
 * array of questions, options and correct answers
 */

const questions = [{
        question: 'How many tones exist in the chromatic scale?',
        answers: [{
                text: '8',
                correct: false
            },
            {
                text: '9',
                correct: false
            },
            {
                text: '14',
                correct: false
            },
            {
                text: '12',
                correct: true
            }
        ]
    },
    {
        question: 'Who wrote the song "Blinded By The Light"?',
        answers: [{
                text: 'Bob Dylan',
                correct: false
            },
            {
                text: 'Bob Marley',
                correct: false
            },
            {
                text: 'Bruce Springsteen',
                correct: true
            },
            {
                text: 'Manfred Mann',
                correct: false
            }
        ]
    },
    {
        question: 'Where does the "Nyckelharpa" come from?',
        answers: [{
                text: 'Sweden',
                correct: true
            },
            {
                text: 'Norway',
                correct: false
            },
            {
                text: 'Denmark',
                correct: false
            },
            {
                text: 'Finland',
                correct: false
            }
        ]
    },
    {
        question: 'Where does the "Hardingfela" come from?',
        answers: [{
                text: 'Sweden',
                correct: false
            },
            {
                text: 'Norway',
                correct: true
            },
            {
                text: 'Denmark',
                correct: false
            },
            {
                text: 'Finland',
                correct: false
            }
        ]
    },
    {
        question: 'What is the average radio output frequency',
        answers: [{
                text: '432 Hz',
                correct: false
            },
            {
                text: '528 Hz',
                correct: false
            },
            {
                text: '420 Hz',
                correct: false
            },
            {
                text: '440 Hz',
                correct: true
            }
        ]
    },
    {
        question: 'What is a "Stradivarius"?',
        answers: [{
                text: 'Violin',
                correct: true
            },
            {
                text: 'Piano',
                correct: false
            },
            {
                text: 'Program',
                correct: false
            },
            {
                text: 'Guitar',
                correct: false
            }
        ]
    },
    {
        question: 'Who shot the sheriff?',
        answers: [{
                text: 'I shot the sheriff',
                correct: true
            },
            {
                text: 'You shot the sheriff',
                correct: false
            },
            {
                text: 'He shot the sheriff',
                correct: false
            },
            {
                text: 'He shot himself',
                correct: false
            }
        ]
    },
    {
        question: 'What is the standard tuning of a guitar?',
        answers: [{
                text: 'DADGAD',
                correct: false
            },
            {
                text: 'CDEFGA',
                correct: false
            },
            {
                text: 'EADGBE',
                correct: true
            },
            {
                text: 'GEADBE',
                correct: false
            }
        ]
    },
    {
        question: 'Which of these is a DAW',
        answers: [{
                text: 'Nuendo',
                correct: true
            },
            {
                text: 'Cubase',
                correct: true
            },
            {
                text: 'Ableton',
                correct: true
            },
            {
                text: 'Logic',
                correct: true
            }
        ]
    },
    {
        question: 'What instrument did Niccolo Paganini play?',
        answers: [{
                text: 'Drums',
                correct: false
            },
            {
                text: 'Piano',
                correct: false
            },
            {
                text: 'Violin',
                correct: true
            },
            {
                text: 'Guitar',
                correct: false
            }
        ]
    }
]