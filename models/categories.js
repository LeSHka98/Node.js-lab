const { Schema, model} = require('mongoose')

const categories = new Schema({
  displayName: { type: String, required: true},
  createdAt: Date
},
{ timestamps: true })

module.exports = model('Categories', categories)