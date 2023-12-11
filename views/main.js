const layout = require('./layout');
const fs = require('fs');

module.exports = () => {
  try {
    const data = fs.readFileSync('perguntas.json', 'utf8');
    const dados = JSON.parse(data);

    let selectedQuestion = null;
    let gameStarted = false;

    // Gerar um número aleatório entre 1 e o total de perguntas
    while (!selectedQuestion) {
      const randomId = Math.floor(Math.random() * dados.length);
      selectedQuestion = dados.find(pergunta => pergunta.id === randomId);
    }

    const startButtonHTML = `
      <div class="page">
        <button id="startButton" class="btn-start">Iniciar Jogo</button>
      </div>
    `;

    const cardHTML = selectedQuestion ? `
      <div class="page" id="questionSection" style="display: none;">
        <form method="GET" class="formLogin">
          <section>
          <section>
          <div class="form-box">
            <div class="form-value">
              <form action="">
                <h1 class="tema-atv">Tema: ${selectedQuestion.tema}</h1>
                <div class="questao">${selectedQuestion.pergunta}</div>
                <div class="box-question">
                  <button class="opcao">${selectedQuestion.a}</button>
                  <button class="opcao">${selectedQuestion.b}</button>
                  <button class="opcao">${selectedQuestion.c}</button>
                  <button class="opcao">${selectedQuestion.d}</button>
                  <button class="opcao">${selectedQuestion.e}</button>
                  <button class="opcao">${selectedQuestion.f}</button>
                </div>
                <button class="btn-confirma">Confirmar Questão</button>
                <div class="resposta-certa">${selectedQuestion.resposta}</div>
              </form>
            </div>
          </div>
          </section>
          </section>
        </form>
      </div>
    ` : 'Não foi possível encontrar uma pergunta válida.';

  // ...

const fullContent = layout({ content: startButtonHTML + cardHTML });



const script = `
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const startButton = document.getElementById('startButton');
      const questionSection = document.getElementById('questionSection');

      startButton.addEventListener('click', function () {
        startButton.style.display = 'none';
        questionSection.style.display = 'block';
        // Defina gameStarted como true para indicar que o jogo começou
        gameStarted = true;
      });
    });
  </script>
`;

return fullContent + script;




  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return layout({ content: 'Erro ao ler o arquivo de perguntas' });
  }




};







