const smiley1 = document.getElementById("first");
smiley1.remove();

const newImg = document.createElement("img");
const mainContainer = document.querySelector(".main-container");
newImg.src = "assets/cry.png";

mainContainer.appendChild(newImg);
mainContainer.appendChild(smiley1);