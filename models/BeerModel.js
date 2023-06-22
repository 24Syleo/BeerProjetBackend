import mongoose, { Schema } from 'mongoose';
import validator from 'validator';

const beerSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    tagline:{
        type:String,
        required:true,
        validate(v){
            if(!validator.isLength(v, {max:100})) throw new Error('tagline trop longue');
        }
    },
    ingredients:[{
        type: Schema.Types.ObjectId,
        ref:'Ingredient'
    }],
    image_url:{
        type:String,
        lowercase:true,
        trim:true
    }
});

const Beer = mongoose.model('Beer', beerSchema);

export default Beer;