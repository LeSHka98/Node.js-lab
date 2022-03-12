import { Schema } from 'mongoose'

interface Category {
  _id: Schema.Types.ObjectId,
  displayName: string,
  createdAt: Date
}

interface Product {
  _id: Schema.Types.ObjectId,
  categoryId: Schema.Types.ObjectId,
  displayName: string,
  createdAt: Date,
  totalRating: Number,
  price: Number
}

export {
  Category,
  Product
}