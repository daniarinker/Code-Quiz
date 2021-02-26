// const questionList = document.getElementById(questionList.question);

const correct = document.getElementById("correct");
const answers = document.getElementById("answers");

const questionConatiner = document.getElementById("question-container");
let questionStart = "0";
let scoreStart = "0";

// setInterval(function())
// let timeclock = 60;

const questions = [
  {
    question: "What is JavaScript?",
    choices: [
      "The art of writing with coffee",
      "A programming language",
      "A scale in which we measure earthquakes",
      "A fine dine meal originating from France",
    ],
    correct: 2,
  },
  {
    question: "When referring to Javascript, what is a 'callback'?",
    choices: [
      "What angry people do mid-argument while coding",
      "A way to attach multiple letters in a string",
      "A function that's invoked when something happens",
      "When multiple children elements are called",
    ],
    correct: 2,
  },
  {
    question: "When referring to Javascript, what is 'scope'?",
    choices: [
      "A visual tool; Explorers use them often to find rogue codes at sea",
      "An attachment that helps you hunt down your coding bugs",
      "A variable, in what portion of a program that variable is visible",
      "When you finally understand what you're doing in VS Code",
    ],
    correct: 3,
  },
  {
    question: "When referring to JavaScript, what does 'stateful' mean?",
    choices: [
      "When a country is full of them; for example, America",
      "The opposite of forgetful, especially when coding",
      "A component, class, or function that manages its own data (state)",
      "When you become aware of reality; like Neo becomes in the Matrix",
    ],
    correct: 3,
  },
  {
    question: "When referring to JavaScript, what is a 'tree shaking'?",
    choices: [
      "Removing dead code",
      "Removing alive code",
      "When an apple falls on your head and you discover gravity",
      "When you're trying to get your code to work",
    ],
    correct: 1,
  },
];

function startTimer() {
  var timeClock = 60;
  setInterval(function () {
    timeClock--;
    if (timeClock >= 0) {
      span = document.getElementById("countdown");
      span.innerHTML = timeClock;
    }
    if (timeClock === 0) {
      alert("Game over! You ran out of time.");
      clearInterval(timeClock);
    }
    // 1000 below is to control the time intervals
  }, 1000);
}
function start() {
  document.getElementById("countdown").style = "color:red; font-weight:bold;";
  startTimer();
}
let question = questions[activeQuestion].question;

function spawnQuestions() {
  for (var i = 0; i < total; i++) {
    if (questions[i] == answers[i]) {
      scoreStart = scoreStart + 1;
    }
  }
}

function startQuiz() {
  console.log("working!");
  startButton;
}
