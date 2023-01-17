

import navbar from "../component/Navbar.js";
document.getElementById("header-navbar").innerHTML=navbar();

  let imglink = [
    "https://images-static.nykaa.com/uploads/0e92263a-4a47-4006-8bb0-721e4dbe9b8d.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/96039c37-f304-4b5a-afaf-42da418c7344.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/420e5dfe-1e4c-48db-8169-fb677365db43.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/64ce2e5a-dbca-4065-a90d-f22aff6787a7.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/13f4f223-4928-435c-87ab-1f933b0b0a78.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/8d78575e-72d8-4ad9-943b-50601678d510.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/bcf8e6b6-085e-4790-bb46-bb98d484de50.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/b5803dc0-fb0a-4507-9e8a-a88c5ec99868.gif?tr=w-1200,cm-pad_resize",
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
  }); // slider


  let product_img = [
    {
      img: "https://images-static.nykaa.com/uploads/eb443c86-d5db-44cc-9de9-fc19296f041f.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/83247895-0a7e-4141-9b86-ce7b039e7c3a.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/ebbf5f5b-9f8c-4839-9063-d4b3d4fb5656.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/b1189a45-6537-415f-ae55-bdd500d074b0.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/45e77657-2fba-49f1-b077-437dc02b978c.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/3856736f-82d6-45c0-a10e-8bc90e891bb2.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/1555b61a-a163-408a-ab3d-3a666832acfb.jpg?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/2aaabbf7-64bb-4ec8-b73c-671074554789.jpg?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/db316f35-4e1f-49a2-942e-c730599ff776.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/4e85e306-4fcf-463a-ae04-d0066fb010de.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/4c447fa5-0de0-4c69-a138-177321485adf.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/1ca5ddd3-c263-40b7-9713-d8dede28b4be.jpg?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/a507c402-9ccb-4e1e-abbd-8a9b6d81f37b.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/64c65727-2d07-41a5-b4a5-6e0dbfee8b98.jpg?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/a507c402-9ccb-4e1e-abbd-8a9b6d81f37b.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/5c11bb71-1500-477e-9943-491d57a1ec57.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/62eb4f26-ccb1-4a18-82e0-28b99368314b.jpg?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/3671a728-2665-44e1-8065-f7f75308c3cb.gif?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/0767a3b8-61ec-43b0-901b-76ae5563fdb8.png?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/be2ce42f-6986-4a32-a258-8d5278950d99.jpg?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/e6ae051f-56e7-4079-93e4-b844af6e1d49.jpg?tr=w-600,cm-pad_resize",
    },
    {
      img: "https://images-static.nykaa.com/uploads/39824e2a-d94a-4ddc-8148-3702c67ac2b3.jpg?tr=w-600,cm-pad_resize",
    },
  ];

  for (let i = 0; i < product_img.length; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", product_img[i].img);

    div.append(img);
    document.querySelector("#c4").append(div);
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document.querySelector(".prepend-2-slides").addEventListener("click", function (e) {
      e.preventDefault();
        swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    });
  
    document.querySelector(".prepend-slide").addEventListener("click", function (e) {
         e.preventDefault();
        
         swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
      );
    });

  document.querySelector(".append-slide").addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
      );
    });

  document.querySelector(".append-2-slides").addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      ]);
    });
