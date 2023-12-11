const layout = require('./layout')


module.exports = () => {
  return layout({
      content: `
   
      <img src="/img/banner.png" alt="">
      <div class="btn-open">
      <a class="btn-entrar" href="./login">Iniciar</a>
    </div>
 
`
})
}