////list of questions

const questions = {
    "questions": [
        {
            "question": "The capital of Florida is Miami.",
            "answer": false
        },
        {
            "question": "The capital of California is Sacramento.",
            "answer": true
        },
        {
            "question": "The United States was founded in 1998.",
            "answer": false
        },
        {
            "question": "Albert Einstein is Magician",
            "answer": false
        },
        {
            "question": "The inventor of the first computer is Alan Turing.",
            "answer": true
        },
        {
            "question": "The maker of MacBookpro is Facebook",
            "answer": false
        },
        {
            "question": "Facebook bougth WhatsApp for 19bln $",
            "answer": true
        }
    ]
}
//Dom accesing
const question = document.getElementById('question')
//Variable to keep track of score
let playerScore = 0
//variable to keep track of what question you are on
let questionIndex = 0
//variable to keep track if you reached the last question 
let didReachLastQuestion = false
question.innerText = questions.questions[questionIndex].question

function handleTrue() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == true && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function handleFalse() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == false && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function nextQuestion() {
    questionIndex += 1
    if (questionIndex >= questions.questions.length) {
        didReachLastQuestion = true
        const yourFinalScore = `Your score is ${playerScore} / ${questions.questions.length}.`
        question.innerText = yourFinalScore
        shouldHideAnswerButtons(true)
    } else {
        question.innerText = questions.questions[questionIndex].question
    }
}

function replay() {
    shouldHideAnswerButtons(false)
    playerScore = 0
    questionIndex = 0
    didReachLastQuestion = false
    question.innerText = questions.questions[questionIndex].question
}

function shouldHideAnswerButtons(flag) {
    const trueButton = document.getElementById('true-button')
    const falseButton = document.getElementById('false-button')
    const replayButton = document.getElementById('replay-button')

    if (flag == true) {
        replayButton.style.opacity = 1
        trueButton.style.opacity = 0
        falseButton.style.opacity = 0
    } else {
        replayButton.style.opacity = 0
        trueButton.style.opacity = 1
        falseButton.style.opacity = 1
    }
}







