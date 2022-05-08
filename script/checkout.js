// console.log("cartData: ", cartData);

// // if (cartData !== null || cartData!== []) {
// //       document.getElementById("emptyCart").style.display = "none";
// // }
// //?append wrk start to "cartProduct"

// let query = document.getElementById("bottamContainer");

// function loginC() {
//       // query.innerHTML = null;
//       query.innerText = "xyz";
// }
// // document.getElementById("loginB").addEventListener("click", loginC);
// // function addressC() {
// //       let bottamContainerKiChild = document.createElement("div");
// //       bottamContainerKiChild.id = "bottamContainerKiChild";
// //       let savedAddress = document.createElement("div");
// //       savedAddress.id = "savedAddress";
// //       let nwAdd = document.createElement("div");
// //       nwAdd.id = "nwAdd";
// //       let p = document.createElement("p");

// //       p.innerText = "New Address";
// //       nwAdd.append(p);
// //       savedAddress.append(nwAdd);
// //       let addressForm = document.createElement(div);
// //       addressForm.id = "addressForm";
// //       let p1 = document.createElement("p");
// //       p1.innerText = "New Address";
// //       let addForm = document.createElement("form");
// //       addForm.id = "addForm";
// //       let p2 = document.createElement("p");
// //       p2.innerText = "Select Country";
// //       let p3 = document.createElement("p");
// //       p3.innerText = "India";
// //       let p4 = document.createElement("p");
// //       p4.innerText = "Name";
// //       let input1 = document.createElement("input");
// //       input1.className = "brNone";
// //       let p5 = document.createElement("p");
// //       p5.innerText = "Phone Number";
// //       let input2 = document.createElement("input");
// //       input2.className = "brNone";
// //       let p6 = document.createElement("p");
// //       p6.innerText = "Postel Code";
// //       let input3 = document.createElement("input");
// //       input3.className = "brNone";
// //       let p7 = document.createElement("p");
// //       p7.innerText = "Address";
// //       let input4 = document.createElement("input");
// //       input4.className = "brNone";
// //       input4.type = "checkbox";
// //       let input5 = document.createElement("input");
// //       input5.type = "submit";

// //             addForm.append(
// //                   p2,
// //                   p3,
// //                   p4,
// //                   input1,
// //                   p5,
// //                   input2,
// //                   p6,
// //                   input3,
// //                   p7,
// //                   input4,
// //                   input5
// //             );
// //       let cart = document.createElement("div");
// //       cart.innerText = "hjfgdtrfg";
// //       cart.setAttribute("id", "cart");

// //       addressForm.append(p1, addForm);
// //       bottamContainerKiChild.append(savedAddress, addressForm, cart);
// //       document.getElementById("bottamContainer").append(bottamContainerKiChild);
// // }
// // let a = document.getElementById("cart").innerText;
// // console.log('a: ', a);

// // document.getElementById("addressB").addEventListener("click", addressC);
// // function paymentC() {
// //       // query.innerHTML = null;
// //       query.innerText = "vgh";
// // }
// document.getElementById("paymentB").addEventListener("click", paymentC);

let cartData = JSON.parse(localStorage.getItem("data")) || [];

cartData.forEach(function (el) {
      let productDiv = document.createElement("div");
      productDiv.setAttribute("id", "productDiv");

      let imgDiv = document.createElement("div");

      let img = document.createElement("img");
      img.setAttribute("class", "cartImg");
      img.src = el.image;
      imgDiv.append(img);
      let name = document.createElement("p");
      name.innerText = el.name;
      let price = document.createElement("p");
      price.innerText = `Price :- ${el.price} ₹`;
      // let delimg = document.createElement("img");
      // delimg.onclick = function () {
      //       removeFromCart(el, delimg);
      // };
      // delimg.src =
      //       "https://www.pngkit.com/png/detail/123-1234607_recycling-bin-vector-delete-icon-png-black.png";
      let bakisab = document.createElement("div");
      bakisab.append(name, price);

      productDiv.append(imgDiv, bakisab);

      document.getElementById("cart").append(productDiv);
});

// import { pay } from "./comp/pay.js";
import { pay } from "../components/payment.js ";

function clickpayment() {
      document.getElementById("bottamContainer").innerHTML = pay();
}
document.getElementById("payment").addEventListener("click", clickpayment);

// -----------------------------------------------------------------------------------------------------------------------------

document.getElementById("addForm").addEventListener("submit", addres);

function addres() {
      event.preventDefault();
      let details = [];
      let name = document.getElementById("name").value;
      let number = document.getElementById("number").value;
      let address = document.getElementById("addres").value;

      let Obj = {
            name: name,
            mob: number,
            address: address,
      };
      details.push(Obj);
      console.log(details);
      localStorage.setItem("Address", JSON.stringify(Obj));
      location.reload();
}

let checkoutAddress = JSON.parse(localStorage.getItem("Address")) || [];

checkoutAddress.forEach(function (e) {
      let add = document.createElement("address");
      let name = document.createElement("p");
      name.innerText = `Name:-${e.name}`;
      let adress = document.createElement("p");
      adress.innerText = e.address;
      let num = document.createElement("p");
      num.innerText = `+91${e.mob}`;
      let btn = document.createElement("button");
      btn.innerText = "SHIP TO THIS ADDRESS";
      btn.addEventListener("click", function () {
            clickpayment();
      });
      add.append(name, adress, num, btn);
      document.getElementById("myAddress").append(add);
});
