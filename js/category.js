var selectedPic = document.getElementById("selected-pic");
let selected = "imgs/download.jpg";
var customButton = document.getElementById("custom-btn");

customButton.addEventListener("click", function(){
    changeSelected(selected);
})

document.getElementById("champain").addEventListener("click", function(){
    getSelectedCat(1)
 });
document.getElementById("henny").addEventListener("click", function(){
    getSelectedCat(2)
 });
document.getElementById("titos").addEventListener("click", function(){
    getSelectedCat(3)
 });


function getSelectedCat(x) {
    switch(x) {
        case 1:
            selected = "imgs/champain.jpg";
            break;
        case 2:
            selected = "imgs/henny.jpg";
            break;
        case 3:
            selected = "imgs/titos.jpg";
            break;
        default:
            console.log("err");
    }

    console.log(x);
    console.log(selected);
}



function changeSelected(selected) {
    console.log(selected);
}
