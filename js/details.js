const queryString = document.location.search;
const qParams = new URLSearchParams(queryString);
const qParamsId = qParams.get("id");
console.log(qParamsId);

const baseUrl = "https://api.magicthegathering.io/v1/";

async function fetchCards() {
  const getCards = await fetch(`${baseUrl}cards/${qParamsId}`);
  const response = await getCards.json();
  response.cards;
  console.log(response);
}
