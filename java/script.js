let Answer = "Yes";
let num2=88;
const num3= 100;

window.prompt('Are you the ARTDM 174 Instructor or Fellow Classmate?');
if(Answer !== "Yes"){
    let output = docuemt.getElementById("output")
    output.innerHTML="Who are you and who sent you?!";
}
else if(Answer==="Yes"){
    window.prompt("Who are you and who sent you?!")
}

else {
    console.log("You are NOT a DVC Instructor or Student! Leave my site AT ONCE!");
}

(function () {
    "use strict";

    //This function simply toggles the existence of 
    //the "show" class on the main navigation. CSS transitions do the rest.
    function toggleMenu() {
        let el = document.querySelector('.main-nav');
        el.classList.toggle('show');
    }

    //there are two buttons that open/close the menu, both classed as .menu-btn
    //find all of them and add the interactivity to each button.
    let menu = document.querySelectorAll('.menu-btn');
    for (let item of menu) {
        item.addEventListener('click', toggleMenu);
    }
    
})();


      