"use strict";

// Här förvaras alla varor som har lagts till i korgen
let basket = [];

// Flera querySelector för att hämta element från html-filerna

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


// Lägger till varor i korgen (basket[])
function addToBasket(name, price){

    // Kollar om varan man köper redan finns i korgen
    let item = basket.find(product => product.prodName == name);

    // Om varan finns så ökar den kvantiteten +1 på varan
    if(item){
        item.prodQty++;
        saveBasket();
    }
    //Annars så lägger den till en ny vara i korgen med dess "properties"
    else{
        let product ={
            prodName: name,
            prodPrice: price,
            prodQty: 1
        };
        basket.push(product);
        saveBasket();
    }
}

// Sparar varorna i korgen så att de finns kvar vid omladdning av sidan eller vid stänging och öppning
function saveBasket(){
    localStorage.setItem("kundkorg", JSON.stringify(basket));
}

// Varorna tas fram från localStorage och läggs in i basket[] så att kundkorgen kan visas korrekt
function loadBasket(){
    if (localStorage.getItem("kundkorg") !== null){
        let korg = JSON.parse(localStorage.getItem("kundkorg"));
        basket = korg;
    }
}

// Funktioner för varje köp-knapp på sidan
// Den skickar med två argument och kör sedan addToBasket()
buySwitch2.addEventListener("click", function(){
    let name = "Switch 2 LOZ-Edition";
    let price = 9000;
    addToBasket(name, price);
});

buyPS5Pro.addEventListener("click", function(){
    let name = "Playstation 5 Pro";
    let price = 20000;
    addToBasket(name, price);
});

buy5090.addEventListener("click", function(){
    let name = "GeForce RTX 5090";
    let price = 100000;
    addToBasket(name, price);
});

buySteamCube.addEventListener("click", function(){
    let name = "Steam Machine";
    let price = 22000;
    addToBasket(name, price);
});

// Visa kundkorg med "lightbox-metod" när man klickar på korg-knappen
basketButton.addEventListener("click", function(){

    lightbox.classList.add("active");
    
    let basketPage = document.createElement("div");
    let basketHeader = document.createElement("h3");

    basketPage.classList.add("basketPage");
    basketHeader.textContent = "Din korg";

    basketPage.appendChild(basketHeader);

    // Om korgen är tom så visar den meddelandet nedanför
    if(basket.length == 0){
        let basketEmpty = document.createElement("p");
        basketEmpty.textContent = "Korgen är tom...";
        basketPage.appendChild(basketEmpty);
    }
    //Om korgen innehåller produkter så skriver den ut det i en div i "lighbox-stil"
    else if(basket.length > 0){
        let basketList = document.createElement("ul");
        let total = document.createElement("p");
        let sum = 0;
        for(let i = 0; i < basket.length; i++){
            let listItem = document.createElement("li");
            listItem.textContent = `Vara: ${basket[i].prodName} | Pris: ${basket[i].prodPrice} | Antal: ${basket[i].prodQty} st`;
            basketList.appendChild(listItem);
            sum += basket[i].prodPrice * basket[i].prodQty;
        }
        total.textContent = "Att betala: " + sum + " kr";
        basketPage.appendChild(basketList);
        basketPage.appendChild(total);
    }

    while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild);
    }

    lightbox.appendChild(basketPage);
});

// Mobilmenyn öppnas och stängs genom att "toggla" en klass
// Klassen läggs till eller tas bort, och på så sätt öppnas eller stängs menyn
menuButton.addEventListener("click", function(){
    menu.classList.toggle("open");
});

// Korgen stängs endast när man klickar utanför den
lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove("active");
});

// När sidan laddas om så kor den loadBasket() som hämtar varorna från localStorage och basket[] fylls på 
window.addEventListener("load", function(){
    loadBasket();
});