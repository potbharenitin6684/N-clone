

 import Navbar from "../component/Navbar.js";
 document.getElementById("header-navbar").innerHTML=Navbar();


let imglink = [
    "https://images-static.nykaa.com/uploads/1d459dbd-d17d-4102-a955-d1e2a1008311.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/91cb363a-b097-483e-b767-6383da30d4ec.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/de9e752b-71b0-47c7-b4b5-c888324cdc68.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/f5433d64-76bb-40cb-a653-22a4db486ce2.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/7fcd792e-50bf-4ac7-9d5d-84923fd30c11.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/6219a716-d8a5-4394-aaa1-d0191eb58bf2.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/1d601355-3c40-405e-9413-07de9505b8d8.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/bdbbd2fa-cb33-4410-ab3f-9b66b8052ebb.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/54aa25bd-78c1-4801-9547-806dea2ff3f4.jpg?tr=w-1200,cm-pad_resize",
  ];

  let crauser = document.getElementById("crauser");
  let leftbtn = document.getElementById("left-btn");
  let rightbtn = document.getElementById("right-btn");

  let imgstate = 0;

  rightbtn.addEventListener("click", function () {
    imgstate++;
    if (imgstate === imglink.length) {
      imgstate = 0;
    }
    crauser.src = imglink[imgstate];
  });
  leftbtn.addEventListener("click", function () {
    imgstate--;
    if (imgstate < 0) {
      imgstate = imglink.length - 1;
    }
    crauser.src = imglink[imgstate];
  });   
  
