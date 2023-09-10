let checks = document.querySelectorAll(".nums");
const submitButton = document.getElementById("subm");
const thankYou = document.querySelector(".thankyou");
const main = document.querySelector(".container")
    
let valueText = null;
// to select the rating
checks.forEach(check => check.addEventListener("click", 

function doSomething(){

    const isAlreadySelected = check.classList.contains("checked"); 

    checks.forEach(btn=>{
        btn.classList.remove("checked");
        btn.classList.add("hover");
    });

    if(!isAlreadySelected){
        check.classList.add("checked");
        check.classList.remove("hover");
        valueText = check.textContent;
    }

    else{
        check.classList.remove("checked");
        valueText = null;
    }

}));


submitButton.addEventListener("click", ()=>{

    const selectedRating = document.querySelector(".checked");
    const container = document.querySelector(".error1");
    
    if (!selectedRating) {
       container.style.display = "block";
    }
     else {
        container.style.display = "none";
        displayDialogBox(valueText);
        main.style.display = "none";
    }
})

function displayDialogBox(value){
    const ratee = document.querySelector(".selection");

   thankYou.style.display = "flex";
   main.style.display = "none";

   ratee.innerHTML = `You selected ${value} out of 5.`

}   