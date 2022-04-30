require('dotenv').config()
// async erros
require('express-async-errors')  // express error suppressor
const express= require('express');
const app =express();
const connectDB = require('./db/connect') //connecting MongoDB database
const productsRouter = require('./routes/products') //bring routes

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())
 
//routes
// HOME PAGE
app.get('/',(req,res) => {
    res.send('<h1>Store API</h1> <a href="/api/v1/products"> Products Routes</a>')
})


// HOME PAGE = FIRST LOOK OF HOME PAGE FO SPECFIC LINK
// SPECIFIC LINK HOME PAGE
app.use('/api/v1/products',productsRouter)

//products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

//port setting
const port = process.env.PORT || 3000

const start =async() => {
    try{
        //connectDb
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening port ${port}...`))
    }
    catch(err) {
         console.log(err);
    }
}
start();
// console.log('04 Store API')
