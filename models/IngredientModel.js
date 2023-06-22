import mongoose, { Schema } from 'mongoose';

const ingredientSchema = new mongoose.Schema({
    cereal:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    amount:[{
        value:{type:Number},
        unit:{type:String}
    }]
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

export default Ingredient;