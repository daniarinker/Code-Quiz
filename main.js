// const questionList = document.getElementById(questionList.question);

const correct = document.getElementById("correct");
const answers = document.getElementById("answers");

const questionConatiner = document.getElementById("question-container");
let questionStart = "0";
let scoreStart = "0";

// setInterval(function())
// let timeclock = 60;



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
