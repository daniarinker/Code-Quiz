// const questionList = document.getElementById(questionList.question);

const correct = document.getElementById("correct");
const answers = document.getElementById("answers");

let questionStart = "";
let scoreStart = "";

// setInterval(function())
// let timeclock = 60;

const questionList = [
  {
    question: "What is JavaScript?",
    answers: {
      A: "The art of writing with coffee",
      B: "A programming language",
      C: "A scale in which we measure earthquakes",
      D: "A fine dine meal originating from France",
    },
    correct: "B",
  },
  {
    question: "When referring to Javascript, what is a 'callback'?",
    answers: {
      A: "What angry people do mid-argument while coding",
      B: "A way to attach multiple letters in a string",
      C: "A function that's invoked when something happens",
      D: "When multiple children elements are called",
    },
    correct: "C",
  },
  {
    question: "When referring to Javascript, what is 'scope'?",
    answers: {
      A: "A visual tool; Explorers use them often to find rogue codes at sea",
      B: "An attachment that helps you hunt down your coding bugs",
      C: "A variable, in what portion of a program that variable is visible",
      D: "When you finally understand what you're doing in VS Code",
    },
    correct: "B",
  },
  {
    question: "When referring to JavaScript, what does 'stateful' mean?",
    answers: {
      A: "When a country is full of them; for example, America",
      B: "The opposite of forgetful, especially when coding",
      C: "A component, class, or function that manages its own data (state)",
      D: "When you become aware of reality; like Neo becomes in the Matrix",
    },
    correct: "B",
  },
  {
    question: "When referring to JavaScript, what is a 'tree shaking'?",
    answers: {
      A: "Removing dead code",
      B: "Removing alive code",
      C: "When an apple falls on your head and you discover gravity",
      D: "When you're trying to get your code to work",
    },
    correct: "b",
  },
];

function startTimer() {
  var counter = 60;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("Game over! You ran out of time.");
      clearInterval(counter);
    }
  }, 1000);
}
function start() {
  document.getElementById("count").style = "color:green;";
  startTimer();
}
