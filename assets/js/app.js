const menu = document.querySelector(".menu-humburger");
const nav = document.querySelector(".nav-links");

menu.addEventListener('click',()=>{
    nav.classList.toggle('menu-respons')
});

document.addEventListener("DOMContentLoaded",function() {
    var annee = new Date().getFullYear();
    document.getElementById("annee").textContent = annee;
});
