let obj = require("readline");
let fs = require("fs");
var r1 = obj.createInterface({
    input:process.stdin,        // standard input device keyboards 
    output:process.stdout       // standard output device console 
});

r1.question("Enter First Name: ",(Fname)=> 
{
    r1.question("Enter Last Name: ",(Lname)=> 
    {
        r1.question("Enter Gender: ",(Gender)=> 
        {
            r1.question("Enter Email: ",(Email)=> 
            {   
                let input = []
                var data = fs.readFileSync("data.json");

                let dataString = data.toString();
                let dataJson = JSON.parse(dataString);
                for(var i = 0; i < dataJson.length; i++) {
                    var dataobj = dataJson[i];
                    
                    console.log(dataobj.FName);

                    input.push(dataobj);

                }

                inputnew = {FName: Fname, Lname: Lname, Gender: Gender, Email: Email};
                console.log("Data from file is saved and stored.");
                
                input.push(inputnew);

                let dataStringer = JSON.stringify(input);

                fs.writeFileSync("data.json",dataStringer);
                
                console.log("data.json")
                
                r1.close();
            })   
        })   
    })
})