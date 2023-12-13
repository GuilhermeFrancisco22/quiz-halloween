const layout = require('./layout');

module.exports = (req, res) => {

  return layout({
    content: `
    <div class="body-game">
    <h2>QUIZ APP</h2>
    <main class="main-game">
      <div class="content">
      <div class="content-static">
      <span class="spnQtd"></span>
      <span class="qtd-erro"></span>
      <div class="question"></div>
      <div class="answers"></div>
      </div>
        <span class="score"></span>
        <span class="correct-answers"></span>
      </div>
      <div class="finish">
        <span class="span-score"></span>
        <button>Reiniciar</button>
        <button class="podiumBtn">ver pódio</button>
      </div>
    </main>
  </div>
  
    <script src="/scripts/gameLogic.js"></script>
`
  })
}