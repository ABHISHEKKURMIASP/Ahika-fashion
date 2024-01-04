const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{ 
        type:String,
        required: true,
    },
    description:{
        type:String,
        default:''
    },
    richDescription:{
        type:String,
        default:''
    },
    images:[{
        type:String,
        default:''
    }],
    brand:{
        type:String,
        default:''
    },
    price:{
        type:Number,
        required:true,
    },
    category: {
      type:String,
      default:'',
    },
    countInStock: {
        type: Number,
        required: true,
        min:0,
        max:255
      },
    rating: {
        type: Number,
        default: 0,
      },
    numReviews: {
        type: Number,
        default: 0,
      },
    isFeatured: {
        type: Boolean,
        default: true,
      },
    dateCreated: {
        type: Date,
        default: Date.new,
      },
  });

  const Product = mongoose.model('Product', productSchema);
  module.exports = { Product };
