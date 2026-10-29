"use strict";

let basket = [];

const menuButton = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");

const buySwitch2 = document.querySelector(".buySwitch");
const buyPS5Pro = document.querySelector(".buyPS5");
const buy5090 = document.querySelector(".buyRTX");
const buySteamCube = document.querySelector(".buyCube");

const basketButton = document.querySelector(".basket");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);



function addToBasket(name, price){

    let item = basket.find(product => product.prodName == name)

    if(item){
        item.prodQty++
    }
    else{
        
        let product ={
            prodName: name,
            prodPrice: price,
            prodQty: 1
        };

        basket.push(product);
    }
    

    basket.push();
}

buySwitch2.addEventListener("click", function(){
    let name = "Switch 2 LOZ-Edition";
    let price = 9000;
    addToBasket(name, price);
    alert("Tillagd i korg!");
})

buyPS5Pro.addEventListener("click", function(){
    let name = "Playstation 5 Pro";
    let price = 20000;
    addToBasket(name, price);
    alert("Tillagd i korg!");
})

buy5090.addEventListener("click", function(){
    let name = "GeForce RTX 5090";
    let price = 100000;
    addToBasket(name, price);
    alert("Tillagd i korg!");
})

buySteamCube.addEventListener("click", function(){
    let name = "Steam Machine";
    let price = 22000;
    addToBasket(name, price);
    alert("Tillagd i korg!");
})

// Visa kundkorg med "lightbox-metod" när man klickar på korgen
basketButton.addEventListener("click", function(){

    lightbox.classList.add("active");
    
    let basketPage = document.createElement("div");
    let basketHeader = document.createElement("h3");

    basketPage.classList.add("basketPage");
    basketHeader.textContent = "Din korg";

    basketPage.appendChild(basketHeader);

    if(basket.length == 0){
        let basketEmpty = document.createElement("p");
        basketEmpty.textContent = "Korgen är tom...";
        basketPage.appendChild(basketEmpty)
    }
    else if(basket.length > 0){
        let basketList = document.createElement("ul");
        for(let i = 0; i < basket.length; i++){
            let listItem = document.createElement("li");
            listItem.textContent = `Vara: ${basket[i].prodName} | Pris: ${basket[i].prodPrice} | Antal: ${basket[i].prodQty} st`;
            basketList.appendChild(listItem);
        }
        basketPage.appendChild(basketList);
    }

    while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild);
    }

    lightbox.appendChild(basketPage);
})

menuButton.addEventListener("click", function(){
    menu.classList.toggle("open");
})

lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove("active");
})

window.onload(function(){

})