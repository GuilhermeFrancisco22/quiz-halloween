const layout = require('./layout')


module.exports = () => {
  return layout({
    content: `
      <div class="page">
      <form method="POST" class="formLogin">
          <h1>Cadastro</h1>
          <p>Digite os seus dados de acesso no campo abaixo.</p>
          <label for="text">Nickname</label>
          <input type="text" name="nickname" placeholder="Digite seu nick" autofocus="true" />
          <label for="password">Senha</label>
          <input type="password" name="password" placeholder="Digite sua senha" />
          <a href="./login">Voltar para login</a>
          <input type="submit" value="Cadastrar" class="btn" />
      </form>
  </div>
`
  })
}