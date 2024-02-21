const hambugerButton = document.querySelector(".nav-toggle")
const navigation = document.querySelector("nav")

hambugerButton.addEventListener("click", toggleNav)

function toggleNav (){
    hambugerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}