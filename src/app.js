function getRandomValue() {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function getRandomSuit() {
  const suits = ["heart", "clover", "spider", "diamond"]; 
  const randomIndex = Math.floor(Math.random() * suits.length);
  return suits[randomIndex];
}


function generateCard() {
  const card = document.getElementById("card");
  
  const value = getRandomValue(); 
  const suit = getRandomSuit(); 


  card.innerHTML = '';


  const topLeft = document.createElement("div");
  topLeft.classList.add("top-left");
  topLeft.innerHTML = `<i class="fa-solid fa-${suit}"></i>`; 

  const centerValue = document.createElement("div");
  centerValue.classList.add("center-value");
  centerValue.textContent = value; 

  const bottomRight = document.createElement("div");
  bottomRight.classList.add("bottom-right");
  bottomRight.innerHTML = `<i class="fa-solid fa-${suit}"></i>`; 

  card.appendChild(topLeft);
  card.appendChild(centerValue);
  card.appendChild(bottomRight);
}

window.onload = generateCard;

const changeCardButton = document.getElementById("changeCardButton");
changeCardButton.addEventListener("click", generateCard);
setInterval(generateCard, 10000);
