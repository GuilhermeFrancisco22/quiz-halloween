const modulo = require('express')
const cookieSession = require('cookie-session')
const server = modulo()

const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth/auth')
// server.set('view engine', 'ejs');
// server.set('views', path.join(__dirname, 'views'));

server.use(cookieSession({
  name: 'session',
  keys: ['septidfljkhsdlkgjdhsgkljsdhlgs69859680']
}));

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(modulo.static("public"));


server.use("/admin", authRoutes)


server.listen(7777, () => {
  console.log("Servidor no ar")
})