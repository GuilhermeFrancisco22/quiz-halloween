const express = require('express')
const router = express.Router()
router.use(express.static("public"));

const userRepo = require('../../repositories/users')
const Signup = require('../../views/signup')
const Login= require('../../views/login')
const Abertura = require('../../views/open')
const Game = require('../../views/main')


router.get('/admin/login', (req, res) =>{
  res.send(Login())
})

router.get('/admin/signup', (req, res) =>{
  res.send(Signup())
})

router.get('/admin/open', (req, res) =>{
  res.send(Abertura())
})

router.get('/admin/game', (req, res) =>{
  res.send(Game())
})


module.exports = router