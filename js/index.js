const baseUrl = "https://api.magicthegathering.io/v1/";
let cardString = "";
const endpoints = document.querySelector("#endpoints");
const searchQuery = document.querySelector("#searchQuery");

function renderCards({ id, imageUrl, name, text }) {
  cardString += ` <a href="../details.html?id=${id}"> <img src="${imageUrl}" alt="Magic the gathering playing card"> <div class="card"> <h2>${name}</h2> <p>${text}</p></div>  </a>`;
}

async function fetchCards(queryString = "brainstorm") {
  try {
    document.querySelector(".loading").style.display = "block";
    const getCards = await fetch(`${baseUrl}cards/?name=${queryString}`);
    const response = await getCards.json();
    if (response.cards.length === 0) {
      throw "invalid search";
    }
    response.cards
      .filter((hasImage) => hasImage.imageUrl)
      .map((card) => renderCards(card));
    document.querySelector(".loading").style.display = "none";
    console.log(response);
    document.querySelector(".card-container").innerHTML = cardString;
  } catch (err) {
    document.querySelector(".loading").style.display = "none";
    cardString = `<h2 class="h2--warning">There was an error!</h2> <p>Try again using only letters in your search or / if looking for a split card</p> <img class="error__img" src="../images/error.jpg" />`;
    document.querySelector(".card-container").innerHTML = cardString;
  }
}

document.querySelector("#search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  cardString = "";
  fetchCards(searchQuery.value);
});

fetchCards();
