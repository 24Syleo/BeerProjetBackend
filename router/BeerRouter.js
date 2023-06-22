import express from 'express';
import BeerController from '../controller/BeerController.js';

const beerRouter = express.Router();

//creation d'une bière
beerRouter.post("/", BeerController.createBeer);
//lire une bière
beerRouter.get("/:id", BeerController.oneBeer);
//liste des bières
beerRouter.get("/", BeerController.listBeer);

export default beerRouter;