
// navbar js file
import {navbar} from "../navbar/navbar.js";

let  n =document.getElementById("navbar");
n.innerHTML=navbar();
// navbar js file

//footer

import {footer} from "../navbar/footer.js";

let  b =document.getElementById("footer");
b.innerHTML=footer();
//footer

let box1=document.getElementById("main-carousel").children






for(var ele of box1)
{
 ele.addEventListener("click",myfuntion)
}
function myfuntion(){
    window.location.href="./product.html"
}


let div=document.getElementById("product").children
for(var el of div)
{
    el.addEventListener("click",myfun)
}

function myfun(el)
{
    window.location.href="./product.html"
}





