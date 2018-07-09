var answers = [
  {
    question:"Who was the legendary Benedictine monk who invented champagne?",
    answer: 1
  },
  {
    question: "Name the largest freshwater lake in the world?",
    answer: 2
  },
  {
    question: "Where would you find the Sea of Tranquility?",
    answer: 3
  },
  {
    question: "What is someone who shoes horses called?",
    answer: 4
  },
  {
    question: "What item of clothing was named after its Scottish inventor?",
    answer: 5
  },
  {
    question: "What kind of weapon is a falchion?",
    answer: 6
  },
];

for (i=0; i<answers.length; i++) {
  var el = document.getElementById("h"+[i])
  question = answers[i].question
  el.textContent=question
}

function myanswer() {
  correct = 0
  incorrect = 0
for (i=0; i<answers.length; i++) {
  var answer = answers[i].answer
  var guess = document.getElementById("input"+[i]).value
  var questionspot = document.getElementById("h"+[i])
  if (answer == guess) {
    questionspot.className ="correct"
    correct++;
  } else {
    questionspot.className ="incorrect"
    incorrect++;
  }
}
document.getElementById("correct").textContent=correct
document.getElementById("incorrect").textContent=incorrect
}
