import { renderWeather } from "./dom";

const search = document.querySelector("input[type=search]");
const API_KEY = "54548de06c18d589b6cb4816609e68c3";

export async function getLocation(e) {
  if (search.value == "") return;
  e.preventDefault();
  try {
    const searchRequest = search.value;
    const request = `https://api.openweathermap.org/geo/1.0/direct?q=${searchRequest}&limit=5&appid=${API_KEY}`;
    const response = await fetch(request, {
      mode: "cors",
    });
    if (!response.ok) throw new Error(`City ${searchRequest} not found`);
    const result = await response.json();

    const lat = result[0].lat;
    const lon = result[0].lon;
    getWeather(lat, lon);

    search.value = "";
  } catch (error) {
    alert(error);
  }
}

async function getWeather(lat, lon) {
  const request = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(request, {
      mode: "cors",
    });
    const weatherData = await response.json();

    renderWeather(weatherData);
  } catch (error) {
    alert(error);
  }
}
