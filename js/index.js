const baseUrl = "https://api.magicthegathering.io/v1/";
let cardString = "";
function renderCards({ artist, name, text, type, manaCost, power, toughness }) {
  cardString += `<section class="card"> 
    <div class="card__name"> <h2>${name}</h2> <div>${manaCost}</div></div>
    <div class="card__img"></div>
    <div class="card__type"> <p>${type}</p> </div>
    <div class="card__text-box"> <p> "${text}" </p>
    <div class="card__power-thoughness><h3>${power}</h3>/<h3>${toughness}</h3> </div></div>
    <div class="card__footer" ><p>${artist}</p></div>
    </section> `;
}

async function fetchCards() {
  const getCards = await fetch(`${baseUrl}cards`);
  const response = await getCards.json();
  console.log(response.cards);
  response.cards.map((card) => renderCards(card));
  document.querySelector(".card-container").innerHTML = cardString;
}

fetchCards();
