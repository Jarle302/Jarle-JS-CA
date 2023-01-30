const queryString = document.location.search;
const qParams = new URLSearchParams(queryString);
const id = qParams.get("id");
console.log(id);
const baseUrl = "https://api.magicthegathering.io/v1/";

async function fetchCards() {
  try {
    const getCard = await fetch(`${baseUrl}cards/${id}`);
    const response = await getCard.json();
    console.log(response);
  } catch (err) {
    console.log("there was an error");
  }
}
fetchCards();
