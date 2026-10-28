"use strict";

const menuButton = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function(){
    menu.classList.toggle("open");
})


const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const productCards = document.querySelectorAll(".productcard");
productCards.forEach(card => {
    card.addEventListener("click", e => {
        lightbox.classList.add("active");
        if(card.id == "switch2"){

            let container = document.createElement("article");
            let image = document.createElement("img");
            let title = document.createElement("h3");
            let description = document.createElement("p");

            container.classList.add("containerStyle")

            image.src = "/images/lozswitch2.webp";
            title.textContent = "Switch 2 LOZ Edition";
            description.textContent = "En begränsad upplaga av Nintendo Switch 2 med LOZ-tema inför 40-års jubileum av den ikoniska spelserien! Sedan den utannonserades har den snabbt sålt ut hos flera stora återförsäljare. Lyckligtvis har vi lyckats få tag på flera exemplar, och en kan bli din idag!";

            container.appendChild(title);
            container.appendChild(description);
            container.appendChild(image);

            while(lightbox.firstChild){
                lightbox.removeChild(lightbox.firstChild);
            }

            lightbox.appendChild(container);
            
        }
        else if (card.id == "ps5pro"){

            let container = document.createElement("article");
            let image = document.createElement("img");
            let title = document.createElement("h3");
            let description = document.createElement("p");

            container.classList.add("containerStyle");

            image.src = "/images/ps5pro.webp"
            title.textContent = "Playstation 5 Pro 2TB";
            description.textContent = "Den mest kraftfulla konsolen i den nuvarande konsol-generationen är här! Med 2TB ultrasnabb SSD och med förmågan att spela PS5-spel i kristallklar 4K och upp till 60FPS! Nu när släppet av Grand Theft Auto VI nalkas, så har dessa konsoler blivit mycket svåra att hitta. Men vilken tur att vi då har flera exemplar av denna konsol, perfekt för dig som vill avnjuta det nya GTA VI (eller andra spel) på bästa möjliga sätt!";

            container.appendChild(title);
            container.appendChild(description);
            container.appendChild(image);

            while(lightbox.firstChild){
                lightbox.removeChild(lightbox.firstChild);
            }

            lightbox.appendChild(container);
        }

        else if(card.id == "rtx5090"){

            let container = document.createElement("article");
            let image = document.createElement("img");
            let title = document.createElement("h3");
            let description = document.createElement("p");

            container.classList.add("containerStyle");

            title.textContent = "NVIDIA GeForce RTX 5090";

            container.appendChild(title);

            while(lightbox.firstChild){
                lightbox.removeChild(lightbox.firstChild);
            }

            lightbox.appendChild(container);
        }

        else if(card.id == "steamcube"){
            
        }
    })
})

lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove("active");
})