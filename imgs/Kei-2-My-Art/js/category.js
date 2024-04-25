var selectedPic = document.getElementById("selected-pic");
let selected = "imgs/download.jpg";
var customButton = document.getElementById("custom-btn");

customButton.addEventListener("click", function(){
    changeSelected();
})

for (let num = 0; num <= 5; num++) {
    var img = document.getElementsByTagName('img')[num];
    img.addEventListener("click", returnSrc)
}

function returnSrc() {
    selected = this.src;
    // console.log(this.src);
}

function changeSelected() {
    localStorage.setItem('selected-item', selected);
}
