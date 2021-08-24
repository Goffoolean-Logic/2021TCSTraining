"use strict";
exports.__esModule = true;
var Cart = /** @class */ (function () {
    function Cart() {
        this.total = 0;
    }
    Cart.prototype.getTotal = function () {
        return this.total;
    };
    Cart.prototype.addmore = function (Name, price) {
        this.total = this.total + price;
    };
    return Cart;
}());
function add(Name, Price) {
    var cart = new Cart();
    var Namelist = {};
    Namelist.Name = Name;
    Namelist.Price += Price;
    cart.addmore(Name, Price);
    console.log(Name + " " + Price);
    localStorage.setItem(Name, JSON.stringify(Namelist));
}
function createtable() {
    var NPBObj;
    var NPBJSON;
    var tableContent = "";
    var startTable = "<table border=1 class='table'><tr><th>Product</th><th>Price $</th></tr>";
    for (var i = 0; i < localStorage.length; i++) {
        NPBObj = localStorage.getItem(localStorage.key(i));
        NPBJSON = JSON.parse(NPBObj);
        tableContent += "<tr><td>" + NPBJSON.Name + "</td><td>" + Number(NPBObj.Price) + "</td></tr>";
    }
    var endTable = "</table>";
    tableContent = startTable + tableContent + endTable;
    document.getElementById("table").innerHTML = tableContent;
}
