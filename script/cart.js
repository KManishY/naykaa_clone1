import { navbar } from "../navbar/navbar.js";

let n = document.getElementById("navbar");
n.innerHTML = navbar();

document.getElementById("cart").addEventListener("click", onCartClick);

function onCartClick() {
      document.getElementById("cartData").style.display = "block";
}

document.getElementById("cartBack").addEventListener("click", cartBack);
function cartBack() {
      document.getElementById("cartData").style.display = "none";
}

// Gender: "Female";
// Price: 860;
// img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/6/d6eba80nyloprof00001_0.jpg";
// name: "Lorel Hair repair";
// stk: 1650;

let cartData = JSON.parse(localStorage.getItem("cart")) || [];
console.log("cartData: ", cartData);
     appendata(cartData);

// if (cartData !== null || cartData !== []) {
//       document.getElementById("emptyCart").style.display = "none";
// }

//!append wrk start to "cartProduct"




// // // let sum = 0;
// cartData.forEach(function (el) {
//       let productDiv = document.createElement("div");
//       productDiv.setAttribute("id", "productDiv");
//       let imgDiv = document.createElement("div");
//       let bakisab = document.createElement("div");
//       let img = document.createElement("img");
//       img.setAttribute("class", "cartImg");
//       img.src = el.img;
//       imgDiv.append(img);
//       let name = document.createElement("p");
//       name.innerText = el.name;
//       let price = document.createElement("p");
//       // sum += Number(el.Price);
//       // console.log('sum: ', sum);
//       price.innerHTML = `Price :- ${el.Price} ₹`;

//       console.log(el.Price);
//       // price.innerText = `Price :- ${sum} ₹`;
//       // console.log("price: ", sum);
//       let delimg = document.createElement("img");
//       delimg.onclick = function () {
//             removeFromCart(el, delimg);
//       };
//       delimg.src =
//             "https://www.pngkit.com/png/detail/123-1234607_recycling-bin-vector-delete-icon-png-black.png";
//       bakisab.append(name, price);
//       productDiv.append(imgDiv, bakisab, delimg);
//       document.getElementById("cartProduct").append(productDiv);
// });

// function removeFromCart(el, delimg) {
//       let getData = JSON.parse(localStorage.getItem("data"));
//       let index = getData.indexOf(el);
//       getData.splice(index, 1);
//       localStorage.setItem("data", JSON.stringify(getData));
//       // delimg.splice(index, 1);
//       delimg.parentNode.remove();
// }

// function DeleteFrom_Bag(produ, dlt_btn) {
//       let getCartStORE = JSON.parse(localStorage.getItem("data"));
//       let index = getCartStORE.indexOf(produ);
//       getCartStORE.splice(index, 1);
//       localStorage.setItem("data", JSON.stringify(getCartStORE));

//       dlt_btn.parentNode.parentNode.remove();
// }
function appendata(cartData) {
      box.innerHTML=null
      cartData.forEach(function (e, index) {
      

            console.log(e)

            let box = document.getElementById("cartProduct");
            let div = document.createElement("div")
            let imgdiv = document.createElement("div");
            imgdiv.setAttribute("id", "imgdiv");
            let img = document.createElement("img");
            img.style.width = "10px";
            img.src = e.img;
            imgdiv.append(img);

            let detailsdiv = document.createElement("div");
            detailsdiv.id = "detailsdivid";
            let name = document.createElement("p")
            name.innerText = e.name;
            let price = document.createElement("p");
            price.innerText = e.Price;
      
            let stk = document.createElement("p");
            stk.style.textDecoration = "line-through";
            stk.innerText = e.stk;
            detailsdiv.append(name, price, stk)

            let deletediv = document.createElement("div");
            let btn = document.createElement("button");
            btn.innerText = "Delete";

            div.append(imgdiv, detailsdiv, deletediv);
            box.append(div);

            btn.addEventListener("click", function () {
                  removefn(e, index);
            })



            deletediv.append(btn)


      });
}

function removefn(e,i) {
      console.log(i)
     cartData.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(cartData))
      // window.location.reload()
      appendata(cartData)
      console.log(cartData)
}



