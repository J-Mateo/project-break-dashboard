const apiKey = "50bbd61ec7954bb491572356262104";
const city = "Madrid";
const baseUrl = "https://api.weatherapi.com/v1";

const url = `${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no&lang=es`;
console.log(url);

fetch(url)
  .then(response => response.json())
  .then(data => {
   
  const cityName = data.location.name;
  const country = data.location.country;
  const temp = data.current.temp_c;
  const condition = data.current.condition.text;
  const icon = data.current.condition.icon;
  const precip = data.current.precip_mm;
  const humidity = data.current.humidity;
  const wind = data.current.wind_kph;

  const locationEl = document.getElementById("weather-location");
  const statusEl = document.getElementById("weather-status");
  const iconEl = document.getElementById("weather-icon");
  const tempEl = document.getElementById("weather-temp");

  if (locationEl) locationEl.textContent = cityName;
  if (statusEl) statusEl.textContent = condition;
  if (tempEl) tempEl.textContent = `${temp}°C`;
  if (iconEl) iconEl.src = "https:" + icon;

  const rainEl = document.getElementById("weather-rain");
  const humidityEl = document.getElementById("weather-humidity");
  const windEl = document.getElementById("weather-wind");

   if (rainEl) rainEl.textContent = `🌧️ ${precip} mm`;
   if (humidityEl) humidityEl.textContent = `💧 ${humidity}%`;
   if (windEl) windEl.textContent = `💨 ${wind} km/h`;

  const hoursEl = document.getElementById("weather-hours");

  if (!hoursEl) return;
  
  const hours = data.forecast.forecastday[0].hour;
  const now = new Date().getHours();

  hoursEl.innerHTML = hours.map(hour => {
    const time = hour.time.split(" ")[1].slice(0, 5);
    const hourTemp = Math.round(hour.temp_c);
    const hourIcon = "https:" + hour.condition.icon;
    const hourNumber = parseInt(hour.time.split(" ")[1].split(":")[0]);
    const isNow = hourNumber === now;

   return `
        <div class="hour-card ${isNow ? "active" : ""}">
          <div>${time}</div>
          <img src="${hourIcon}" alt="">
          <div>${hourTemp}°</div>
        </div>
      `;
    }).join("");

    const activeEl = document.querySelector(".hour-card.active");

    if (activeEl) {
    activeEl.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
    });
    }
 });
