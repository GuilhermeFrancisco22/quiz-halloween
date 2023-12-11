const express = require('express')
const router = express.Router()




router.get('/admin/products', (req, res) =>{
  res.send('lista de produtos admin')
})
router.post('/admin/add-product', (req, res) =>{
  res.send('adicionando produtos admin')
})
router.post('/admin/create-product', (req, res) =>{
  res.send('criando produtos produtos admin')
})
router.post('/admin/delete-product', (req, res) =>{
  res.send('deletando produtos admin')
})

module.exports = router