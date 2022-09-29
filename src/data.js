export class Data {
  static capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static getTemp(rawTempData) {
    return Math.round(rawTempData) + "\u2103";
  }

  static getFeels(rawFeelsLikeData) {
    return "Feels like " + Math.round(rawFeelsLikeData) + "\u2103";
  }

  static getWind(rawWindData) {
    return "Wind: " + Math.round(rawWindData * 10) / 10 + "m/s";
  }

  static getHumidity(rawHumidityData) {
    return "Humidity: " + Math.round(rawHumidityData) + "%";
  }
}
