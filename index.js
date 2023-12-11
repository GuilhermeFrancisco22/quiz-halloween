const modulo = require('express')
const cookieSession = require('cookie-session')
const server = modulo()

const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth/auth')
const productsRoutes = require('./routes/produtcts/products')



server.use(authRoutes)
server.use(productsRoutes)

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())


server.listen(7777, () => {
  console.log("Servidor no ar")
})