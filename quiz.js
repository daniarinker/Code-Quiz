const questions = [
  {
    questionText: "What is JavaScript?",
    choices: [
      { text: "The art of writing with coffee" },
      { text: "A programming language", correct: true },
      { text: "A scale in which we measure earthquakes" },
      { text: "A fine dine meal originating from France" },
    ],
  },
  {
    questionText: "When referring to Javascript, what is a 'callback'?",
    choices: [
      { text: "What angry people do mid-argument while coding" },
      { text: "A way to attach multiple letters in a string" },
      {
        text: "A function that's invoked when something happens",
        correct: true,
      },
      { text: "When multiple children elements are called" },
    ],
  },
  {
    questionText: "When referring to Javascript, what is 'scope'?",
    choices: [
      {
        text:
          "A visual tool; Explorers use them often to find rogue codes at sea",
      },
      { text: "An attachment that helps you hunt down your coding bugs" },
      {
        text:
          "A variable, in what portion of a program that variable is visible",
        correct: true,
      },
      { text: "When you finally understand what you're doing in VS Code" },
    ],
  },
  {
    questionText: "When referring to JavaScript, what does 'stateful' mean?",
    choices: [
      { text: "When a country is full of them; for example, America" },
      { text: "The opposite of forgetful, especially when coding" },
      {
        text:
          "A component, class, or function that manages its own data (state)",
        correct: true,
      },
      {
        text:
          "When you become aware of reality; like Neo becomes in the Matrix",
      },
    ],
  },
  {
    questionText: "When referring to JavaScript, what is a 'tree shaking'?",
    choices: [
      { text: "Removing dead code", correct: true },
      { text: "Removing alive code" },
      { text: "When an apple falls on your head and you discover gravity" },
      { text: "When you're trying to get your code to work" },
    ],
  },
];

const startButton = document.getElementById("startButton");
const questionContainer = document.getElementById("questionContainer");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
}

let currentQuestionIndex = 0;
function nextQuestion() {
  if (currentQuestionIndex >= questions.length) {
    renderScore(calculateScore());
    return;
  }

  // choose the next question
  renderQuestion(questions[currentQuestionIndex++]);
}

//foreach answer in question, render button
function renderQuestion(question) {
  for (const answer of questions.choices) {
    // render li button
  }
}

//get chosen answer index
function validateAnswer(index) {}

function calculateScore() {}

function renderScore(scoreInfo) {}
