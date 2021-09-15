let mongoose = require("mongoose")

let CourseSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    amount: {
        type: Number,
    },
});

let CourseModel = mongoose.model("course",CourseSchema);

module.exports=CourseModel;