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