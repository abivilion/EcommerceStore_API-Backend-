// dynamically adding all the values in my database.
// Doing manual tasks on each data/values will be hectic. SO lets computer works for it!

require('dotenv').config()

const connectDB =require('./db/connect');
const Product = require('./models/product');

//database in JSON format
const jsonProducts = require('./products.json') // database


const start =async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        // await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log("SUCCESS!!")
        process.exit(0);    
    }
    catch(error)
    {
        console.log(error);
        process.exit(1);
    }
}

start();