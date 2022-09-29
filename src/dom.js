import { Data } from "./data";

const weatherDiv = document.querySelector("#weather-info");
const cityDiv = document.querySelector("#city");
const descriptionDiv = document.querySelector("#desc");
const degreeDiv = document.querySelector("#deg");
const icon = document.querySelector("#icon");
const feelsDiv = document.querySelector("#feels");
const windDiv = document.querySelector("#wind");
const humidityDiv = document.querySelector("#hum");

export const renderWeather = (weatherData) => {

  weatherDiv.classList.add('visible');

  const city = weatherData.name;
  cityDiv.textContent = city;

  const rawDescription = weatherData.weather[0].description;
  const finalDescription = Data.capitalise(rawDescription);
  descriptionDiv.textContent = finalDescription;

  const rawTempData = weatherData.main.temp;
  const finalTempData = Data.getTemp(rawTempData);
  degreeDiv.textContent = finalTempData;

  const iconID = weatherData.weather[0].icon;
  renderIcon(iconID);

  const rawFeelsLikeData = weatherData.main.feels_like;
  const finalFeelsLikeData = Data.getFeels(rawFeelsLikeData);
  feelsDiv.textContent = finalFeelsLikeData;

  const rawWindData = weatherData.wind.speed;
  const finalWindData = Data.getWind(rawWindData);
  windDiv.textContent = finalWindData;

  const rawHumidityData = weatherData.main.humidity;
  const finalHumidityData = Data.getHumidity(rawHumidityData);
  humidityDiv.textContent = finalHumidityData;
};

const renderIcon = (iconID) => {
  icon.classList.add("visible");
  icon.src = `https://openweathermap.org/img/wn/${iconID}@2x.png`;
};
