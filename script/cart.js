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

let cartData = JSON.parse(localStorage.getItem("data")) || [];
console.log("cartData: ", cartData);

if (cartData !== null || cartData == []) {
      document.getElementById("emptyCart").style.display = "none";
}
//!append wrk start to "cartProduct"

// let sum = 0;
cartData.forEach(function (el) {
      let productDiv = document.createElement("div");
      productDiv.setAttribute("id", "productDiv");
      let imgDiv = document.createElement("div");
      let bakisab = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("class", "cartImg");
      img.src = el.image;
      imgDiv.append(img);
      let name = document.createElement("p");
      name.innerText = el.name;
      let price = document.createElement("p");
      sum += Number(el.price);
      // console.log('sum: ', sum);
      price.innerText = `Price :- ${el.price} ₹`;

      // price.innerText = `Price :- ${sum} ₹`;
      console.log("price: ", sum);
      let delimg = document.createElement("img");
      delimg.onclick = function () {
            removeFromCart(el, delimg);
      };
      delimg.src =
            "https://www.pngkit.com/png/detail/123-1234607_recycling-bin-vector-delete-icon-png-black.png";
      bakisab.append(name, price);
      productDiv.append(imgDiv, bakisab, delimg);
      document.getElementById("cartProduct").append(productDiv);
});

function removeFromCart(el, delimg) {
      let getData = JSON.parse(localStorage.getItem("data"));
      let index = getData.indexOf(el);
      getData.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(getData));
      // delimg.splice(index, 1);
      delimg.parentNode.remove();
}

// function DeleteFrom_Bag(produ, dlt_btn) {
//       let getCartStORE = JSON.parse(localStorage.getItem("data"));
//       let index = getCartStORE.indexOf(produ);
//       getCartStORE.splice(index, 1);
//       localStorage.setItem("data", JSON.stringify(getCartStORE));

//       dlt_btn.parentNode.parentNode.remove();
// }