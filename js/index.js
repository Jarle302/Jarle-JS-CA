const baseUrl = "https://api.magicthegathering.io/v1/";
let cardString = "";

function renderCards(card) {
  cardString += ` <a href="../details.html?id=${card.id}"> <img src="${card.imageUrl}" alt="">  </a>`;
}

async function fetchCards() {
  try {
    const getCards = await fetch(`${baseUrl}cards`);
    const response = await getCards.json();
    response.cards
      .filter((hasImage) => hasImage.imageUrl)
      .map((card) => renderCards(card));
    document.querySelector(".card-container").innerHTML = cardString;
  } catch (err) {
    cardString = "There was an error.";
    document.querySelector(".card-container").innerHTML = cardString;
  }
}

fetchCards();
