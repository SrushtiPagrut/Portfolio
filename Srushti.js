// about me*****
//skills are hiden after click eduction
var Skills = document.getElementById("Skills");
var skillsresult = document.getElementById("skillsresult");
var education = document.getElementById("education");
var educationresult = document.getElementById("educationresult");

Skills.addEventListener("click", () => {
    // Show skillsresult and hide educationresult
    skillsresult.style.display = "block";
    educationresult.style.display = "none";
});

education.addEventListener("click", () => {
    // Show educationresult and hide skillsresult
    educationresult.style.display = "block";
    skillsresult.style.display = "none";
});

var sidemenu =document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";

}
function closemenu(){
    sidemenu.style.right = "-200px";
    
}