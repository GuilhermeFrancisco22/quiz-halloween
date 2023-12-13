const questions = [
  {
    question: "De quem é a famosa frase 'Penso, logo existo'?",
    answers: [
      { option: "Platão", correct: false },
      { option: "Galileu Galilei", correct: false },
      { option: "Descartes", correct: true },
      { option: "Sócrates", correct: false },
      { option: "Francis Bacon", correct: false },
      { option: "Afonso Padilha", correct: false }
    ]
  },
  {
    question: "Quais o menor e o maior país do mundo?",
    answers: [
      { option: "Vaticano e Rússia", correct: true },
      { option: "Nauru e China", correct: false },
      { option: "Mônaco e Canada", correct: false },
      { option: "Malta e Estados Unidos", correct: false },
      { option: "Sao Marino e índia", correct: false },
      { option: "Indonésia e Africa do Sul", correct: false }
    ]
  },
  {
    question: "Quantas casas decimais tem o número pi?",
    answers: [
      { option: "Duas", correct: false },
      { option: "Centenas", correct: false },
      { option: "Infinitas", correct: true },
      { option: "Vinte", correct: false },
      { option: "Milhares", correct: false },
      { option: "Oitenta e oito", correct: false }
    ]
  },
  {
    question: "De onde é a invenção do chuveiro elétrico?",
    answers: [
      { option: "França", correct: false },
      { option: "Inglaterra", correct: false },
      { option: "Brasil", correct: true },
      { option: "Austrália", correct: false },
      { option: "Itália", correct: false },
      { option: "Argentina", correct: false }
    ]
  },
  {
    question: "Atualmente, quantos elementos químicos a tabela periódica possui?",
    answers: [
      { option: "113", correct: false },
      { option: "109", correct: false },
      { option: "108", correct: false },
      { option: "118", correct: true },
      { option: "92", correct: false },
      { option: "119", correct: false }
    ]
  },
  {
    question: "O que a palavra legend significa em português?",
    answers: [
      { option: "Legenda", correct: false },
      { option: "Conto", correct: false },
      { option: "História", correct: false },
      { option: "Lenda", correct: true },
      { option: "Legendado", correct: false },
      { option: "Lendário", correct: false }
    ]
  },
  {
    question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
    answers: [
      { option: "12 minutos", correct: false },
      { option: "1 dia", correct: false },
      { option: "12 horas", correct: false },
      { option: "15 horas", correct: false },
      { option: "3 dias e 6 horas", correct: false },
      { option: "8 minutos", correct: true }
    ]
  },
  {
    question: "Qual a nacionalidade de Che Guevara?",
    answers: [
      { option: "Cubana", correct: false },
      { option: "Peruana", correct: false },
      { option: "Panamenha", correct: false },
      { option: "Boliviana", correct: false },
      { option: "Argentina", correct: true },
      { option: "Brasileiro", correct: false }
    ]
  },
  {
    question: "Quais são os três predadores do reino animal reconhecidos pela habilidade de caçar em grupo, se camuflar para surpreender as presas e possuir sentidos apurados, respectivamente?",
    answers: [
      { option: "Tubarão branco, crocodilo e sucuri", correct: false },
      { option: "Tigre, gavião e orca", correct: false },
      { option: "Hiena, urso branco e lobo cinzento", correct: true },
      { option: "Orca, onça e tarântula", correct: false },
      { option: "Leão, tubarão branco e urso cinzento", correct: false },
      { option: "Preguiça, rato e formiga", correct: false }
    ]
  },
  {
    question: "Qual a altura da rede de vôlei nos jogos masculino e feminino?",
    answers: [
      { option: "2,4 para ambos", correct: false },
      { option: "2,5 m e 2,0 m", correct: false },
      { option: "1,8 m e 1,5 m", correct: false },
      { option: "2,45 m e 2,15 m", correct: false },
      { option: "2,43 m e 2,24 m", correct: true },
      { option: "2,78 m e 2,73 m", correct: false }
    ]
  },
  {
    question: "Em que período da pré-história o fogo foi descoberto?",
    answers: [
      { option: "Neolítico", correct: false },
      { option: "Paleolítico", correct: true },
      { option: "Idade dos Metais", correct: false },
      { option: "Período da Pedra Polida", correct: false },
      { option: "Idade Média", correct: false },
      { option: "Idade da pedra", correct: false }
    ]
  },
  {
    question: "Qual das alternativas abaixo apenas contêm classes de palavras?",
    answers: [
      { option: "Vogais, semivogais e consoantes", correct: false },
      { option: "Substantivos, Vogais e Consoantes", correct: false },
      { option: "Fonologia, Morfologia e Sintaxe", correct: false },
      { option: "Artigo, verbo transitivo e verbo intransitivo", correct: false },
      { option: "Hiatos, ditongos e tritongos", correct: false },
      { option: "Substantivo, verbo e preposição.", correct: true }
    ]
  },
  {
    question: "Qual a montanha mais alta do Brasil?",
    answers: [
      { option: "Pico da Neblina", correct: true },
      { option: "Pico Paraná", correct: false },
      { option: "Monte Roraima", correct: false },
      { option: "Pico Maior de Friburgo", correct: false },
      { option: "Pico da Bandeira", correct: false },
      { option: "Morro do Macaco", correct: false }
    ]
  },
  {
    question: "Qual a velocidade da luz?",
    answers: [
      { option: "300 000 000 metros por segundo (m/s)", correct: false },
      { option: "150 000 000 metros por segundo (m/s)", correct: false },
      { option: "199 792 458 metros por segundo (m/s)", correct: false },
      { option: "299 792 458 metros por segundo (m/s)", correct: true },
      { option: "30 000 000 metros por segundo (m/s)", correct: false },
      { option: "200 000 000 metros por hora (m/h)", correct: false }
    ]
  },
  {
    question: "Em qual local da Ásia o português é língua oficial?",
    answers: [
      { option: "Índia", correct: false },
      { option: "Filipinas", correct: false },
      { option: "Moçambique", correct: false },
      { option: "Macau", correct: true },
      { option: "Portugal", correct: false },
      { option: "Acre", correct: false }
    ]
  },
  {
    question: "“It is six twenty ou twenty past six”. Que horas são em inglês?",
    answers: [
      { option: "12:06", correct: false },
      { option: "6:20", correct: false },
      { option: "2:20", correct: false },
      { option: "6:02", correct: false },
      { option: "12:20", correct: false },
      { option: "05:40", correct: true }
    ]
  },
  {
    question: "Como é a conjugação do verbo caber na 1.ª pessoa do singular do presente do indicativo?",
    answers: [
      { option: "Eu caibo", correct: true },
      { option: "Ele cabe", correct: false },
      { option: "Que eu caiba", correct: false },
      { option: "Eu cabo", correct: false },
      { option: "Eu vou caber", correct: false },
      { option: "Nenhuma das alternativas", correct: false }
    ]
  },
  {
    question: "Quais destas construções famosas ficam nos Estados Unidos?",
    answers: [
      { option: "Estátua da Liberdade, Golden Gate Bridge e Empire State Building", correct: true },
      { option: "Estátua da Liberdade, Big Ben e The High Line", correct: false },
      { option: "Angkor Wat, Taj Mahal e Skywalk no Grand Canyon", correct: false },
      { option: "Lincoln Memorial, Sidney Opera House e Burj Khalifa", correct: false },
      { option: "30 St Mary Axe, The High Line e Residencial 148 Spruce Street", correct: false },
      { option: "Big Ben, Taj Mahal e Residencial 148 Spruce Street", correct: false }
    ]
  },
  {
    question: "Quais destas doenças são sexualmente transmissíveis?",
    answers: [
      { option: "Aids, tricomoníase e ebola", correct: false },
      { option: "Chikungunya, aids e herpes genital", correct: false },
      { option: "Gonorreia, clamídia e sífilis", correct: true },
      { option: "Botulismo, cistite e gonorreia", correct: false },
      { option: "Hepatite B, febre tifoide e hanseníase", correct: false },
      { option: "Dengue, Peste Bubonica e aids", correct: false }
    ]
  },
  {
    question: "Qual destes países é transcontinental?",
    answers: [
      { option: "Rússia", correct: true },
      { option: "Filipinas", correct: false },
      { option: "Marrocos", correct: false },
      { option: "Groenlândia", correct: false },
      { option: "Tanzânia", correct: false },
      { option: "China", correct: false }
    ]
  },
  {
    question: "Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?",
    answers: [
      { option: "A Filosofia", correct: false },
      { option: "A Biologia", correct: false },
      { option: "A Matemática", correct: false },
      { option: "A Astronomia", correct: false },
      { option: "A Mitologia", correct: true },
      { option: "Cristianismo", correct: false },
    ],
  },
  {
    question: "Júpiter e Plutão são os correlatos romanos de quais deuses gregos?",
    answers: [
      { option: "Ares e Hermes", correct: false },
      { option: "Cronos e Apolo", correct: false },
      { option: "Zeus e Hades", correct: true },
      { option: "Dionísio e Deméter", correct: false },
      { option: "Zeus e Ares", correct: false },
      { option: "Poseidon e Gaya", correct: false },
    ],
  },
  {
    question: "Qual o maior animal terrestre?",
    answers: [
      { option: "Baleia Azul", correct: false },
      { option: "Dinossauro", correct: false },
      { option: "Elefante africano", correct: true },
      { option: "Tubarão Branco", correct: false },
      { option: "Girafa", correct: false },
      { option: "Pé Grande", correct: false },
    ],
  },
  {
    question: "Quais os nomes dos três Reis Magos?",
    answers: [
      { option: "Gaspar, Nicolau e Natanael", correct: false },
      { option: "Belchior, Gaspar e Baltazar", correct: true },
      { option: "Belchior, Gaspar e Nataniel", correct: false },
      { option: "Gabriel, Benjamim e Melchior", correct: false },
      { option: "Melchior, Noé e Galileu", correct: false },
      { option: "Gaspar, Gabriel e Melchior", correct: false },
    ],
  },
]

