

import Navbar from "../component/Navbar.js";
document.getElementById("header-navbar").innerHTML=Navbar();

//  document.querySelector("form").addEventListener("submit",signup)
//  Arrdata=JSON.parse(localStorage.getItem("userData")) || [];

//  document.querySelector("div").addEventListener("click",google)
 
//  function google(){
//      window.location.href="https://mail.google.com/mail/?tab=rm"
//  }

//  function signup(){
//      event.preventDefault()

//      let obj={
//          name:document.querySelector("#name").value,
//          email:document.querySelector("#email").value,
//          password:document.querySelector("#password").value,
          
//      }
     
//      if(checkEmail(obj.email)===true){
//          Arrdata.push(obj);

//          localStorage.setItem("userData",JSON.stringify(Arrdata));
//          alert("Thank you for sign In");
//          window.location.href="login.html";
//      }
//      else if(obj.name == "" || obj.email=="" || obj.password=="")
//      {
//          alert("Filed Empty");
//          return 
//          Arrdata.push(obj);
//      }
   
//      else{
//              alert("Account already exist");
//      }
//  }

//  function checkEmail(email){
//      let filtered=Arrdata.filter(function(elem){
//          return email===elem.email;
//      })
//      if(filtered.length>0){
//          return false;
//      }else{
//          return true;
//      }
//  }