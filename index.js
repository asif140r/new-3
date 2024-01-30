;const passwordInput = document.querySelector(".password-box input");
const copyIcon = document.querySelector(".copy-icon");
const rangeInput = document.querySelector(".range-box input");
const sliderNumber = document.querySelector(".range-box .solid-number");
const genarateButton = document.querySelector(".generate-button");

const allCarector = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYX123456789!`.()-+*&^%$#@!~_"


function genaratePassword(){
 let newPassword ="";
   for(let i =0; i<rangeInput.value; i++){
    let randomNumber = Math.floor(Math.random() * allCarector.length);
    newPassword =newPassword + allCarector[randomNumber];
   }
  passwordInput.value = newPassword;
}


rangeInput.addEventListener("input", ()=>{
   sliderNumber.innerText = rangeInput.value;
    
});

copyIcon.addEventListener("click", ()=>{
  navigator.clipboard.writeText(passwordInput.value);
})

genaratePassword()
genarateButton.addEventListener("click", genaratePassword);



//form validation

const form = document.querySelector("form");
const nextBtn = document.querySelector("#nextBtn");
const backBtn = document.querySelector("#backBtn");
const allInput = document.querySelector(".first input");

nextBtn.addEventListener("click", ()=>{
  allInput.forEach((input)=>{
    if(input.value != ""){
      form.classList.add("seeActive");
    }else{
      form.classList.remove("seeActive");
      alert("input is empty")
    }
  })
});

backBtn.addEventListener("click", ()=> form.classList.remove("seeActive"))



const yrr = "ascdefghijklmnopqrstuvwxyz";

let l = "";
for(let i =0; i < 5; i++){
  const rn = Math.floor(Math.random() * yrr.length)
   l = l+yrr[rn];
}

console.log(l)