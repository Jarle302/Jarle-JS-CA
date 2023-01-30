export default function renderManualCards({
  artist,
  name,
  text,
  type,
  manaCost,
  power,
  toughness,
}) {
  cardString += `<section class="card"> 
      <div class="card__name"> <h2>${name}</h2> <div>${manaCost}</div></div>
      <div class="card__img">  </div>
      <div class="card__type"> <p>${type}</p> </div>
      <div class="card__text-box"> <p> "${text}" </p>
      <div class="card__power-thoughness"><h3>${power}/${toughness}</h3> </div></div>
      <div class="card__footer" ><p>${artist}</p></div>
      </section> `;
}
