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
      