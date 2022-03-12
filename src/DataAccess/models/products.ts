import { Schema, model } from 'mongoose'
import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Categories } from './categories'
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// const products = new Schema({
//   displayName: { type: String, required: true},
//   categoryId: { type: Schema.Types.ObjectId, ref: 'Categories', required: true},
//   createdAt: Date,
//   totalRating: Number,
//   price: {type: Number, required: true}
// },
// { timestamps: true })

// export default model('Products', products)

class Products extends TimeStamps {
  @prop({type: String, required: true})
  public displayName!: string;

  @prop({ ref: () => Categories })
  public categoryId?: Ref<Categories>;

  @prop({type: Date})
  public createdAt?: Date;

  @prop({type: Number})
  public totalRating?: number;

  @prop({type: Number, required: true})
  public price!: number;
}

const ProductsModel = getModelForClass(Products)

export {
  Products,
  ProductsModel
}
