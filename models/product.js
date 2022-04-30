// Data Format and Template -Data Modelling
// This responsbile for putting the data in format according to assigned schema



const mongoose = require('mongoose')


// Single Product Template
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Product Name must be Provided']
    },
    price: {
        type:Number,
        required: [true,'product price must be provided']   
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),

    },
    company:{
        type:String,
        enum: {
            values: ['ikea','liddy','caressa','marcos'],
            message: '{VALUE} is not supported',
        } , 
   
        // enum:['ikea','liddy','caressa','marcos'], // on this option will be considered
    },

})



module.exports = mongoose.model('Product', productSchema)