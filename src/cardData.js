function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./images/Data", false, /\.(png)$/)
).map((img) => img.default);

const cardData = [
  { name: "AC Milan", image: images[0], isClicked: false },
  { name: "Arsenal", image: images[1], isClicked: false },
  { name: "Atletico Madrid", image: images[2], isClicked: false },
  { name: "Bayern Munich", image: images[3], isClicked: false },
  { name: "Chelsea", image: images[4], isClicked: false },
  { name: "FC Barcelona", image: images[5], isClicked: false },
  { name: "Juventus", image: images[6], isClicked: false },
  { name: "Liverpool", image: images[7], isClicked: false },
  { name: "Manchester City", image: images[8], isClicked: false },
  { name: "Manchester United", image: images[9], isClicked: false },
  { name: "PSG", image: images[10], isClicked: false },
  { name: "Real Madrid", image: images[11], isClicked: false },
];

export default cardData;
