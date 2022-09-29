const icon = document.querySelector("#icon");

export class UI {
  static getIcon(weatherMain) {
    switch (weatherMain) {
      case "Clouds":
        icon.src = "https://openweathermap.org/img/wn/11d@2x.png";
        break;

      default:
      //code
    }
  }
}
