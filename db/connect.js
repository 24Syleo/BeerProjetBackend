import 'dotenv/config';
import mongoose from 'mongoose';

const URI = process.env.URI;

async function connectDb() {
    await mongoose.connect(URI);
    console.log('DB connecté');
}

export default connectDb;