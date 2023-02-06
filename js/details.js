const queryString = document.location.search;
const qParams = new URLSearchParams(queryString);
const id = qParams.get("id");
console.log(id);
const baseUrl = "https://api.magicthegathering.io/v1/";

function renderCardDetails({
  name,
  text,
  imageUrl,
  legalities,
  printings,
  rarity,
  set,
}) {
  let legal = legalities
    .map((format) => `<li>${format.format} : ${format.legality}</li>`)
    .join("");
  let prints = printings.map((print) => `<li>${print}</li>`).join("");
  document.querySelector(
    "#card-details--container"
  ).innerHTML = `<div class="card-details--textBox"><h1>${name}</h1>  <p>${text}</p><ul> <p> <b>Rarity:</b> ${rarity}</p> <p> <b>Set:</b> ${set}</p> <h3>Legalities</h3>${legal}</ul> <ul class="ul--prints" > <h3>Printed in</h3> ${prints}</ul> </div> 
  <img class="img--mtg-card" src="${imageUrl}" alt="Magic the gathering playing card">`;
}

async function fetchCards() {
  try {
    document.querySelector(".loading").style.display = "block";
    const getCard = await fetch(`${baseUrl}cards/${id}`);
    const response = await getCard.json();
    console.log(response);
    document.querySelector(".loading").style.display = "none";
    renderCardDetails(response.card);
  } catch (err) {
    document.querySelector(
      "#card-details--container"
    ).innerHTML = `<h2 class="h2--warning">There was an error!</h2> <img src="../images/error.jpg" />`;
  }
}
fetchCards();
