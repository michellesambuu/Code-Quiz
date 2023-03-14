// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var questionEl = document.querySelector("#question");
var questionIndex = 0;
var score = 0;
var questionArray = [
    {
        text: "What is JavaScript?",
        choices: [
            "lightweight, interpreted program",
            "Styling program",
            "body structure program",
            "text program  "
        ],
        correctIndex: 0
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "Javascript",
            "terminal bash",
            "for loop",
            "consol.log"
        ],
        correctIndex: 1

       
    },
    {
        text: "Commonly used data types DO Not include:",
        choices: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        correctIndex: 
    }
]


function showCurrentQuestion() {
    var currentQ = questionArray[questionIndex];

    var questionHTML = `
    <p>${currentQ.text}</p>
        <ul class="answer" >
    `
    for (let i = 0; i < currentQ.choices.length; i++) {
        const choice = currentQ.choices[i];
        questionHTML += `
        <li> 
            <button onclick="checkAnswerIndex(${i})">${i + 1}. ${choice} </button> 
        </li>
        `
    }

    questionHTML += `
    </ul>
    <p id="question-message"></p>
    `

    questionEl.innerHTML = questionHTML
}

function checkAnswerIndex(index) {
    var currentQ = questionArray[questionIndex];

    if (currentQ.correctIndex === index) {
        console.log("Correct")
        score++
    } else {
        console.log("Wrong")
        score--;
    }

    nextQuestion()
}

function nextQuestion() {
    questionIndex++;

    if (questionIndex < questionArray.length) {
        showCurrentQuestion()
    } else {
        endQuiz()
    }
}

function endQuiz() {
    console.log("quiz over")
}

showCurrentQuestion()