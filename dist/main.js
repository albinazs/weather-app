(()=>{"use strict";class t{static capitalise(t){return t.charAt(0).toUpperCase()+t.slice(1)}static getTemp(t){return Math.round(t)+"℃"}static getFeels(t){return"Feels like "+Math.round(t)+"℃"}static getWind(t){return"Wind: "+Math.round(10*t)/10+"m/s"}static getHumidity(t){return"Humidity: "+Math.round(t)+"%"}}const e=document.querySelector("#weather-info"),n=document.querySelector("#city"),o=document.querySelector("#desc"),c=document.querySelector("#deg"),r=document.querySelector("#icon"),i=document.querySelector("#feels"),a=document.querySelector("#wind"),s=document.querySelector("#hum"),u=document.querySelector("input[type=search]"),d="54548de06c18d589b6cb4816609e68c3";async function l(l){if(""!=u.value){l.preventDefault();try{const l=u.value,m=`http://api.openweathermap.org/geo/1.0/direct?q=${l}&limit=5&appid=${d}`,p=await fetch(m,{mode:"cors"});if(!p.ok)throw new Error(`City ${l} not found`);const h=await p.json();!async function(u,l){const m=`https://api.openweathermap.org/data/2.5/weather?lat=${u}&lon=${l}&appid=${d}&units=metric`;try{const u=await fetch(m,{mode:"cors"});(u=>{e.classList.add("visible");const d=u.name;n.textContent=d;const l=u.weather[0].description,m=t.capitalise(l);o.textContent=m;const p=u.main.temp,h=t.getTemp(p);c.textContent=h;(t=>{r.classList.add("visible"),r.src=`https://openweathermap.org/img/wn/${t}@2x.png`})(u.weather[0].icon);const y=u.main.feels_like,w=t.getFeels(y);i.textContent=w;const g=u.wind.speed,f=t.getWind(g);a.textContent=f;const q=u.main.humidity,S=t.getHumidity(q);s.textContent=S})(await u.json())}catch(t){alert(t)}}(h[0].lat,h[0].lon),u.value=""}catch(t){alert(t)}}}document.querySelector("form").addEventListener("submit",(t=>l(t)))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YSB7XG4gIHN0YXRpYyBjYXBpdGFsaXNlKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0VGVtcChyYXdUZW1wRGF0YSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHJhd1RlbXBEYXRhKSArIFwiXFx1MjEwM1wiO1xuICB9XG5cbiAgc3RhdGljIGdldEZlZWxzKHJhd0ZlZWxzTGlrZURhdGEpIHtcbiAgICByZXR1cm4gXCJGZWVscyBsaWtlIFwiICsgTWF0aC5yb3VuZChyYXdGZWVsc0xpa2VEYXRhKSArIFwiXFx1MjEwM1wiO1xuICB9XG5cbiAgc3RhdGljIGdldFdpbmQocmF3V2luZERhdGEpIHtcbiAgICByZXR1cm4gXCJXaW5kOiBcIiArIE1hdGgucm91bmQocmF3V2luZERhdGEgKiAxMCkgLyAxMCArIFwibS9zXCI7XG4gIH1cblxuICBzdGF0aWMgZ2V0SHVtaWRpdHkocmF3SHVtaWRpdHlEYXRhKSB7XG4gICAgcmV0dXJuIFwiSHVtaWRpdHk6IFwiICsgTWF0aC5yb3VuZChyYXdIdW1pZGl0eURhdGEpICsgXCIlXCI7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XG5cbmNvbnN0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItaW5mb1wiKTtcbmNvbnN0IGNpdHlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHlcIik7XG5jb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY1wiKTtcbmNvbnN0IGRlZ3JlZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVnXCIpO1xuY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvblwiKTtcbmNvbnN0IGZlZWxzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmZWVsc1wiKTtcbmNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbmRcIik7XG5jb25zdCBodW1pZGl0eURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtXCIpO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyV2VhdGhlciA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuXG4gIHdlYXRoZXJEaXYuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXG4gIGNvbnN0IGNpdHkgPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICBjaXR5RGl2LnRleHRDb250ZW50ID0gY2l0eTtcblxuICBjb25zdCByYXdEZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGNvbnN0IGZpbmFsRGVzY3JpcHRpb24gPSBEYXRhLmNhcGl0YWxpc2UocmF3RGVzY3JpcHRpb24pO1xuICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IGZpbmFsRGVzY3JpcHRpb247XG5cbiAgY29uc3QgcmF3VGVtcERhdGEgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXA7XG4gIGNvbnN0IGZpbmFsVGVtcERhdGEgPSBEYXRhLmdldFRlbXAocmF3VGVtcERhdGEpO1xuICBkZWdyZWVEaXYudGV4dENvbnRlbnQgPSBmaW5hbFRlbXBEYXRhO1xuXG4gIGNvbnN0IGljb25JRCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbjtcbiAgcmVuZGVySWNvbihpY29uSUQpO1xuXG4gIGNvbnN0IHJhd0ZlZWxzTGlrZURhdGEgPSB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2U7XG4gIGNvbnN0IGZpbmFsRmVlbHNMaWtlRGF0YSA9IERhdGEuZ2V0RmVlbHMocmF3RmVlbHNMaWtlRGF0YSk7XG4gIGZlZWxzRGl2LnRleHRDb250ZW50ID0gZmluYWxGZWVsc0xpa2VEYXRhO1xuXG4gIGNvbnN0IHJhd1dpbmREYXRhID0gd2VhdGhlckRhdGEud2luZC5zcGVlZDtcbiAgY29uc3QgZmluYWxXaW5kRGF0YSA9IERhdGEuZ2V0V2luZChyYXdXaW5kRGF0YSk7XG4gIHdpbmREaXYudGV4dENvbnRlbnQgPSBmaW5hbFdpbmREYXRhO1xuXG4gIGNvbnN0IHJhd0h1bWlkaXR5RGF0YSA9IHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHk7XG4gIGNvbnN0IGZpbmFsSHVtaWRpdHlEYXRhID0gRGF0YS5nZXRIdW1pZGl0eShyYXdIdW1pZGl0eURhdGEpO1xuICBodW1pZGl0eURpdi50ZXh0Q29udGVudCA9IGZpbmFsSHVtaWRpdHlEYXRhO1xufTtcblxuY29uc3QgcmVuZGVySWNvbiA9IChpY29uSUQpID0+IHtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgaWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbklEfUAyeC5wbmdgO1xufTtcbiIsImltcG9ydCB7IHJlbmRlcldlYXRoZXIgfSBmcm9tIFwiLi9kb21cIjtcblxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9c2VhcmNoXVwiKTtcbmNvbnN0IEFQSV9LRVkgPSBcIjU0NTQ4ZGUwNmMxOGQ1ODliNmNiNDgxNjYwOWU2OGMzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbihlKSB7XG4gIGlmIChzZWFyY2gudmFsdWUgPT0gXCJcIikgcmV0dXJuO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2VhcmNoUmVxdWVzdCA9IHNlYXJjaC52YWx1ZTtcbiAgICBjb25zdCByZXF1ZXN0ID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtzZWFyY2hSZXF1ZXN0fSZsaW1pdD01JmFwcGlkPSR7QVBJX0tFWX1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCwge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBDaXR5ICR7c2VhcmNoUmVxdWVzdH0gbm90IGZvdW5kYCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgbGF0ID0gcmVzdWx0WzBdLmxhdDtcbiAgICBjb25zdCBsb24gPSByZXN1bHRbMF0ubG9uO1xuICAgIGdldFdlYXRoZXIobGF0LCBsb24pO1xuXG4gICAgc2VhcmNoLnZhbHVlID0gXCJcIjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChlcnJvcik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsYXQsIGxvbikge1xuICBjb25zdCByZXF1ZXN0ID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2A7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0LCB7XG4gICAgICBtb2RlOiBcImNvcnNcIixcbiAgICB9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJlbmRlcldlYXRoZXIod2VhdGhlckRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGVycm9yKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi9hcGlcIjtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBnZXRMb2NhdGlvbihlKSk7XG5cbi8vIGlmIHN1Ym1pdHRlZCAtIGNsZWFyIGZvcm0sIHNob3cgY2l0eSBhbmQgd2VhdGhlclxuLy9jbGVhbiBkYXRhXG4iXSwibmFtZXMiOlsiRGF0YSIsInN0YXRpYyIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyYXdUZW1wRGF0YSIsIk1hdGgiLCJyb3VuZCIsInJhd0ZlZWxzTGlrZURhdGEiLCJyYXdXaW5kRGF0YSIsInJhd0h1bWlkaXR5RGF0YSIsIndlYXRoZXJEaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaXR5RGl2IiwiZGVzY3JpcHRpb25EaXYiLCJkZWdyZWVEaXYiLCJpY29uIiwiZmVlbHNEaXYiLCJ3aW5kRGl2IiwiaHVtaWRpdHlEaXYiLCJzZWFyY2giLCJBUElfS0VZIiwiYXN5bmMiLCJnZXRMb2NhdGlvbiIsImUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoUmVxdWVzdCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsIm9rIiwiRXJyb3IiLCJyZXN1bHQiLCJqc29uIiwibGF0IiwibG9uIiwid2VhdGhlckRhdGEiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaXR5IiwibmFtZSIsInRleHRDb250ZW50IiwicmF3RGVzY3JpcHRpb24iLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJmaW5hbERlc2NyaXB0aW9uIiwiY2FwaXRhbGlzZSIsIm1haW4iLCJ0ZW1wIiwiZmluYWxUZW1wRGF0YSIsImdldFRlbXAiLCJpY29uSUQiLCJzcmMiLCJyZW5kZXJJY29uIiwiZmVlbHNfbGlrZSIsImZpbmFsRmVlbHNMaWtlRGF0YSIsImdldEZlZWxzIiwid2luZCIsInNwZWVkIiwiZmluYWxXaW5kRGF0YSIsImdldFdpbmQiLCJodW1pZGl0eSIsImZpbmFsSHVtaWRpdHlEYXRhIiwiZ2V0SHVtaWRpdHkiLCJyZW5kZXJXZWF0aGVyIiwiZXJyb3IiLCJhbGVydCIsImdldFdlYXRoZXIiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==