var profilePic = document.getElementById("profile-pic");
var inputFile = document.getElementById("input-file");
var selectedPic = document.getElementById("selected-pic");


inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}