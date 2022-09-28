import "./css/style.css";

const search = document.querySelector("input[type=search]");
const form = document.querySelector("form");
const API_KEY = "54548de06c18d589b6cb4816609e68c3";

form.addEventListener("submit", (e) => getCoordinates(e));

async function getCoordinates(e) {
  e.preventDefault();
  const searchRequest = search.value;
  const request = `http://api.openweathermap.org/geo/1.0/direct?q=${searchRequest}&limit=5&appid=${API_KEY}`;
  const response = await fetch(request);
  const result = await response.json();

  const lat = result[0].lat;
  const lon = result[0].lon;

  getWeather(lat, lon);

  console.log(lat);
  console.log(lon);
}

async function getWeather(lat, lon) {
  const request = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const response = await fetch(request);
  const result = await response.json();
  console.log(result);

  const weatherMain = result.weather[0].main;
  console.log(weatherMain);

  const temp = result.main.temp;
  console.log(temp);
}

// if chosen F - F
// show 
