
const questions = [
  {
    question: "What is JavaScript ?",
    options: ["Markup", "Programming", "Styling", "Database"],
    answer: "Programming"
  },
  {
    question: "What is HTML ?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Markup Language",
      "None"
    ],
    answer: "Hyper Text Markup Language"
  }
];

const quizDiv = document.getElementById("quiz");
let score = 0;

 
questions.forEach((q, index) => {

   
  const questionEl = document.createElement("h3");
  questionEl.innerText = `${index + 1}. ${q.question}`;
  quizDiv.appendChild(questionEl);

   
  q.options.forEach(option => {
    const label = document.createElement("label");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = "question" + index;
    input.value = option;

    label.appendChild(input);
    label.append(" " + option);

    quizDiv.appendChild(label);
    quizDiv.appendChild(document.createElement("br"));
    
  });

  quizDiv.appendChild(document.createElement("br"));
});

 
const btn = document.createElement("button");
btn.innerText = "Submit Quiz";
quizDiv.appendChild(btn);

 
const result = document.createElement("h2");
quizDiv.appendChild(result);

 
btn.addEventListener("click", () => {
  score = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(
      `input[name="question${index}"]:checked`
    );

    if (selected && selected.value == q.answer) 
    {
      score++;
    }
  });

  result.innerText = `Your Score: ${score} / ${questions.length}`;
});