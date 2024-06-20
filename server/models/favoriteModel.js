const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = require('./userModel.js')

// userId
// label
// calories
// image
// ingredients // array -> need another ingredient's schema

// Define the ingredient schema
const ingredientSchema = new Schema({
  text: { type: String, required: true },
  quantity: { type: Number, required: true },
  measure: { type: String, required: true },
  food: { type: String, required: true },
});

const favSchema = new Schema({
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  label: { type: String, required: true },
  calories: { type: Number, required: true },
  image: { type: String, required: true },
  ingredients: [ingredientSchema],
});

module.exports = mongoose.model('Favorite', favSchema);
