import express from 'express';
import mongoose from 'mongoose';
import ProductsRoutes from './routes/products';
import mongodbURL from './constants';

const PORT = process.env.PORT || 5000;
const app = express()
app.use(express.json())
app.use(ProductsRoutes)

async function start() {
  try {
    await mongoose.connect(mongodbURL)
      .then(() => console.log('Connected to DB'))
      .catch((error) => console.log(error))

    app.listen(PORT, () => { console.log('server has been started')})
  } catch (error) {
    console.log(error)
  }
}

start()
