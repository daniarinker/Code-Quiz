const questions = [
  {
    questionText: "What is JavaScript?",
    choices: [
      { text: "The art of writing with coffee" },
      { text: "A programming language", correct: true },
      { text: "A scale in which we measure earthquakes" },
      { text: "A fine dining meal originating from France" },
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

let currentQuestionIndex;
let timer;
let gameOver = false;
const timePenalty = 10;

const startButton = document.getElementById("startButton");
const questionContainer = document.getElementById("questionCard");
startButton.addEventListener("click", startQuiz);

//executes the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  timer = 60;
  gameOver = false;

  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  nextQuestion(currentQuestionIndex);
  tick();
}

function tick() {
  setTimeout(() => {
    if (timer > 0 && !gameOver) {
      timer--;
      renderTimer();
      if (timer <= 0) {
        timer = 0;
        endQuiz();
      }
      tick();
    }
  }, 1000);
}

function nextQuestion(index) {
  if (index >= questions.length) {
    return endQuiz();
  }

  // choose the next question
  renderQuestion(questions[index]);
}

//for each answer in question, render button
function renderQuestion(question) {
  clearChoiceList();
  setQuestionTitle(question.questionText);
  for (let i = 0; i < question.choices.length; i++) {
    const choice = question.choices[i];
    appendChoice(choice, i);
  }
}

function renderTimer() {
  const ticker = document.getElementById("ticker");
  ticker.innerHTML = timer.toString();
}

//get chosen answer index
function validateAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  const correctIndex = question.choices.findIndex((choice) => choice?.correct);

  if (selectedIndex !== correctIndex) {
    timer -= timePenalty;
  }

  // console.log(`Validating question at index: ${index}`);
  renderTimer();
  nextQuestion(++currentQuestionIndex);
}

function endQuiz() {
  console.log("Game Over!");
  gameOver = true;
  renderScore();
}

function renderScore() {
  const scoreCard = document.getElementById("scoreCard");
  const scoreText = scoreCard.querySelector("p");
  const titleText = scoreCard.querySelector("h2");
  if (timer > 0) {
    titleText.textContent = `Congratulations you won!`;
  } else {
    titleText.textContent = `Awww, better luck next time...`;
  }

  scoreText.textContent = `Score: ${timer}`;
  questionContainer.classList.add("hide");
  scoreCard.classList.remove("hide");
}

// html manipulation functions
function setQuestionTitle(innerText) {
  const node = questionContainer.getElementsByClassName("title")[0];
  node.textContent = innerText;
}

function clearChoiceList() {
  const parent = questionContainer.getElementsByClassName("answer")[0];
  const children = [...parent.childNodes];
  while (children.length > 0) {
    const node = children.pop();
    node.remove();
  }
}

function appendChoice(choice, index) {
  const parent = questionContainer.getElementsByClassName("answer")[0];
  const liNode = document.createElement("li");
  const buttonNode = document.createElement("button");
  // not sure if needed to call twice
  buttonNode.classList.add("questionCard");
  buttonNode.classList.add("button");
  buttonNode.onclick = () => {
    validateAnswer(index);
  };
  buttonNode.textContent = choice.text;
  liNode.appendChild(buttonNode);
  parent.appendChild(liNode);
}

function onSubmitInitials() {
  console.log(`intials enter`);
  // get intials text from the input element
}

// score screen
