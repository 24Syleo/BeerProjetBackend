import express from 'express';
import IngredientController from '../controller/IngredientController.js';

const  ingRouter = express.Router();

//create ingredient
ingRouter.post("/", IngredientController.createIngredient);
//liste d'ingrédients
ingRouter.get("/",IngredientController.listIngredients);

export default ingRouter;