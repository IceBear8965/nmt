const questions = [
  {
    question:
      "Прочитайте речення (цифра позначає наступне слово).<br><i>(1)Чотирн<b>а</b>дцятого (2)лист<b>о</b>пада трапився курйозний (3)вип<b>а</b>док: (4)мер<b>е</b>жа магазинів (5)«Р<b>е</b>шето» продала покупцям цілий (6)центн<b>е</b>р (7)к<b>у</b>рятини всього за (8)сімдес<b>я</b>т гривень, про що свідчив (9)в<b>и</b>разний (10)цінн<b>и</b>к.</i><br><b>НЕПРАВИЛЬНО</b> підкреслено букви на позначення наголошених голосних у всіх словах, позначених цифрами",
    answers: [
      { text: "1,3,6,8", correct: false },
      { text: "1,4,7,10", correct: false },
      { text: "2,3,6,9", correct: true },
      { text: "2,4,5,10", correct: false },
    ],
  },
  {
    question:
      "<b>НЕ</b> потрібна жодна буква на місці пропуску в усіх словах рядка",
    answers: [
      { text: "ціліс..ність, балас..ний, проїз.ний", correct: false },
      { text: "жаліс..ний, свис..нути, контрас..ний", correct: false },
      { text: "блис..нути, тиж..невик, капус..няк", correct: true },
      { text: "форпос..ний, ненавис..ний", correct: false },
    ],
  },
  {
    question:
      "Суфікс <b><i>-ин-</i></b> має однакове значення в усіх словах, <b>ОКРІМ</b>",
    answers: [
      { text: "бадилина", correct: false },
      { text: "стеблина", correct: false },
      { text: "височина", correct: true },
      { text: "соломина", correct: false },
    ],
  },
  {
    question:
      "Букву <b>и</b> на місці пропуску треба писати в усіх словах рядка ",
    answers: [
      { text: "пр…буток, пр….варений, пр…своєння", correct: true },
      { text: "пр…бічник, пр…славний, пр…леглий", correct: false },
      { text: "пр….хований, пр…звисько, пр...гріти", correct: false },
      { text: "пр…велебний, пр…бій, пр….вабливий", correct: false },
    ],
  },
  {
    question: "<b>НЕМАЄ</b> орфографічних помилок у реченні",
    answers: [
      {
        text: "У ситуації супержорсткої конкуренції на ринку туристичні агенції намагаються ставати все дужче клієнтоорієнтованими.",
        correct: true,
      },
      {
        text: "Для цього вони створюють не які-небуть примітивні інформаційні сайти, а справжні освітньо розважальні ресурси.",
        correct: false,
      },
      {
        text: "Тут потенційному клієнтові можна як замовити квиток у якусь екзотичну місцевісць, так і чи мало довідатися про неї.",
        correct: false,
      },
      {
        text: "Отже, куди б ви не вирішили поїхати, мабудь, точно щось цікаве й корисне вже знатемете про обраний куточок світу.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Доберіть для відповідного пропуску під номером 35 правильний варіант з-поміж запропонованих.<br><i>Дистанційна форма (34)______ освіти – це (35)________ навчання, яке проходить переважно за опосередкованої взаємодії віддалених (36)______ учасників освітнього процесу в спеціалізованому (37)______, що (38)______ на базі сучасних психолого-педагогічних та інформаційно-комунікаційних технологій.</i>",
    answers: [
      { text: "індивідуалізоване", correct: false },
      { text: "індивідуалістичне", correct: false },
      { text: "індивідуальне", correct: true },
      { text: "індивідуалістське", correct: false },
    ],
  },
  {
    question: "М’який знак на місці пропуску треба писати в усіх словах рядка",
    answers: [
      { text: "кол..оровість, промін…чик, різ...бяр", correct: false },
      { text: "гагауз...кий, гет...манщина, тис...нява", correct: false },
      { text: "дівчинон...ці, ковал...ський, лос...йон", correct: true },
      { text: "піднос...ся, надзелен...чати, посид...мо", correct: false },
    ],
  },
  {
    question: "Подвоєння букв є в усіх словах рядка",
    answers: [
      { text: "заздріст..ю, нездолан…ий, зіл...я", correct: false },
      { text: "жовч…ю, зван…я, довгождан...ий", correct: false },
      { text: "громад…я, велич...ю, старан...ість", correct: true },
      { text: "спотворен...ий, забут…я, суд...ею", correct: false },
    ],
  },
  {
    question:
      "Однаковий звук позначають букви, підкреслені в окремих словах речення",
    answers: [
      {
        text: "За<b>с</b>півала <b>с</b>опілочка о<b>с</b>ьдечки за вікном.",
        correct: false,
      },
      {
        text: "Відпові<b>д</b>аючи їм, не забу<b>д</b>ьте по<b>д</b>якувати.",
        correct: false,
      },
      {
        text: "Ці <b>к</b>витки можна обміняти в <b>к</b>асі во<b>к</b>залу.",
        correct: false,
      },
      {
        text: "Лікувальні мо<b>ж</b>ливості <b>ж</b>ивокосту безме<b>ж</b>ні.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Доберіть для відповідного пропуску під номером 34 правильний варіант з-поміж запропонованих.<br><i>Дистанційна форма (34)________ освіти – це (35)______ навчання, яке проходить переважно за опосередкованої взаємодії віддалених (36)______ учасників освітнього процесу в спеціалізованому (37)______, що (38)______ на базі сучасних психолого-педагогічних та інформаційно-комунікаційних технологій.</i>",
    answers: [
      { text: "отримання", correct: false },
      { text: "набуття", correct: false },
      { text: "одержання", correct: false },
      { text: "здобуття", correct: true },
    ],
  },
  {
    question: "Однаковий звук позначають букви, виділені в кожному слові рядка",
    answers: [
      {
        text: "здає<b>т</b>ься, моло<b>т</b>ьба, ба<b>т</b>ько",
        correct: false,
      },
      {
        text: "рю<b>к</b>зак, а<b>ґ</b>рус, <b>ґ</b>рунтознавець",
        correct: true,
      },
      {
        text: "контрас<b>т</b>ний, шіс<b>т</b>десят, че<b>т</b>вер",
        correct: false,
      },
      {
        text: "подру<b>ж</b>ка, ду<b>ж</b>ечка, д<b>ж</b>гутовий",
        correct: false,
      },
    ],
  },
  {
    question: "Разом треба писати всі слова в рядку",
    answers: [
      { text: "на/чисто, з/ранку, в/основному", correct: false },
      { text: "у/літку, по/тихеньку, на/вічно", correct: true },
      { text: "без/упину, на/весні, від/тоді", correct: false },
      { text: "до/нині, за/надто, до/вподоби", correct: false },
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
    questionElement.innerHTML = `Ви набрали низький рівень: ${score} з ${questions.length}<br><a href="../easter-egg.html" style="text-decoration:underline; cursor:pointer; margin: 15px;"><h4>Рекомендуємо обрати інші варіанти кар'єрного росту</h4></a>`;
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
