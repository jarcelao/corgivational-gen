import { atom } from "recoil";

export const quoteState = atom({
  key: "quoteState",
  default: ""
});

export const authorState = atom({
  key: "authorState",
  default: ""
});

export const imageState = atom({
  key: "imageState",
  default: "Spacegear_Template.jpg"
});

export async function getQuote() {
  const apiURL =
    "https://private-amnesiac-eb6d20-goquotes.apiary-proxy.com/api/v1/random/1?type=tag&val=motivational";

  let data = "";

  await fetch(apiURL)
    .then(response => response.json())
    .then(fetchData => {
      data = fetchData.quotes[0];
    });

  return data;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export function getImage() {
  let states = [
    "Spacegear_Template.jpg",
    "Breadgear_Template.jpg",
    "Grassgear_Template.jpg",
    "Raingear_Template.jpg",
    "Valengear_Template.jpg",
    "Corgear_Template.jpg"
  ];

  return states[getRandomIntInclusive(0, states.length - 1)];
}
