const { table } = require("console");
let fs = require("fs");
let http = require("http");
let url = require("url");


let mainpage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href=Stylesheet.css>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Planner</title>
</head>
<body>

    <div class = "Mbigdiv">
        <label>Add Task</label>
        <form action="addTask">
            <label>Emp ID: </label>
            <input type="text" name="empid"><br>
            <label>Task ID: </label>
            <input type = "text" name="taskid"><br>
            <label>Task: </label>
            <input type = "text" name="taskname"><br>
            <label>Deadline: </label>
            <input type = "text" name="deadline"><br>
            <input type = "submit" value="Add Task">
        </form>
    </div>

    <div class = "bigdiv">
        <br>
        <label>Delete Task</label>
        <form action="deleteTask">
            <label>Task ID:</label>
            <input type = "text" name="Dtaskid"><br>
            <input type = "submit" value ="Delete">
        </form>
    </div>

    <br>
    <div class = "Lbigdiv">
        <label>List of Tasks</label>
        <form action="showtable">
            <input type = "submit" value ="Show List">
        </form>


    </div>
</body>
</html>
`

let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    //console.log(urlInfo)
    //console.log("path "+urlInfo.path)   // path :path name with query details 
    //console.log("pathName"+urlInfo.pathname)    // pathname : only path 
    if(urlInfo.path != "/favicon.ico"){
        
        
        if(urlInfo.pathname == "/addTask"){
                let taskinfo = urlInfo.query;
                let taskinfos = JSON.parse(fs.readFileSync("data.json").toString());
                
                let result = taskinfos.find(t=>t.tid === taskinfo.taskid);

                console.log(result);
                // 200 -success code , content type in header text/html
                response.writeHead(200,{"content-type":"text/html"});
                if(result == undefined){
                    
                    taskdata = []

                    for(var i = 0; i < taskinfos.length; i++) {
                        var taskobj = taskinfos[i];
    
                        taskdata.push(taskobj);
    
                    }

                    let empid = taskinfo.empid;
                    let taskid = taskinfo.taskid;
                    let taskname = taskinfo.taskname;
                    let deadline = taskinfo.deadline;

                    let newtask = {empid: empid, taskid: taskid, taskname: taskname, dline: deadline}

                    taskdata.push(newtask);

                    fs.writeFileSync("data.json", JSON.stringify(taskdata));

                    
                    response.write(mainpage);

                }
                else 
                {
                    response.write("Sorry bro, that task id is already taken. :(");     
                    response.write(mainpage); 
                }
        }

        else if(urlInfo.pathname == "/deleteTask"){
            let deleteid = urlInfo.query;
            let taskinfos = JSON.parse(fs.readFileSync("data.json").toString());

            let result = taskinfos.find(t=>t.tid === deleteid.taskid);

            taskdata = []

            console.log(result);

            if(result != undefined){
                
                for(var i = 0; i < taskinfos.length; i++) {
                    var taskobj = taskinfos[i];

                    console.log("This is the taskobj: " + taskobj);

                    if(result.taskid === taskobj.taskid)
                    {
                        console.log(result.taskid + " is deleted.");
                    }

                    else{
                        taskdata.push(taskobj);
                    }
                }
                
                fs.writeFileSync("data.json", JSON.stringify(taskdata));

                response.write(mainpage);
            }

            else 
            {
                response.write("That taskid doesn't exist."); 
            }

        }

        else if(urlInfo.pathname == "/showtable")
        {
            let updatedtasks = JSON.parse(fs.readFileSync("data.json").toString());

            var tableContent="";

            var startTable = "<table border = 1><tr><th>Employnodee ID</th><th>Task ID</th><th>Task</th><th>Deadline</th></tr>"

            updatedtasks.forEach(e=>{
                tableContent+= "<tr><td>" + e.empid + "</td><td>" + e.taskid + "</td><td>" + e.taskname + "</td><td>" + e.dline + "</td></tr>";
            });

            var endTable = "</table>";

            var Table = startTable + tableContent + endTable; 

            response.write(mainpage + Table);
        }

        else {
            response.write(mainpage);  
        }
    }
    
    response.end();

})

server.listen(9090,()=>console.log("Server running on port number 9090"))