const express = require('express')
const mongoose = require('mongoose')
const ProductsRoutes = require('./router/products')
const { mongodbURL } = require('./constants')

const PORT = process.env.PORT || 5000;
const app = express()
app.use(express.json())
app.use(ProductsRoutes)

async function start() {
  try {
    await mongoose.connect(mongodbURL)
    app.listen(PORT, () => {console.log('server has been started')})
  } catch (error) {
    console.log(error.message)
  }
}

start()
