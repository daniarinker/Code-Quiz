const questionList = document.getElementById(questionList.question);

const correctA = document.getElementById("correctA");
const answers = document.getElementById("answers");

let questionStart = "";
let scoreStart = "";

setInterval(function())
let timeclock = 60;

const questionList = [
  {
    question: "What is JavaScript?",
    answers: {
      a: "The art of writing with coffee",
      b: "A programming language",
      c: "A scale in which we measure earthquakes",
      d: "A fine dine meal originating from France",
    },
    correctA: "b",
  },
  {
    question: "When referring to Javascript, what is a 'callback'?",
    answers: {
      a: "What angry people do mid-argument while coding",
      b: "A way to attach multiple letters in a string",
      c: "A function that's invoked when something happens",
      d: "When multiple children elements are called",
    },
    correctA: "c",
  },
  {
    question: "When referring to Javascript, what is 'scope'?",
    answerChoices: {
      a: "A visual tool; Explorers use them often to find rogue codes at sea",
      b: "An attachment that helps you hunt down your coding bugs",
      c: "A variable, in what portion of a program that variable is visible",
      d: "When you finally understand what you're doing in VS Code",
    },
    correctA: "b",
  },
  {
    question: "When referring to JavaScript, what does 'stateful' mean?",
    answers: {
      a: "When a country is full of them; for example, America",
      b: "The opposite of forgetful, especially when coding",
      c: "A component, class, or function that manages its own data (state)",
      d: "When you become aware of reality; like Neo becomes in the Matrix",
    },
    correctA: "b",
  },
  {
    question: "When referring to JavaScript, what is a 'tree shaking'?",
    answers: {
      a: "Removing dead code",
      b: "Removing alive code",
      c: "When an apple falls on your head and you discover gravity",
      d: "When you're trying to get your code to work",
    },
    correctA: "b",
  },
];

console.log([correctA]);
