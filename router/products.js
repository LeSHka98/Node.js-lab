const { Router } = require('express')
const router = Router()
const Products = require('../models/products')
const Categories = require('../models/categories')

router.get('/products', async (req, res) => {
  const currentProducts = await Products.find()
  res.send(currentProducts)
})

router.post('/products', async (req, res) => {
  let category = {}
  try {
    category = await Categories.findOne({displayName: req.body.category})
  } catch (error) {
    console.log("ERROR : ", error.message)
  }
  const newGame = new Products({
    ...req.body,
    categoryId: category.id
  })
  newGame.save()
  res.send(newGame)
})

module.exports = router