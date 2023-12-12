const layout = require('./layout');
const fs = require('fs');

module.exports = (req, res) => {
  try {
    const data = fs.readFileSync('perguntas.json', 'utf8');
    const questions = JSON.parse(data);

    let currentQuestionIndex = 0;
    let score = 0;
    let attempts = 3; // Definindo três tentativas por pergunta

    // Função para verificar a resposta do usuário
    function checkAnswer(selectedOption) {
      const currentQuestion = questions[currentQuestionIndex];
      if (!currentQuestion || attempts === 0) {
        // Se não há mais perguntas ou as tentativas acabaram, encerra o jogo
        // Você pode adicionar aqui a lógica para mostrar o resultado final
        console.log('Fim do jogo. Pontuação:', score);
        return;
      }

      if (selectedOption === currentQuestion.resposta) {
        score++;
      } else {
        attempts--;
      }

      // Avança para a próxima pergunta
      currentQuestionIndex++;

      // Atualiza a interface com a próxima pergunta (se houver)
      showQuestion();
    }

    // Função para exibir a pergunta atual
    function showQuestion() {
      const currentQuestion = questions[currentQuestionIndex];

      const startButtonHTML = `
        <div class="page">
          <button id="startButton" class="btn-start" style="display: ${currentQuestion ? 'none' : 'block'}">Iniciar Jogo</button>
        </div>
      `;

      const cardHTML = currentQuestion ? `
        <div class="page" id="questionSection">
          <form method="GET" class="formLogin" onsubmit="return false;">
            <section>
              <section>
                <div class="form-box">
                  <div class="form-value">
                    <form action="">
                      <h1 class="tema-atv">Tema: ${currentQuestion.tema}</h1>
                      <div class="questao">${currentQuestion.pergunta}</div>
                      <div class="box-question">
                        <button class="opcao" onclick="checkAnswer('${currentQuestion.a}')">${currentQuestion.a}</button>
                        <button class="opcao" onclick="checkAnswer('${currentQuestion.b}')">${currentQuestion.b}</button>
                        <button class="opcao" onclick="checkAnswer('${currentQuestion.c}')">${currentQuestion.c}</button>
                        <button class="opcao" onclick="checkAnswer('${currentQuestion.d}')">${currentQuestion.d}</button>
                        <button class="opcao" onclick="checkAnswer('${currentQuestion.e}')">${currentQuestion.e}</button>
                        <button class="opcao" onclick="checkAnswer('${currentQuestion.f}')">${currentQuestion.f}</button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </section>
          </form>
        </div>
      ` : 'Não foi possível encontrar uma pergunta válida.';

      const fullContent = layout({ content: startButtonHTML + cardHTML });

      // Envia a página HTML gerada para o cliente
      res.send(fullContent);
    }

    // Mostra a primeira pergunta quando o jogo inicia
    showQuestion();

  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    res.send(layout({ content: 'Erro ao ler o arquivo de perguntas' }));
  }
};
