const express = require('express')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth/auth')
const server = express()

server.use(cookieSession({
  name: 'session',
  keys: ['septidfljkhsdlkgjdhsgkljsdhlgs69859680']
}));
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(express.static("public"));
server.use('/scripts', express.static('public/scripts', { 'extensions': ['js'] }));
server.use("/admin", authRoutes)

server.listen(7777, () => {
  console.log("Servidor no ar")
})