function OnSubmit()
{
    Name = document.getElementById("Cname").value;
    Project = document.getElementById("Pname").value;
    Budget = document.getElementById("Budget").value;
    let info = {Name: this.Name, Project: this.Project, Budget: this.Budget};
    localStorage.setItem(this.Project, JSON.stringify(info));
    console.log(localStorage.getItem(this.Project));

}

function loadvariable()
{

}

function OnDisplay()
{
    let NPBObj;
    let NPBJSON;
    var tableContent = "";
    var startTable ="<table border=1 class='table'><tr><th>Client Name</th><th>Project Name</th><th>Budget $</th></tr>"
    for(let i = 0; i <= localStorage.length-1; i++)
    {
        NPBObj = localStorage.getItem(localStorage.key(i));
        NPBJSON = JSON.parse(NPBObj);
        tableContent += "<tr><td>"+NPBJSON.Name+"</td><td>"+NPBJSON.Project+"</td><td>"+"$"+NPBJSON.Budget+"</td></tr>";
        
    }
    var endTable = "</table>";
    tableContent = startTable + tableContent + endTable;
    document.getElementById("main").innerHTML=tableContent;

}