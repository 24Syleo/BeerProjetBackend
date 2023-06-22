import Ingredient from "../models/IngredientModel.js";

class IngredientController{

    //Creer un ingredient 
    static async createIngredient(req, res){
        try{
            const ing = new Ingredient(req.body);
            await ing.save();
            res.send(ing).status(201);
        }
        catch(error){
            res.status(500).send('pas creer');
        }
    }

    // Lire les ingrédients
    static async listIngredients(req, res){
        try{
            let ings = await Ingredient.find({});
            if(!ings)throw new Error('pas trouvé');
            res.send(ings).status(200)
        }
        catch(error){
            res.status(404).send('not found')
        }
    }
}

export default IngredientController;