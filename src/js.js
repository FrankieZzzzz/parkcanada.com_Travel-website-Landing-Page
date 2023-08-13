let burgerBtn = document.getElementById("burger-icon")
let closeBtn = document.getElementById("close-icon");
let mobileMenu = document.querySelector(".headerNavList-mobile")

burgerBtn.addEventListener("click", _showCloseBtn);
closeBtn.addEventListener("click", _showBurgerBtn)

function _showCloseBtn(){
    burgerBtn.style.display = "none";
    closeBtn.style.display = "block"

    mobileMenu.classList.add("showMobileMenu");
    setTimeout(function() {
        mobileMenu.classList.add("in");
        mobileMenu.classList.remove("showMobileMenu");
    }, 300);
}
function _showBurgerBtn(){
    burgerBtn.style.display = "block";
    closeBtn.style.display = "none"

    mobileMenu.classList.add("removeMobileMenu");
    setTimeout(function() {
        mobileMenu.classList.remove("in");
        mobileMenu.classList.remove("removeMobileMenu");
    }, 300);
    
}
window.addEventListener("resize", function(){
    if (window.innerWidth < 600){
        _showBurgerBtn()
    }else{
        burgerBtn.style.display = "none";
        closeBtn.style.display = "none"
    }
})


// footer submit
let submitBtn = document.getElementById("submitBtn").addEventListener("click", _validateEmail)
var input = document.getElementById("input-box");

function _validateEmail(){

    var mailFormat =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input.value.match(mailFormat)) {
        alert("We will contact you as soon as possible 👋");
    }else if(input.value === ""){
         alert("Please input your email address 🥸");
    }else{
        alert("Please input your email address 🥸");
        document.getElementById("input-box").value = "";
    }
}
