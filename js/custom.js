var profilePic = document.getElementById("profile-pic");
var inputFile = document.getElementById("input-file");
var selectedPic = document.getElementById("selected-pic");

selectedPic.src = localStorage.getItem('selected-item');


inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}