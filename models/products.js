const { Schema, model} = require('mongoose')

const products = new Schema({
  displayName: { type: String, required: true},
  categoryId: { type: Schema.Types.ObjectId, required: true},
  createdAt: Date,
  totalRating: Number,
  price: {type: Number, required: true}
},
{ timestamps: true })

module.exports = model('Products', products)