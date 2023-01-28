const baseUrl = "https://api.magicthegathering.io/v1/";
let cardString = "";
function renderCards(card) {
  cardString += ` <a href="../details.html?${card.id}"> <img src="${card.imageUrl}" alt="">  </a>`;
}

async function fetchCards() {
  const getCards = await fetch(`${baseUrl}cards`);
  const response = await getCards.json();
  console.log(response.cards);
  response.cards
    .filter((hasImage) => hasImage.imageUrl)
    .map((card) => renderCards(card));
  document.querySelector(".card-container").innerHTML = cardString;
}

fetchCards();
