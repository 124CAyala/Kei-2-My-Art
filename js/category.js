var selectedPic = document.getElementById("selected-pic");
let selected = "imgs/download.jpg";
var customButton = document.getElementById("custom-btn");

customButton.addEventListener("click", function(){
    changeSelected();
})

var body = document.getElementsByTagName('body')[0];
body.onclick = function(e) {
    if (e.srcElement.tagName == 'IMG');
    selected = e.srcElement.src;  
    console.log(selected);
};

// document.getElementById("champain").addEventListener("click", function(){
//     getSelectedCat(1)
//  });
// document.getElementById("henny").addEventListener("click", function(){
//     getSelectedCat(2)
//  });
// document.getElementById("titos").addEventListener("click", function(){
//     getSelectedCat(3)
//  });


// function getSelectedCat(x) {
//     switch(x) {
//         case 1:
//             selected = "imgs/champain.jpg";
//             break;
//         case 2:
//             selected = "imgs/henny.jpg";
//             break;
//         case 3:
//             selected = "imgs/titos.jpg";
//             break;
//         default:
//             console.log("err");
//     }

//     console.log(x);
//     
// }



function changeSelected() {
    localStorage.setItem('selected-item', selected);
}
