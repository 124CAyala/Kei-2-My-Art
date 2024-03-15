var selectedPic = document.getElementById("selected-pic");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var quantity = document.getElementById("quantity")

selectedPic.src = localStorage.getItem('selected-item');

plus.addEventListener("click", add(quantity))

minus.addEventListener("click", subtract(quantity))


function add(quantity){
    quantity++;
    document.getElementById("quantity").innerHTML = quantity;
}
function subtract(quantity){
    quantity--;
    document.getElementById("quantity").innerHTML = quantity;
}