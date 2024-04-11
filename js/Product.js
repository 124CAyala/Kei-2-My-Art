var selectedPic = document.getElementById("selected-pic");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var quantity = document.getElementById("quantity");



selectedPic.src = localStorage.getItem('selected-item');

plus.addEventListener("click", add(quantity))

minus.addEventListener("click", subtract(quantity))


vue_app.mount("#vue_app");
