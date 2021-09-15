let courseModel = require("../model/Accounts.model");

let getAllCourseDetails = (request,response)=> {
    
    courseModel.find({},(err,data)=> {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}

let storedCourseInfo = (request,response)=> {
    let course = request.body;

    courseModel.insertMany(course,(err,result)=> {
        if(!err){
                response.send("Record stored successfully")
        }else {
                response.send(err+"We built this city.");
        }
    })
}

let deleteCourseInfo = (request,response)=> {
    let cid = request.params.id;
    courseModel.deleteOne({id:cid},(err,result)=> {
        if(!err){
            response.send(result)
        }else {
            response.send(err);
        }
    })
}

let updateCourseDetails = (request,response)=> {
    let course = request.body;
    courseModel.updateOne({id:course.cid},{$set:{amount:course.amount}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}

module.exports= {getAllCourseDetails,storedCourseInfo,deleteCourseInfo,updateCourseDetails}