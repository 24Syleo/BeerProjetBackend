import 'dotenv/config';
import connectDb from './db/connect.js';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import beerRouter from './router/BeerRouter.js';
import ingRouter from './router/IngredientRouter.js'
import cors from 'cors';

const port = process.env.PORT
const app = express();
const server = http.createServer(app);

const corsOptions = {
    origin: process.env.CLIENT_URL,
    // credentials: true,
    // allowedHeaders: ['sessionId', 'Content-Type'],
    // exposedHeaders: ['sessionId'],
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // preflightContinue: false
}

const io = new Server(server,{
    cors: corsOptions
});

connectDb().catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/beer", beerRouter);
app.use("/ingredient", ingRouter);

io.on("connection", (socket) => {
    console.log("connection réussi");
    socket.on("disconnect",()=>{
        console.log("deconnexion")
    });
});

server.listen(port, () => console.log('listening on port: ' + port));