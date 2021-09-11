// load the module 
let mongoose = require("mongoose")

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let productSchema = mongoose.Schema({
    course_id : Number,
    course_name : String,
    Description : String,
    Amount: Number
});

// using scheam creating model 
//1st parameter collection name 
// 2nd parameter schema reference. 
let productModel = mongoose.model("Product",productSchema);

module.exports=productModel;    // we can import using require.
                                // in anothe file 