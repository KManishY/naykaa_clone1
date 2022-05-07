
// import {navbar} from "./navbar/navbar.js"
import {navbar} from "../navbar/navbar.js"
let  n =document.getElementById("navbar");
n.innerHTML=navbar();

import {footer} from "../navbar/footer.js"

// let m=document.getElementById("footer")
// m.innerHTML=footer();




let Data=[
    {
        img:"https://images-static.nykaa.com/uploads/b8270a04-0987-4917-8ec5-3d5a93141d43.jpg?tr=w-400,cm-pad_resize",
          price:"On Bestselling Combos",
          sale:"Starting At ₹270",
    },

    {
        img:"https://images-static.nykaa.com/uploads/66a2ed58-36ef-44ca-8ed8-e7aa57ee16a8.jpg?tr=w-400,cm-pad_resize",
          price:"On Bestsellers",
          sale:"",
    },

    {
        img:"https://images-static.nykaa.com/uploads/b750a456-438c-4f23-8e31-08294c3264bb.jpg?tr=w-400,cm-pad_resize",
          price:"On Singles | Add 3 To Bag Pay For 2",
          sale:"Add 1 to Cart & Get 10% Off",
    },

    {
        img:"https://images-static.nykaa.com/uploads/94ab236c-b899-460f-882c-9e60d125cd00.jpg?tr=w-400,cm-pad_resize",
          price:"Free Lipstick Worth ₹349",
          sale:"on Orders Over ₹700",
    },

    {
        img:"https://images-static.nykaa.com/uploads/27014577-4f80-4d0a-8d87-62c8b007cda2.jpg?tr=w-400,cm-pad_resize",
          price:"Free Lipstick On ₹799",
          sale:"Free Face Primer On ₹999",
    },

    {
        img:"https://images-static.nykaa.com/uploads/8e4e09ce-ed6c-4ae9-8d46-ad4d24985da7.jpg?tr=w-400,cm-pad_resize",
          price:"Free HighLighter Worth ₹3200 On ₹3500+",
          sale:"Extra 10% Off On ₹5500+",
    },

    {
        img:"https://images-static.nykaa.com/uploads/b8270a04-0987-4917-8ec5-3d5a93141d43.jpg?tr=w-400,cm-pad_resize",
          price:"On Bestselling Combos",
          sale:"Starting At ₹270",
    },

    {
        img:"https://images-static.nykaa.com/uploads/66a2ed58-36ef-44ca-8ed8-e7aa57ee16a8.jpg?tr=w-400,cm-pad_resize",
          price:"On Bestsellers",
          sale:"",
    },

    {
        img:"https://images-static.nykaa.com/uploads/b750a456-438c-4f23-8e31-08294c3264bb.jpg?tr=w-400,cm-pad_resize",
          price:"On Singles | Add 3 To Bag Pay For 2",
          sale:"Add 1 to Cart & Get 10% Off",
    },

    {
        img:"https://images-static.nykaa.com/uploads/94ab236c-b899-460f-882c-9e60d125cd00.jpg?tr=w-400,cm-pad_resize",
          price:"Free Lipstick Worth ₹349",
          sale:"on Orders Over ₹700",
    },

    {
        img:"https://images-static.nykaa.com/uploads/27014577-4f80-4d0a-8d87-62c8b007cda2.jpg?tr=w-400,cm-pad_resize",
          price:"Free Lipstick On ₹799",
          sale:"Free Face Primer On ₹999",
    },

    {
        img:"https://images-static.nykaa.com/uploads/8e4e09ce-ed6c-4ae9-8d46-ad4d24985da7.jpg?tr=w-400,cm-pad_resize",
          price:"Free HighLighter Worth ₹3200 On ₹3500+",
          sale:"Extra 10% Off On ₹5500+",
    }
]




