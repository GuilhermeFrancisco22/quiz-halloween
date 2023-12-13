const express = require('express')
const router = express.Router()
router.use(express.static("public"));

const userRepo = require('../../repositories/users')
const Signup = require('../../views/signup')
const Login = require('../../views/login')
const Abertura = require('../../views/open')
const Game = require('../../views/main')
const Podium = require("../../views/podium")

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
  const user = await userRepo.getOneBy({ nickname });
  if (user) {
    const validPassword = await userRepo.comparePassword(
      user.password,
      password
    );
    if (validPassword) {
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
  // res.sendFile('index.html', { root: 'public' });
  res.send(Game())

});

router.post('/game-finished', async (req, res) => {
  // Pontuação recebida do gameLogic
  const userScore = req.body.score;
  // Verifica se o usuário está autenticado
  if (req.session.userId) {
    // Carrega os dados do jogo do usuário a partir do banco de dados ou cria se não existir
    const userData = await userRepo.getOne(req.session.userId);
    userData.gameData = userData.gameData || {};

    // Atualiza a pontuação máxima do usuário se a nova pontuação for maior
    userData.gameData.maxScore = Math.max(userData.gameData.maxScore || 0, userScore);

    // Salva os dados do jogo associados ao usuário
    await userRepo.update(req.session.userId, { gameData: userData.gameData });
  }
  res.sendStatus(200);
});


// router.get('/podium', async (req, res) => {
//   if (req.session.userId) {
//     // Busca os dados do usuário a partir do seu ID de sessão
//     const userData = await userRepo.getOne(req.session.userId);

//     // Verifica se o usuário tem um nome de usuário (nickname) e pontuação máxima definida
//     if (userData.nickname && userData.gameData && userData.gameData.maxScore !== undefined) {
//       // Retorna os dados do perfil do usuário (nome e pontuação máxima)
//       res.json({
//         nickname: userData.nickname,
//         maxScore: userData.gameData.maxScore,
//       });
//     } else {
//       // Retorna uma resposta indicando que os dados não estão disponíveis
//       res.status(404).json({ error: 'Dados de perfil não encontrados' });
//     }
//   } else {
//     // Retorna uma resposta indicando que o usuário não está autenticado
//     res.status(401).json({ error: 'Usuário não autenticado' });
//   }
// });


router.get("/podium", (req,res)=>{
  res.send(Podium())
})


module.exports = router