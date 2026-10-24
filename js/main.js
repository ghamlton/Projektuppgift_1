"use strict";

const menuButton = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function(){
    menu.classList.toggle("open");
})