import { Schema, model } from 'mongoose'
import { prop, getModelForClass } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// const categories = new Schema({
//   displayName: { type: String, required: true},
//   createdAt: Date
// },
// { timestamps: true })

// export default model('Categories', categories)

class Categories extends TimeStamps {
  @prop({type: String, required: true})
  displayName!: String;

  @prop({type: Date})
  createdAt?: Date;
}

const CategoriesModel = getModelForClass(Categories)

export {
  Categories,
  CategoriesModel
}