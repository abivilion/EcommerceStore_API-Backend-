// This file is responsible for controlling and managing the requests 
// and response in json . 
const Product = require('../models/product') //HOW DATA WILL BE FORMATTED?

// THIS TO DISPLAY RETURN OF Product Static
const getAllProductsStatic = async (req, res) => {

    // throw new Error('Testing Async errors ')
    const products = await Product.find({ price: { $gt: 30 } })
    // .sort('price')
    .select('name price');


    res.status(200).json({ TOTAL_HITS: products.length, products });
};

// THIS TO DISPLAY RETURN OF All Products
const getAllProducts = async (req, res) => {
    //these are the filters of the products to be displayed 
    const { featured, company, name, sort, fields,numericFilters } = req.query;

    const queryObject = {}
    
    // filtering on FEATURED products
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }

    // filtering on COMPANY specific products  
    if (company) {
        queryObject.company = company
    }
    //  searching by name/keywords
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    // console.log( queryObject)
    //numericfilters
    if(numericFilters)
    {
        // operatorMap Object
        const operatorMap = {
            '>' :'$gt',
            '<' :'$lt',
            '=' :'$eq',
            '<=' :'$lte',
            '>=' :'$gte',
        };
        const regEx = /\b(>|<|=|<=|>=)\b/g;

        // when regeX matched then I get the code of the operator which is understandable to
        // mongoose/mongodb
        let filters =numericFilters.replace(
            regEx,
            (match)=>`-${operatorMap[match]}-`);
        console.log(filters );


        const options = ['price','rating'];
        filters = filters.split(',').forEach((item) => {

           // for each numericField there are 3 category 
           /*
           1.field
           2.operator
           3. value
           */

            const [field,operator,value] = item.split('-');
            
            // checking field existence in the options
            if(options.includes(field)) {
                queryObject[field] = {[operator]: Number(value)};
            }
        });
    }


    console.log( queryObject)

    // After modifying QueryObject by filters, searching in the DATABASE 
    let result = Product.find(queryObject);

    // sorting the filtered database
    if (sort) {
        const sortlist = sort.split(',').join(' ');
        result = result.sort(sortlist)
        // console.log(sort);
    }
     // default sorting will be according to DATE OF CREATION
    else {
        result = result.sort('createdAt');
    }

    // Returning only specified fields/data from filtered data like price,name,aopnay
    if (fields) {
        const fieldlist = fields.split(',').join(' ');
        result = result.select(fieldlist)
    }

  //Paging Operations
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip =(page -1)*limit;

    result = result.skip(skip).limit(limit);

    const products = await result;
    

    res.status(200).json({ TOTAL_HITS: products.length, products })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}