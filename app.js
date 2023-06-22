import 'dotenv/config';
import connectDb from './db/connect.js';
import express from 'express';
import beerRouter from './router/BeerRouter.js';
import ingRouter from './router/IngredientRouter.js'
import cors from 'cors';

const port = process.env.PORT
const app = express();

connectDb().catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/beer", beerRouter);
app.use("/ingredient", ingRouter);


app.listen(port, () => console.log('listening on port: ' + port));