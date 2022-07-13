let card = document.querySelector(".card");
let goods = document.querySelector(".main__goods");

for (let i = 0; i < 3; i++) {
    let newCard = document.createElement("div");
    newCard = card.cloneNode(true);
    goods.appendChild(newCard);
}