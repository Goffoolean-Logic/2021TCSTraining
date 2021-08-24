export interface List
{
    Name: string;
    Price: number;
}

class Cart
{
    constructor(){}

    total = 0;

    getTotal(): number
    {
        return this.total;
    }

    addmore(Name: string, price: number): void
    {
        this.total = this.total + price;
        
    }

}



function add(Name:string, Price:number)
{
    let cart = new Cart();
    let Namelist = {} as List;
    Namelist.Name = Name;
    Namelist.Price += Price;
    cart.addmore(Name, Price);
    console.log(Name + " "+ Price);
    localStorage.setItem(Name, JSON.stringify(Namelist));

}

function createtable()
{
    let NPBObj;
    let NPBJSON;
    var tableContent = "";
    var startTable ="<table border=1 class='table'><tr><th>Product</th><th>Price $</th></tr>";
    
    for (let i = 0; i < localStorage.length; i++)
    {
        NPBObj = localStorage.getItem(localStorage.key(i));
        NPBJSON = JSON.parse(NPBObj);
        
        tableContent += "<tr><td>"+NPBJSON.Name+"</td><td>"+ Number(NPBObj.Price)+"</td></tr>";
    }

    var endTable = "</table>";
    tableContent = startTable + tableContent + endTable;
    document.getElementById("table").innerHTML=tableContent;

}


