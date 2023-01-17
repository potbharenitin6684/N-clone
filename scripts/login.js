
import Navbar from "../component/Navbar.js";
document.getElementById("header-navbar").innerHTML=Navbar();

document.querySelector("form").addEventListener("submit",signin);
let Arrdata=JSON.parse(localStorage.getItem("userData")) || [];

function signin()
{
    event.preventDefault();

    let obj={
            email:document.querySelector("#email").value,
            password:document.querySelector("#password").value,
    }
    if(obj.email.length===0 && obj.password.length===0){
        alert("Filled Empty");
        return ;
    }
    else if(checkSignin(obj.email,obj.password)==true){
     
        alert("login Successfully");
        window.location.href="index.html";
    }
    else{
        alert("Wrong username or password");
    }
}

function checkSignin(email,password){
    let filtered=Arrdata.filter(function(elem){
        return elem.email===email && elem.password===password;
    })
    if(filtered.length>0){
        return true;
    }else{
        return false;
    }
}