let Data1=[
    {
        img:"https://images-static.nykaa.com/uploads/91b89bb4-d4ef-4cc8-ba1f-2307adc8268f.jpg?tr=w-400,cm-pad_resize",
          price:"On Bodycare & Mists",
          sale:"Flat 30% Off On Eau de Parfums",
    },

    {
        img:"https://images-static.nykaa.com/uploads/f11c4c79-889f-4ead-a306-1af712eb4068.jpg?tr=w-400,cm-pad_resize",
          price:"Buy 2, Get 2 minis free",
          sale:"",
    },

    {
        img:"https://images-static.nykaa.com/uploads/12eff7db-4f52-44e5-9f7e-75968353f634.jpg?tr=w-400,cm-pad_resize",
          price:"On Bath & Body Bestsellers",
          sale:"Flat 30% Off On Combos",
    },

    {
        img:"https://images-static.nykaa.com/uploads/77242919-9e7b-4767-8523-7abb52b1bc52.jpg?tr=w-400,cm-pad_resize",
          price:"3 Free Minis Worth ₹2950 On ₹3000",
          sale:"4 Free Minis Worth ₹4950 On ₹5000",
    },

    {
        img:"https://images-static.nykaa.com/uploads/ceb3747b-36ca-4988-8587-3735378205a5.jpg?tr=w-400,cm-pad_resize",
          price:"Add 3 To Bag Pay For 2",
          sale:"Flat 10% Off On Singles",
    },

    {
        img:"https://images-static.nykaa.com/uploads/9d83182b-adb9-467f-a36e-18d9cddcc724.jpg?tr=w-400,cm-pad_resize",
          price:"Combos At Min 30% Off",
          sale:"Summer Haircare Bestsellers",
    },

    {
        img:"https://images-static.nykaa.com/uploads/91b89bb4-d4ef-4cc8-ba1f-2307adc8268f.jpg?tr=w-400,cm-pad_resize",
          price:"On Bodycare & Mists",
          sale:"Flat 30% Off On Eau de Parfums",
    },

    {
        img:"https://images-static.nykaa.com/uploads/f11c4c79-889f-4ead-a306-1af712eb4068.jpg?tr=w-400,cm-pad_resize",
          price:"Buy 2, Get 2 minis free",
          sale:"",
    },

    {
        img:"https://images-static.nykaa.com/uploads/12eff7db-4f52-44e5-9f7e-75968353f634.jpg?tr=w-400,cm-pad_resize",
          price:"On Bath & Body Bestsellers",
          sale:"Flat 30% Off On Combos",
    },

    {
        img:"https://images-static.nykaa.com/uploads/77242919-9e7b-4767-8523-7abb52b1bc52.jpg?tr=w-400,cm-pad_resize",
          price:"3 Free Minis Worth ₹2950 On ₹3000",
          sale:"4 Free Minis Worth ₹4950 On ₹5000",
    },

    {
        img:"https://images-static.nykaa.com/uploads/ceb3747b-36ca-4988-8587-3735378205a5.jpg?tr=w-400,cm-pad_resize",
          price:"Add 3 To Bag Pay For 2",
          sale:"Flat 10% Off On Singles",
    },

    {
        img:"https://images-static.nykaa.com/uploads/9d83182b-adb9-467f-a36e-18d9cddcc724.jpg?tr=w-400,cm-pad_resize",
          price:"Combos At Min 30% Off",
          sale:"Summer Haircare Bestsellers",
    }
]


