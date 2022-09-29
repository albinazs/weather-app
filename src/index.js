import { getLocation } from "./api";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => getLocation(e));

// if submitted - clear form, show city and weather
//clean data
