function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function OnSubmit()
{
    Ttext = document.getElementById("Ttext").value;
    MainContent = document.getElementById("MainContent").value;
    //Pic = document.getElementById("Pic").value;
    //Picdata = getBase64Image(Pic);
    let info = {Ttext: this.Ttext, MainContent: this.MainContent};
    localStorage.setItem(this.Ttext, JSON.stringify(info));
    console.log(localStorage.getItem(this.Ttext));
}


function OnDisplay()
{
    let NPBObj;
    let NPBJSON;
    var GridContent = "";
    var startGrid ="<div>"
    for(let i = 0; i <= localStorage.length-1; i++)
    {
        NPBObj = localStorage.getItem(localStorage.key(i));
        NPBJSON = JSON.parse(NPBObj);
        GridContent += "<div class='card' style='width: 18rem;'><div class='card-body'><h5 card='card-title'>"+ NPBJSON.Ttext + "</h5><p class='card-text'>"+ NPBJSON.MainContent+"</p></div></div>";
        
    }
    var endGrid = "</div>"
    GridContent = startGrid + GridContent + endGrid;
    document.getElementById("main").innerHTML=GridContent;

}