function getRandomQuestions(questions, count) {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

let currentIndex = 0;
let questionsCorrect = 0;
let selectedQuestions = getRandomQuestions(questions, 10);
let errorCount = 0;
const maxErrors = 3;
let errosDisplay = maxErrors

function loadQuestion() {
  const question = document.querySelector(".question");
  const answers = document.querySelector(".answers");
  const spnQtd = document.querySelector(".spnQtd");
  const scoreDisplay = document.querySelector(".score");
  const correctAnswersDisplay = document.querySelector(".correct-answers");
  const error = document.querySelector(".qtd-erro")
  error.innerHTML = `tentativas: ${errosDisplay}`

  spnQtd.innerHTML = `${currentIndex + 1}/${selectedQuestions.length}`;
  const item = selectedQuestions[currentIndex];
  question.innerHTML = item.question;
  answers.innerHTML = ""; // Limpa as respostas anteriores

  item.answers.forEach((answer, index) => {
    const div = document.createElement("div");
    const button = document.createElement("button");

    button.classList.add("answer");
    button.dataset.correct = answer.correct;
    button.textContent = answer.option;

    button.addEventListener("click", nextQuestion);
    div.appendChild(button);
    answers.appendChild(div);
  });

  // Atualiza o score e as respostas corretas
  scoreDisplay.innerHTML = `Score: ${questionsCorrect * 100}`;
  correctAnswersDisplay.innerHTML = `Respostas corretas: ${questionsCorrect}`;
}

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  } else {
    errorCount++;
    errosDisplay--; // Diminui as tentativas restantes
    const error = document.querySelector(".qtd-erro");
    error.innerHTML = `tentativas: ${errosDisplay}`; // Atualiza o texto na interface

    // Verifica se atingiu o limite de erros
    if (errorCount === maxErrors) {
      errorCount = 0;
      finish(); // Chama a função finish se excedeu o limite de erros
      return;
    }
  }

  if (currentIndex < selectedQuestions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  const textFinish = document.querySelector(".span-score");
  const contentFinish = document.querySelector(".finish");
  const scoreDisplay = document.querySelector(".score");
  const correctAnswersDisplay = document.querySelector(".correct-answers");
  const contentStatic = document.querySelector(".content-static")
  const mainGame = document.querySelector(".main-game")

  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${selectedQuestions.length}`;
  contentFinish.style.display = "flex";
  contentStatic.style.display = "none";
  mainGame.classList.add("finish-game")
  scoreDisplay.innerHTML = `Score final: ${questionsCorrect * 100}`;
  correctAnswersDisplay.innerHTML = `Total de respostas corretas: ${questionsCorrect}`;
  const userScore = questionsCorrect * 100
  fetch('/admin/game-finished', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ score: userScore }), // Envia a pontuação para o servidor
  })
    .then((response) => {
      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        // Faz algo se a pontuação for enviada com sucesso
        console.log(response)
      } else {
        // Lida com erros se a requisição falhar
      }
    })
    .catch((error) => {
      console.log(error)
      // Lida com erros de rede ou outros erros
    });
}


function initializeGame() {
  const content = document.querySelector(".content");
  const contentFinish = document.querySelector(".finish");
  const btnRestart = document.querySelector(".finish button");
  const mainGame = document.querySelector(".main-game");
  const contentStatic = document.querySelector(".content-static")

  btnRestart.onclick = () => {
    // Remova a classe que indica que o jogo foi concluído
    mainGame.classList.remove("finish-game");
    contentStatic.style.display = "block"
    content.style.display = "flex";
    contentFinish.style.display = "none";
    currentIndex = 0;
    questionsCorrect = 0;
    errosDisplay = 3
    // Obtenha novas perguntas
    selectedQuestions = getRandomQuestions(questions, 10);

    // Chame a função para carregar a próxima pergunta
    loadQuestion();
  };

  loadQuestion();
}


document.addEventListener("DOMContentLoaded", () => {
  const verPodioBtn = document.querySelector(".podiumBtn");

  verPodioBtn.addEventListener("click", () => {
    window.location.href = "/admin/podium";
  });
  initializeGame();
});