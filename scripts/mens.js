
import Navbar from "../component/Navbar.js";
document.getElementById("header-navbar").innerHTML=Navbar();

var mensData = [
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/6/6630749NYBEARDO00025_1.jpg",
    name: "Beardo Hair Growth Oil",
    price: "₹750",
    productID:"mens1",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/5/f530b74NYKAE00000035_1.jpg",
    name: "Nykaa SKINRX Vitamin C Illuminate + Night Moisturizer For Normal to Dry Skin",
    price: "₹449",       
    productID:"mens2",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/7/57c37308904223818706_1.jpg",
    name: " Ustraa Hair Growth Vitalizer - Boost Hair Growth, Prevents Hairfall With Redensyl, Jojoba Oil",
    price:"₹524",
    productID:"mens3",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/9/994a850NYKAB00000184_1.jpg",
    name: "Nykaa Naturals Tea Tree & Neem Purifying & Hydrating Gel",
    price:"₹349",        
    productID:"mens4",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/b/1bca9528907367001867_1.jpg",
    name: "The Man Company Charcoal Face Wash With Ylang-Ylang & Argan",
    price: "₹262",
    productID:"mens5",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/a/2abba1cNYKMCF0000002_1.jpg",
    name: "MCaffeine Exfoliating Coffee Body Scrub for Tan Removal & Soft-Smooth Skin - 100% Natural & Vegan",
    price:"₹425",
    productID:"mens6",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/a/2abba1cNYKMCF0000002_1.jpg",
    name: "MCaffeine Exfoliating Coffee Body Scrub for Tan Removal & Soft-Smooth Skin - 100% Natural & Vegan",
    price:"₹425",
    productID:"mens7",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/d/cd9f379nykmcf0000008_1_new.jpg",
    name: "MCaffeine Choco Body Butter - 72Hrs Intense Non-Sticky Moisturization - Reduces Stretch Marks & Heals Dry Skin",
    price: "₹769",
    productID:"mens8",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/c/acf7879NYKMCF0000004_1.jpg",
    name: "MENMCaffeine Exfoliating Coffee Face Scrub with Walnut & Vitamin E for Tan, Blackheads & Dirt Removal'S REEBOK TRAINING WORKOUT  TEE  ",
    price:"₹325",
    productID:"mens9",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/f/efd9418NYMCFN0000029_1.jpg",
    name: "MCaffeine Coffee Under Eye Cream for Dark Circle & Puffiness Reduction with Vitamin E & Hyaluronic Acid",
    price:"₹545",        
    productID:"mens10",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/c/3c45fdcNYMCFN0000022_1.jpg",
    name: "MCaffeine Exfoliating Coffee Face Scrub with Walnut & Vitamin E for Tan, Blackheads & Dirt Removal",
    price:"₹325",
    productID:"mens11",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/f/efd9418NYMCFN0000029_1.jpg ",
    name: "MCaffeine Coffee Under Eye Cream for Dark Circle & Puffiness Reduction with Vitamin E & Hyaluronic Acid",
    price: "₹545",
    productID:"mens12",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/c/3c45fdcNYMCFN0000022_1.jpg ",
    name: "MCaffeine Vitamin C Green Tea Face Serum for Glowing Skin with Hyaluronic Acid - Reduces Dark Spots",
    price:"₹625",        
    productID:"mens13",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/8/78b6578nykmcf0000003_1rvm.jpg",
    name: " MEN'S REEBOK RUNNING TREND RUNNER SHOESMCaffeine Oil Control Coffee Face Wash with Aloe Vera - Soap Free Cleanser for Normal to Oily Skin",
    price:"₹349",
    productID:"mens14",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/e/eecde37NYMCFCOM00033.jpg",
    name: "MCaffeine Body Polishing Kit - Exfoliation, Tan Removal & Moisturization - Coffee Body Scrub & Choco Body Butter",
    price:"₹899",
    productID:"mens15",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/8/b8e2578nykmcf0000009_1rvm.jpg",
    name: "MCaffeine Tan Removal Coffee Clay Face Mask - Pore Cleansing Face Pack for Normal to Oily Skin",
    price:"₹575",
    productID:"mens16",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/4/c4c1578nymcfn0000031_1rvm.jpg",
    name: "MCaffeine Coffee Body Massage Oil with Vit E - Reduces Cellulite & Stretch Marks, Polishes & Tones Skin ",
    price:"₹445",
    productID:"mens17",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/1/f122badMCAFF00000193_1_MC.jpg",
    name: "MCaffeine Exfoliating Coffee Body Scrub for Tan Removal & Soft-Smooth Skin - 100% Natural & Vegan",
    price:"₹266",
    productID:"mens18",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/1/c157735nymcfn0000032_nkw1.jpg",
    name: " MEN'S REEBOK RUNNING TREND SHOESMCaffeine Coffee Hydrating Face Serum For Glowing Skin with Vitamin E for Sun Damage Protection",
    price:"₹645",
    productID:"mens19",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/5/05e9578nymcfn0000025_1rvm.jpg",
    name: "MCaffeine Coffee Body Lotion with Vitamin C & Shea Butter - Moisturizer for Normal to Oily Skin",
    price:"₹375",
    productID:"mens21",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/3360372058878.jpg",
    name: "Giorgio Armani Acqua Di Gio Eau De Toilette",
    price:"₹5800",
    productID:"mens20",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/v/e/versace_dylanblue_100ml.jpg",
    name: "Versace Pour Homme Dylan Blue Eau De Toilette",
    price:"₹6750",
    productID:"mens22",
  },
  {
    image_url:
      " https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/3/c335735nymcfn0000023_nkw1.jpg ",
    name: "MCaffeine Vitamin C Green Tea Night Cream with Hyaluronic Acid - 72 Hrs Hydrating Night Gel",
    price:"₹545",
    productID:"mens23",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/7/b7b2578nymcfn0000020_1rvm.jpg",
    name: "MCaffeine Vitamin C Green Tea Face Wash with Hyaluronic Acid - Dirt Removal Soap Free Face Cleanser",
    price:"₹325",
    productID:"mens24",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/2/c2b2509nymcfcom00057_1.jpg ",
    name: "MCaffeine Body Toning & Polishing Kit - Coffee Body Massage Oil, Exfoliating Body Scrub & Body Lotion",
    price:"₹1045",
    productID:"mens25",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/5/55fea91NYKAB00000508_1.jpg",
    name: "Nykaa SKINRX Vitamin C Illuminate + Day Moisturizer with SPF 15 for Normal to Dry Skin",
    price:"₹399",
    productID:"mens26",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/0/8011003809219.jpg",
    name: " UNISEX REEBOK TRAINING ACTIVE  BAG ",
    price:"Versace Eros Eau De Toilette",
    productID:"mens27",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/a/davparf763_rvb_1_.jpg",
    name: "Davidoff Cool Water Eau De Toilette for Men",
    price:"₹3600",
    productID:"mens28",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/7/97c55823562700373145_asp1.jpg",
    name: "Jaguar Classic Black Eau De Toilette",
    price:"₹2310",
    productID:"mens29",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/0/4045787232233_1.jpg",
    name: "Schwarzkopf Professional Osis + Session Label Strong Hold Hair Super Dry Fix Spray",
    price:"₹750",
    productID:"mens30",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/6/3614223708741_davcwm19ds150ml_1.jpg",
    name: "Davidoff Cool Water All Over Body Spray",
    price: "₹1250",
    productID:"mens31",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/6/c6d4c3a4005900491879_1.jpg",
    name: "NIVEA Men Deodorant Roll On, Deep Impact Freshness, 48 h Anti Perspirant Freshness",
    price:"₹169",
    productID:"mens32",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/a/1a28038NYMCFCOM00062_1.jpg",
    name: "MCaffeine Coffee-Choco Cocktail Kit - Relax & De-Stress Combo",
    price:"₹759",
    productID:"mens33",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/8/d85a7d68901526211753.png",
    name: "Garnier Men Turbo Bright Double Action Face Wash",
    price:"₹99",
    productID:"mens34",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/c/bc0a509nymcfcom00043_1.jpg",
    name: "MCaffeine Coffee De-Tan Kit - Remove Tan & Dead Skin",
    price:"₹1145",
    productID:"mens35",
  },
  {
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/0/4005808169351_1_1.jpg",
    name: "NIVEA Talcum Powder, Musk, For Gentle Fragrance & Reliable Protection Against Body Odour",
    price:"₹99",
    productID:"mens36",
  },
];

let container=document.getElementById("container");
// let filtered=document.getElementById("filter");
let cartLs=JSON.parse(localStorage.getItem("Mens-page"))||[];

let totalcart=document.getElementById("total-cart");

function Display(mensData) {

  container.innerHTML=null;
  let total=0;
  mensData.forEach(function (ele) {
   
    total+=Number(ele.cart);
   
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
    });

    product.append(img, name, price, cart);
    container.append(product);

  });
    //  document.querySelector("#total-cart").innerText=total;
    totalcart.textContent=total;
}

console.log(cartLs);
Display(mensData);
// Display(cartLs);

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