let Data2=[
  {
      img:"https://images-static.nykaa.com/uploads/b8270a04-0987-4917-8ec5-3d5a93141d43.jpg?tr=w-400,cm-pad_resize",
        price:"On Bestselling Combos",
        sale:"Starting At ₹270",
  },

  {
      img:"https://images-static.nykaa.com/uploads/66a2ed58-36ef-44ca-8ed8-e7aa57ee16a8.jpg?tr=w-400,cm-pad_resize",
        price:"On Bestsellers",
        sale:"",
  },

  {
      img:"https://images-static.nykaa.com/uploads/b750a456-438c-4f23-8e31-08294c3264bb.jpg?tr=w-400,cm-pad_resize",
        price:"On Singles | Add 3 To Bag Pay For 2",
        sale:"Add 1 to Cart & Get 10% Off",
  },

  {
      img:"https://images-static.nykaa.com/uploads/94ab236c-b899-460f-882c-9e60d125cd00.jpg?tr=w-400,cm-pad_resize",
        price:"Free Lipstick Worth ₹349",
        sale:"on Orders Over ₹700",
  },

  {
      img:"https://images-static.nykaa.com/uploads/27014577-4f80-4d0a-8d87-62c8b007cda2.jpg?tr=w-400,cm-pad_resize",
        price:"Free Lipstick On ₹799",
        sale:"Free Face Primer On ₹999",
  },

  {
      img:"https://images-static.nykaa.com/uploads/8e4e09ce-ed6c-4ae9-8d46-ad4d24985da7.jpg?tr=w-400,cm-pad_resize",
        price:"Free HighLighter Worth ₹3200 On ₹3500+",
        sale:"Extra 10% Off On ₹5500+",
  },

  {
      img:"https://images-static.nykaa.com/uploads/b8270a04-0987-4917-8ec5-3d5a93141d43.jpg?tr=w-400,cm-pad_resize",
        price:"On Bestselling Combos",
        sale:"Starting At ₹270",
  },

  {
      img:"https://images-static.nykaa.com/uploads/66a2ed58-36ef-44ca-8ed8-e7aa57ee16a8.jpg?tr=w-400,cm-pad_resize",
        price:"On Bestsellers",
        sale:"",
  },

  {
      img:"https://images-static.nykaa.com/uploads/b750a456-438c-4f23-8e31-08294c3264bb.jpg?tr=w-400,cm-pad_resize",
        price:"On Singles | Add 3 To Bag Pay For 2",
        sale:"Add 1 to Cart & Get 10% Off",
  },

  {
      img:"https://images-static.nykaa.com/uploads/94ab236c-b899-460f-882c-9e60d125cd00.jpg?tr=w-400,cm-pad_resize",
        price:"Free Lipstick Worth ₹349",
        sale:"on Orders Over ₹700",
  },

  {
      img:"https://images-static.nykaa.com/uploads/27014577-4f80-4d0a-8d87-62c8b007cda2.jpg?tr=w-400,cm-pad_resize",
        price:"Free Lipstick On ₹799",
        sale:"Free Face Primer On ₹999",
  },

  {
      img:"https://images-static.nykaa.com/uploads/8e4e09ce-ed6c-4ae9-8d46-ad4d24985da7.jpg?tr=w-400,cm-pad_resize",
        price:"Free HighLighter Worth ₹3200 On ₹3500+",
        sale:"Extra 10% Off On ₹5500+",
  }
]



Data.map(function(el){
  
    let div= document.createElement("div");
    div.setAttribute("class", "box3")

    let image=document.createElement("img")
    image.src=el.img;
    image.setAttribute("class","image1")

    let price=document.createElement("h5")
    price.innerText=el.price;

    let sale=document.createElement("p")
    sale.innerText=el.sale;

    div.append(image,price,sale)

   document.querySelector("#container1").append(div)


})



Data1.map(function(el){
  
    let div= document.createElement("div");
    div.setAttribute("class", "box3")

    let image=document.createElement("img")
    image.src=el.img;
    image.setAttribute("class","image1")

    let price=document.createElement("h5")
    price.innerText=el.price;

    let sale=document.createElement("p")
    sale.innerText=el.sale;

    div.append(image,price,sale)

   document.querySelector("#container2").append(div)


})


Data2.map(function(el){
  
  let div= document.createElement("div");
  div.setAttribute("class", "box3")

  let image=document.createElement("img")
  image.src=el.img;
  image.setAttribute("class","image1")

  let price=document.createElement("h5")
  price.innerText=el.price;

  let sale=document.createElement("p")
  sale.innerText=el.sale;

  div.append(image,price,sale)

 document.querySelector("#container3").append(div)


})


let m=document.getElementById("footer")
m.innerHTML=footer();