var mensData = [
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/a/8af2903NYKAC00000165_1.jpg",
      name: "Nykaa All Day Matte Long Wear Liquid Foundation With Pump - Beige",
      price: "₹750",
      productID:"men1",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/2/22769_h-8901030366086m.jpg",
      name: "Lakme Absolute Skin Natural Mousse - Ivory Fair 01",
      price: "₹449",       
      productID:"men2",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/a/2aefacd3600522862383_1.jpg",
      name: "L'Oreal Paris True Match Super-Blendable Foundation - N1 Ivory",
      price:"₹524",
      productID:"men3",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/b/0b4f0c58904245701505_0.jpg",
      name: "Smashbox Step-By-Step Contour Kit + Free Brush",
      price:"₹349",        
      productID:"men4",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/5/05f40098904325000610_1.jpg",
      name: "Swiss Beauty Baked Blusher & Highlighter - 01",
      price: "₹262",
      productID:"men5",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/3/b394c92NYKAC00000441_1.jpg",
      name: "Nykaa Cosmetics Black Magic Kajal Set Of 2",
      price:"₹425",
      productID:"men6",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/e/ae6105d8903380159448_NEW_1.jpg",
      name: "Faces Canada Ultime Pro Intense Gel Kajal With Free Sharpener - Black",
      price:"₹425",
      productID:"men7",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/9/09d037emacxx00000225_0.jpg",
      name: "M.A.C In Extreme Dimension 24hr Kajal Eye Liner",
      price: "₹769",
      productID:"men8",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/b/5bd6621nypac00001143_new_0.jpg",
      name: "PAC Longlasting Kohl Pencil - Skin",
      price:"₹325",
      productID:"men9",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/8/2844b5941554590913_1.jpg",
      name: "Maybelline New York Lash Sensational Sky High Waterproof Mascara",
      price:"₹545",        
      productID:"men10",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904245712921_1.jpg",
      name: "Nykaa Lash Talk Curl Power Curling Mascara",
      price:"₹325",
      productID:"men11",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/b/8b9e0208904330902039_1.jpg",
      name: "Kay Beauty Ultra Black Volume & Length Mascara - Midnight",
      price: "₹545",
      productID:"men12",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/9/6902395395935.1.jpg",
      name: "Maybelline New York Lash Sensational Waterproof Mascara Black",
      price:"₹625",        
      productID:"men13",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/8/1869d57HUDAB00000389_1.jpg",
      name: "Huda Beauty Legit Lashes Double-ended Mascara",
      price:"₹1349",
      productID:"men14",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/a/0ac7f0524859_h-8901030794773.jpg",
      name: "Lakme 9 To 5 Primer + Matte Lipstick - MP8 Rosy Sunday",
      price:"₹899",
      productID:"men15",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e5ab4c76902395803829_1.jpg",
      name: "Maybelline New York Color Sensational Ultimattes Lipstick - More Buff",
      price:"₹575",
      productID:"men16",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/4/b457bc88904320702311.jpg",
      name: "SUGAR Matte Attack Transferproof Lipstick - 05 Tan Halen (Chocolate Brown)",
      price:"₹445",
      productID:"men17",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/7/872bf08RENEE00000100_01.png",
      name: "Renee Cosmetics Madness PH Stick",
      price:"₹266",
      productID:"men18",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/7/773602470426_mini.jpg",
      name: "M.A.C Lipstick / Mini - Mehr",
      price:"₹1645",
      productID:"men19",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/6/c646bc88904320706272.jpg",
      name: "SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 35 Claire Redfield (Pure Red)",
      price:"₹753",
      productID:"men21",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/9/c93e2608904330900004_2.jpg",
      name: "Giorgio Armani Acqua Di Gio Eau De ToiletteKay Beauty Matteinee Matte Lip Crayon Lipstick -Wee hours(1.8g)",
      price:"₹800",
      productID:"men20",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/9/6902395737490_1_.jpg",
      name: "Maybelline New York Super Stay Crayon Lipstick - 15 Lead the Way(1.2g)",
      price:"₹750",
      productID:"men22",
    },
    {
      image_url:
        " https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/a/ca52eecpacxx00000133_1.jpg",
      name: "PAC X Jovita #AllYouNeed Brush Kit (8 Brushes)(1 pcs)",
      price:"₹2545",
      productID:"men23",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/4/d4db4ac8904245713591_1.jpg",
      name: "Nykaa Breathable Nail Enamel - Bare Skin - 318",
      price:"₹825",
      productID:"men24",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/0/90971908901030715693_1.jpg",
      name: "Lakme Color Crush Nail Art - U4(6ml)",
      price:"₹145",
      productID:"men25",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/1/3171bd75060542721547.jpg",
      name: "Charlotte Tilbury Luxury Palette - Pillow Talk(5.2gm)",
      price:"₹2399",
      productID:"men26",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/2/6291106034271_1.jpg",
      name: "Huda Beauty Nude Obsessions Mini Eyeshadow Palette - Medium",
      price:"₹2600",
      productID:"men27",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/5/f542abdhudab00000070__1_.jpg",
      name: "Huda Beauty Naughty Nude Eyeshadow Palette",
      price:"₹5600",
      productID:"men28",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/f/4ff0bd75060542728508.jpg",
      name: "Charlotte Tilbury Instant Eye Palette - Pillow Talk",
      price:"₹6310",
      productID:"men29",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/c/d/cd037fb773602040605_0.jpg",
      name: "M.A.C Retro Matte Lipstick - Ruby Woo",
      price:"₹750",
      productID:"men30",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/7/3/739429a773602345830_rv__1.jpg",
      name: "M.A.C Prep + Prime Fix+ - Original",
      price: "₹1250",
      productID:"men31",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/a/da4a1bbNYKAC00000926_1.jpg",
      name: "Nykaa All Day Matte Long Wear Foundation + Compact - Ivory",
      price:"₹1769",
      productID:"men32",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/d/1d6e119morab00000003_1.jpg",
      name: "MORPHE Artistry Palette - The James Charles",
      price:"₹7059",
      productID:"men33",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/4/045c9fd5057566133517_1.jpg",
      name: "Makeup Revolution Maxi Reloaded Eyeshadow Palette - Dream Big",
      price:"₹1299",
      productID:"men34",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/3/73f0f5f8904245702557_1.jpg",
      name: "Moi by Nykaa Raison D'Etre Eau de Perfume",
      price:"₹1145",
      productID:"men35",
    },
    {
      image_url:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/3/c3f60098904325002294_1.jpg",
      name: "Swiss Beauty Ultimate Shadow Palette - 2",
      price:"₹299",
      productID:"men36",
    },
  ];
  
  let container=document.getElementById("container");
  // let filtered=document.getElementById("filter");
  let cartLs=JSON.parse(localStorage.getItem("Mens-page"))||[];
  
  let totalcart=document.getElementById("total-cart");
  
  function Display(mensData) {
    
    container.innerHTML=null;
   
  
    mensData.forEach(function (ele) {
      let total=0;
      total=Number(total)+Number(ele.cart);
     
      let product= document.createElement("div");
  
      let img=document.createElement("img");
      img.src=ele.image_url;
  
      let name = document.createElement("p");
      name.innerText = ele.name;
  
      let price = document.createElement("h4");
      price.innerText = "MRP:-" + ele.price;
  
      let cart = document.createElement("button");
      cart.innerText = "Add to bag";
      cart.addEventListener("click",function(){
        AddToCart(ele);
      })
  
      product.append(img, name, price, cart);
      container.append(product);
  
    });
      //  document.querySelector("#total-cart").innerText=total;
      totalcart.textContent=total;
  }
  Display(mensData);
  
  function AddToCart(product){
      let iscartAdded=false;
      for(let i=0;i<cartLs.length;i++){
          if(cartLs[i].productID===product.productID){
              alert("product already in the Cart");
              iscartAdded=true;
              break;
          }
      }
      if(iscartAdded===false){
          cartLs.push(product);
          alert("product Added Successfull");
          localStorage.setItem("Mens-page",JSON.stringify(cartLs));
      }
  }
  // filtered.addEventListener("change",function(){
  //   let filtered =mensData.filter(function(ele){
  //      return ele.Category===filter.value;
  //    });
  //   Display(filtered);
  