# ECommerce Store Backend API

This API system can perform many features for user of any online store.
Some Features are:
<li>  Searching Products by Name </li>
<li>  Searching Products by Company </li>
<li>  Searching Products by Size  </li>
<li>  Searching Products by Rating </li>
<li>  Searching Featured or Unfeatured Products
<li>  Filtering The Results
<li>  Applying Numerical Filters 
    <li>

    Sorting Poducts in according to their choice.
    For Example -

    API
    http://localhost:3000/api/v1/products?sort=-price&company=ikea&numericFilters=price%3C30

    RESPONSE

    {
    "TOTAL_HITS": 6,
    "products": [
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-04-24T04:47:03.542Z",
            "_id": "6264d6481955e31bc8ce0fda",
            "name": "wooden bed",
            "price": 25,
            "company": "ikea",
            "__v": 0
        },
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-04-24T05:03:46.037Z",
            "_id": "6264da330d0ca9083442af96",
            "name": "wooden bed",
            "price": 25,
            "company": "ikea",
            "__v": 0
        },
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-04-24T04:47:03.542Z",
            "_id": "6264d6481955e31bc8ce0fce",
            "name": "emperor bed",
            "price": 23,
            "company": "ikea",
            "__v": 0
        },
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-04-24T05:03:46.037Z",
            "_id": "6264da330d0ca9083442af8a",
            "name": "emperor bed",
            "price": 23,
            "company": "ikea",
            "__v": 0
        },
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-04-24T04:47:03.542Z",
            "_id": "6264d6481955e31bc8ce0fdb",
            "name": "wooden desk",
            "price": 15,
            "company": "ikea",
            "__v": 0
        },
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-04-24T05:03:46.037Z",
            "_id": "6264da330d0ca9083442af97",
            "name": "wooden desk",
            "price": 15,
            "company": "ikea",
            "__v": 0
        }
    ]
    }

</li>    


<br>

### The Service is currently working succesfully on localhost PORT: 3000 by default. It can be change by assinging environment variable.
<li> 


      
       




     