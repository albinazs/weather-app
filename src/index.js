import { getCoordinates } from "./api";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => getCoordinates(e));

// if submitted - clear form, show city and weather
//clean data
