import { Data } from "./data";

const weatherDiv = document.querySelector("#weather-info");
const cityDiv = document.querySelector("#city");
const descriptionDiv = document.querySelector("#desc");
const currentTempDiv = document.querySelector("#curr-temp");
const degreeDiv = document.querySelector("#deg");
const icon = document.querySelector("#icon");
const feelsDiv = document.querySelector("#feels");
const windDiv = document.querySelector("#wind");
const humidityDiv = document.querySelector("#hum");

export const renderWeather = (weatherData) => {
  //hide onload 

  const city = weatherData.name;
  console.log(city);

  const rawDescription = weatherData.weather[0].description;
  const finalDescription = Data.capitalise(rawDescription);
  console.log(finalDescription)

  const temp = weatherData.main.temp;
  const finalTemp = Data.getTemp(temp);
  console.log(finalTemp);

  const iconID = weatherData.weather[0].icon;


  const rawFeelsLikeData = weatherData.main.feels_like;
  const finalFeelsLikeData = Data.getFeels(rawFeelsLikeData);
  console.log(finalFeelsLikeData);

  const rawWindData = weatherData.wind.speed;
  const finalWindData = Data.getWind(rawWindData);
  console.log(finalWindData);

  const rawHumidityData = weatherData.main.humidity;
  const finalHumidityData = Data.getHumidity(rawHumidityData);
  console.log(finalHumidityData);

  

  renderIcon(iconID);
};

const renderIcon = (iconID) => {
  icon.classList.add("visible");
  icon.src = `https://openweathermap.org/img/wn/${iconID}@2x.png`;
};
