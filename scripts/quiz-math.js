const questions = [
  {
    question:
      "Які з наведених тверджень є правильними?<br>I.   Існує паралелограм, діагональ якого дорівнює сумі двох його сусідних сторін.<br>II.  Існує паралелограм, один із кутів якого вдвічі більший за інший кут.<br>III. Існує паралелограм, діагоналі якого перпендикулярні.",
    answers: [
      { text: "лише ІІ", correct: false },
      { text: "лише І та ІІІ", correct: false },
      { text: "лише ІІ та ІІІ", correct: true },
      { text: "лише І та ІІ", correct: false },
    ],
  },
  {
    question:
      "Микола частує свою родину фруктовим салатом із яблук, бананів й апельсинів. Для приготування однієї порції салату потрібно 1 банан, 2 апельсини та 3 яблука. Скільки апельсинів використав Микола, якщо він приготував за цим рецептом салат із 24 фруктів?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "8", correct: true },
      { text: "12", correct: false },
    ],
  },
  {
    question:
      "Сергій купив 4 чорні, 6 червоних і 𝑛 синіх ручок по грн 27 грн, грн 15 грн і грн 10 грн кожна. Середня ціна однієї ручки виявилася меншою за грн 13 грн.<br>Укажіть найменше можливе значення n.",
    answers: [
      { text: "19", correct: false },
      { text: "21", correct: false },
      { text: "22 ", correct: false },
      { text: "23", correct: true },
    ],
  },
  {
    question: "Якщо m=n−1,  то 7-m",
    answers: [
      { text: "n-8", correct: false },
      { text: "6-n", correct: false },
      { text: "8-n", correct: true },
      { text: "n-6", correct: false },
    ],
  },
  {
    question:
      "У трикутнику 𝐴𝐵𝐶 кут 𝐵 – тупий. Які з наведених тверджень є правильними?<br>I.  ∠𝐴+∠𝐶<90∘.<br>II. 𝐴𝐵+𝐵𝐶<𝐴𝐶.<br>III. Центр кола, описаного навколо трикутника 𝐴𝐵𝐶, лежить поза його межами.",
    answers: [
      { text: "лише I та III", correct: true },
      { text: "лише І", correct: false },
      { text: "лише I та II", correct: false },
      { text: "I, II та III", correct: false },
    ],
  },
  {
    question:
      "Периметр основи правильної чотирикутної піраміди дорівнює 72 см.Обчисліть довжину висоти піраміди, якщо її апофема дорівнює 15 см.",
    answers: [
      { text: "6 см", correct: false },
      { text: "9 см", correct: false },
      { text: "10 см", correct: false },
      { text: "12 см", correct: true },
    ],
  },
  {
    question:
      "Редактор стрічки новин вирішує, у якій послідовності розмістити 6 різних новин: 2 політичні, 3 суспільні та 1 спортивну. Скільки всього є різних послідовностей розміщення цих 6 новин у стрічці за умови, що політичні новини мають передувати іншим, а спортивна новина має бути останньою? Уважайте, що кожна з цих 6 новин у стрічці не повторюватиметься.",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: false },
      { text: "12", correct: true },
      { text: "16", correct: false },
    ],
  },
  {
    question:
      "Точки А і В лежать на колі радіуса 16. Укажіть найбільше можливе значення довжини відрізка АВ.",
    answers: [
      { text: "4", correct: false },
      { text: "8", correct: false },
      { text: "16", correct: false },
      { text: "32", correct: true },
    ],
  },
  {
    question:
      "Плату за користування комп'ютерною програмою підвищили зі 140 грн у 2021 р. до 161 грн у 2022 р. На скільки відсотків збільшили плату у 2022 р. порівняно із 2021 р.? ",
    answers: [
      { text: "10%", correct: false },
      { text: "15%", correct: true },
      { text: "21%", correct: false },
      { text: "30%", correct: false },
    ],
  },
  {
    question:
      "Доберіть закінчення речення так, щоб утворилося правильне твердження: «Циліндр утворений обертанням…",
    answers: [
      { text: "квадрата навколо його сторони».", correct: true },
      { text: "прямокутника навколо його діагоналі».", correct: false },
      {
        text: "прямокутного трикутника навколо його гіпотенузи».",
        correct: false,
      },
      { text: "прямокутного трикутника навколо його катета».", correct: false },
    ],
  },
  {
    question:
      "Які з наведених тверджень є правильними?<br>І. Середня лінія трапеції проходить через точку перетину її діагоналей.<br>ІІ. Діагональ трапеції ділить її на два рівних трикутники.<br>ІІІ. Діагоналі рівнобічної трапеції рівні.",
    answers: [
      { text: "лише III", correct: true },
      { text: "лише I та IIІ", correct: false },
      { text: "лише I та II", correct: false },
      { text: "лише II та IIІ", correct: false },
    ],
  },
  {
    question: "Яке з наведених чисел є розв’язком нерівності |-2х-3|>5?",
    answers: [
      { text: "-2", correct: false },
      { text: "-1", correct: false },
      { text: "0", correct: false },
      { text: "2", correct: true },
    ],
  },
];

const containerElement = document.getElementById("container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Наступне питання";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;

  questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer_btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
};

const showScore = () => {
  resetState();
  if (score >= 10) {
    questionElement.innerHTML = `Вітаємо! Ви набрали високий рівень: ${score} з ${questions.length}`;
  } else if (score > 5 && score < 10) {
    questionElement.innerHTML = `Ви набрали середній рівень: ${score} з ${questions.length}`;
  } else {
    questionElement.innerHTML = `Ви набрали низький рівень: ${score} з ${questions.length}`;
  }
  nextButton.innerHTML = "Почати спочатку";
  nextButton.style.display = "block";
};

const handleNextButton = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
