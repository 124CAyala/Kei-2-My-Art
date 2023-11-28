let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");
let selectedPic = document.getElementById("selected-pic")

inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

let selectedCategory = "" ;

function getSelectedCat() {
    let selectedCategory = document.getElementById(this);
    console.log(selectedCategory);
}