const queryString = document.location.search;
const qParams = new URLSearchParams(queryString);
const id = qParams.get("id");
console.log(id);
const baseUrl = "https://api.magicthegathering.io/v1/";

function renderCardDetails({ name, text, imageUrl, legalities, printings }) {
  let legal = legalities
    .map((format) => `<li>${format.format} : ${format.legality}</li>`)
    .join("");
  printings.map((print) => `<li>${print}</li>`).join("");
  document.querySelector(
    "#card-details--container"
  ).innerHTML = `<div><h1>${name}</h1> <p>${text}</p><ul>${legal}</ul> </div> 
  <img src="${imageUrl}" alt="Magic the gathering playing card">`;
}

async function fetchCards() {
  try {
    const getCard = await fetch(`${baseUrl}cards/${id}`);
    const response = await getCard.json();
    console.log(response);
    renderCardDetails(response.card);
  } catch (err) {
    console.log("there was an error");
  }
}
fetchCards();
