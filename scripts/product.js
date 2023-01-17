

import Navbar from "../component/Navbar.js";
document.getElementById("header-navbar").innerHTML=Navbar();

let container=document.getElementById("container");
// let filtered=document.getElementById("filter");
let cartLs=JSON.parse(localStorage.getItem("Mens-page"))||[];

let totalcart=document.getElementById("total-cart");

function Display(mensData) {

  container.innerHTML=null;
  let total=0;
  mensData.forEach(function (ele,index) {
   
    total+=Number(ele.cart);
   
    let product= document.createElement("div");

    let img=document.createElement("img");
    img.src=ele.image_url;

    let name = document.createElement("p");
    name.innerText = ele.name;

    let price = document.createElement("h4");
    price.innerText = "MRP:-" + ele.price;

    let cart = document.createElement("button");
    cart.innerText = "Delete";
    cart.addEventListener("click",function(){
      DeleteCart(index);
    });

    product.append(img, name, price, cart);
    container.append(product);

  });
    //  document.querySelector("#total-cart").innerText=total;
//  totalcart.textContent=total;
}

console.log(cartLs);
// Display(mensData);
//Display(cartLs);

Display(cartLs);

function DeleteCart(index){
    let DeletedCart=cartLs.filter(function(el,i){
        return i !=index;
    });
    Display(DeletedCart);
    localStorage.setItem("Mens-page",JSON.stringify(DeletedCart));
}



