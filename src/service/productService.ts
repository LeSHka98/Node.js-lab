import { Response, Request } from 'express';
import { ProductsModel } from '../DataAccess/models/products';
import { CategoriesModel } from '../DataAccess/models/categories';
import { Category } from '../types/types'

async function getAllProducts(req:Request, res: Response) {
  const currentProducts = await ProductsModel.find()
  res.send(currentProducts)
}

async function createNewproduct(req:Request, res:Response) {
  let category: Category|null = null
  try {
    category = await CategoriesModel.findOne({displayName: req.body.category})
  } catch (error) {
    console.log(error)
    res.send(error)
  }
  if(!category) res.send('ERROR: category has not been found')
  else {
    const newGame = await ProductsModel.create({
      ...req.body,
      categoryId: category._id
    });

    newGame.save()
      .then((game) => res.send(game))
      .catch((error:any) => {
        console.log(error)
        res.send(error)
      })
  }
}

export {
  getAllProducts,
  createNewproduct
}