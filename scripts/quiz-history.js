const questions = [
  {
    question:
      "Що стало поштовхом до описаних у джерелі дій княгині: <i>«І пішла Ольга по Древлянській землі з сином своїм і дружиною своєю, установлюючи устави й уроки; І донині є становища її і ловища її…»; «Пішла Ольга до Новгорода. І встановила вона… погости й оброки. І ловища її по всій землі, і знаки [її],.. і сани її стоять у Пскові й до сьогодні…»?</i>",
    answers: [
      { text: "загибель київського князя Ігоря", correct: true },
      { text: "захоплення влади в Києві князем Олегом", correct: false },
      { text: "невдалий похід князя Святослава на Балкани", correct: false },
      {
        text: "початок систематичних нападів на Русь-Україну печенігів",
        correct: false,
      },
    ],
  },
  {
    question:
      "Який термін доречно використовувати, характеризуючи залежність руських князівств від Золотої Орди?",
    answers: [
      { text: "«ярлик»", correct: true },
      { text: "«вотчина»", correct: false },
      { text: "«холоп»", correct: false },
      { text: "«магдебурзьке право»", correct: false },
    ],
  },
  {
    question: "Яка подія відбулася 1569 року?",
    answers: [
      {
        text: "заснування першої Запорозької Січі на о. Мала Хортиця",
        correct: false,
      },
      {
        text: "похід козаків під проводом П. Сагайдачного на Московське царство",
        correct: false,
      },
      {
        text: "об’єднання Великого князівства Литовського та Королівства Польського",
        correct: true,
      },
      {
        text: "укладення козацького реєстру польським королем Стефаном Баторієм",
        correct: false,
      },
    ],
  },
  {
    question:
      "Автором цитованого документа <i>«…Договори наші… уклав я з Королем Шведським письмовим актом, підписаним з обох сторін… І тепер ми вважати повинні Шведів за своїх приятелів, союзників, добродіїв і немовби од Бога посланих, щоб увільнити нас від рабства… Відомо ж бо, що колись були ми ті, що тепер московці: уряд, первинність і сама назва Русь од нас до них перейшли…»</i> був",
    answers: [
      { text: "П. Сагайдачний.", correct: false },
      { text: "І. Виговський.", correct: false },
      { text: "І. Самойлович.", correct: false },
      { text: "І. Мазепа.", correct: true },
    ],
  },
  {
    question:
      "Коли на українських землях було засновано університет, якому імперська влада ставила завдання <i>«поширювати російську освіту й російську національність в ополяченому краю Західної Росії...»?</i>",
    answers: [
      { text: "1805 р.", correct: false },
      { text: "1834 р.", correct: true },
      { text: "1865 р.", correct: false },
      { text: "1875 р.", correct: false },
    ],
  },
  {
    question:
      "Кого із суспільно-політичних діячів називали <i>«двічі арештованим»</i>, <i>«буковинським королем»</i>, <i>«народним послом до Відня»?</i>",
    answers: [
      { text: "О. Довбуша", correct: false },
      { text: "У. Кармалюка", correct: false },
      { text: "І. Вагилевича", correct: false },
      { text: "Л. Кобилицю", correct: true },
    ],
  },
  {
    question:
      "Боротьба за український університет стала важливим питанням політичної боротьби наприкінці ХІХ – на початку ХХ ст. для",
    answers: [
      { text: "Поділля.", correct: false },
      { text: "Східної Галичини.", correct: true },
      { text: "Північної Буковини.", correct: false },
      { text: "Закарпаття.", correct: false },
    ],
  },
  {
    question:
      "Які однакові дії під час Першої світової війни застосовували російська та австрійська влади стосовно українських земель, що входили до складу Австро-Угорщини?",
    answers: [
      {
        text: "заборона діяльності українських політичних партій",
        correct: false,
      },
      {
        text: "тотальна мобілізація чоловічого населення до армії",
        correct: false,
      },
      { text: "депортація нелояльної частини населення", correct: true },
      { text: "боротьба з греко-католицькою церквою", correct: false },
    ],
  },
  {
    question:
      "Провал планів партійно-радянського керівництва СРСР із хлібозаготівлі в Українській СРР 1932 р. призвів до запровадження на селі",
    answers: [
      { text: "терору голодом.", correct: true },
      { text: "системи раднаргоспів.", correct: false },
      { text: "кампанії з розкуркулення.", correct: false },
      { text: "заходів зі згортання колективізації.", correct: false },
    ],
  },
  {
    question:
      "Прочитайте уривок документа: <i>«Підготовча робота до евакуації та сама евакуація в’язниць у західних областях України розпочалася з 22 червня цього року. У чотирьох тюрмах утримували 5424 в’язні. У перший же день уторгнення німців в СРСР у тюрмах було виконано вироки щодо 108 в’язнів…»</i><br>В’язні, про яких ідеться в уривку джерела, потрапляли до тюрем у результаті проведення",
    answers: [
      { text: "акції «пацифікації».", correct: false },
      { text: "політики «осадництва».", correct: false },
      { text: "режиму «нового порядку».", correct: false },
      { text: "політики «радянізації».", correct: true },
    ],
  },
  {
    question:
      "Коли відбулася подія, у результаті якої польська влада планувала здійснити поставлені завдання: <i>«1. Залучити робочу силу для господарювання “повернутих земель”; 2. Остаточно підірвати життєву базу ОУН й УПА; 3. Асимілювати окремі родини етнічних українців у суцільній масі польського населення...»</i>?",
    answers: [
      { text: "1944 р.", correct: false },
      { text: "1945 р.", correct: false },
      { text: "1946 р.", correct: false },
      { text: "1947 р.", correct: true },
    ],
  },
  {
    question:
      "Вторгнення Червоної армії на територію Бессарабії та Північної Буковини в 1940 р. відбулося після ультиматуму уряду СРСР керівництву",
    answers: [
      { text: "Румунії.", correct: true },
      { text: "Польщі.", correct: false },
      { text: "Чехословаччини.", correct: false },
      { text: "Угорщини.", correct: false },
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
