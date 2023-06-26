import Beer from "../models/BeerModel.js";

class BeerController{

    //Creer une bière avec les ingrédients
    static async createBeer(req, res){
        try{
            const beer = new Beer(req.body);
            await beer.save();
            res.send(beer).status(201);
        }
        catch(error){
            res.status(500).send('pas creer');
        }
    }

    // Lire la Bière
    static async oneBeer(req, res){
        try{
            const beerId = req.params.id;
            const beer = await Beer.findById(beerId).populate('ingredients');
            if(!beer)throw new Error('pas trouvé');
            res.send(beer).status(200)
        }
        catch(error){
            res.status(404).send('not found')
        }
    }

    //liste de bières
    static async listBeer(req,res){
        try{
            const beers = await Beer.find({}).populate('ingredients');
            if(!beers)throw new Error('gros souci');
            res.send(beers).status(200)
        }
        catch(error){
            res.status(404).send('not found');
        }
    }

    //supprimer une bière
    static async deleteBeer(req,res){
        try{
            const beerId = req.params.id;
            const beer = await Beer.deleteById({beerId});
            return beer;
        }
        catch(error){
            res.status(404).send('not found');
        }
    }
}

export default BeerController;