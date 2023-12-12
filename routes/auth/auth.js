const express = require('express')
const router = express.Router()
router.use(express.static("public"));

const userRepo = require('../../repositories/users')
const Signup = require('../../views/signup')
const Login = require('../../views/login')
const Abertura = require('../../views/open')
const Game = require('../../views/main')

router.get('/signup', (req, res) => {
  res.send(Signup())
})

router.post('/signup', async (req, res) => {
  const { nickname, password } = req.body
  const user = await userRepo.create({ nickname: nickname, password: password })
  console.log(user)
  res.redirect("/admin/game")
})

router.get('/login', (req, res) => {
  res.send(Login(req, res))
})

router.post('/login', async (req, res) => {
  const { nickname, password } = req.body;
  //Para testar tem que enviar os dados!! Alterar na view e aqui
  //Antes de atribuir, temos q consultar o BD e ver se esta tudo
  //correto!!
  //1 Passo - verificar se tenho e email na base!
  const user = await userRepo.getOneBy({ nickname });
  if (user) {
    //Verificar se a senha ~e igual
    //Add o user no cookie session
    //Redireciono ele para home
    const validPassword = await userRepo.comparePassword(
      user.password,
      password
    );
    if (validPassword) {
      //Aplicar uma session
      //req.session (o session posso utilizar por causa do pacote cookie-session)
      //.userId => identificação criada pelo desenvolvedor
      req.session.userId = user.id;
      res.redirect("/admin/game");
    } else {
      res.redirect('/admin/error')
    }
  } else {
    res.redirect('/admin/error')
  }
})

router.get('/', (req, res) => {
  res.send(Abertura())
})

router.get('/game', (req, res) => {
  const questions = getQuestions();
  if (questions) {
    const renderedHTML = renderQuestions(questions);
    res.send(renderedHTML);
  } else {
    res.send('Não foi possível carregar as perguntas.');
  }
});

module.exports = router