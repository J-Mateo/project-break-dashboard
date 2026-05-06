const apiKey = "50bbd61ec7954bb491572356262104";
const city = "Madrid";
const baseUrl = "https://api.weatherapi.com/v1";

const locationEl = document.getElementById("weather-location");
const statusEl = document.getElementById("weather-status");
const iconEl = document.getElementById("weather-icon");
const tempEl = document.getElementById("weather-temp");

// Elementos opcionales: este mismo script se reutiliza en index.html y weather.html.
// Por eso comprobamos si existen antes de modificar su contenido.

const rainEl = document.getElementById("weather-rain");
const humidityEl = document.getElementById("weather-humidity");
const windEl = document.getElementById("weather-wind");
const hoursEl = document.getElementById("weather-hours");

const url = `${baseUrl}/forecast.json?key=${apiKey}&q=${encodeURIComponent(city)}&days=1&aqi=no&alerts=no&lang=es`;

mostrarCargando();

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error de API: ${response.status}`);
    }

    return response.json();
  })
  .then(data => {
    if (data.error) {
      throw new Error(data.error.message);
    }

    const cityName = data.location.name;
    const country = data.location.country;
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const icon = data.current.condition.icon;
    const precip = data.current.precip_mm;
    const humidity = data.current.humidity;
    const wind = data.current.wind_kph;

    if (locationEl) locationEl.textContent = `${cityName}, ${country}`;
    if (statusEl) statusEl.textContent = condition;
    if (tempEl) tempEl.textContent = `${temp}°C`;

    if (iconEl) {
      iconEl.src = "https:" + icon;
      iconEl.alt = condition;
      iconEl.style.display = "block";
    }

    if (rainEl) rainEl.textContent = `🌧️ ${precip} mm`;
    if (humidityEl) humidityEl.textContent = `💧 ${humidity}%`;
    if (windEl) windEl.textContent = `💨 ${wind} km/h`;

    if (!hoursEl) return;

    const hours = data.forecast.forecastday[0].hour;

    const now = Number(
      data.location.localtime
        .split(" ")[1]
        .split(":")[0]
    );

    hoursEl.innerHTML = hours.map(hour => {
      const time = hour.time.split(" ")[1].slice(0, 5);
      const hourTemp = Math.round(hour.temp_c);
      const hourIcon = "https:" + hour.condition.icon;
      const hourNumber = parseInt(hour.time.split(" ")[1].split(":")[0]);
      const isNow = hourNumber === now;

      return `
        <div class="hour-card ${isNow ? "active" : ""}">
          <div>${time}</div>
          <img src="${hourIcon}" alt="${hour.condition.text}">
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
  })
  .catch(error => {
    console.error("Error cargando el tiempo:", error);

    mostrarErrorTiempo();
  });

function mostrarCargando() {
  if (locationEl) locationEl.textContent = city;
  if (statusEl) statusEl.textContent = "Cargando el tiempo…";
  if (tempEl) tempEl.textContent = "--°C";

  if (iconEl) {
    iconEl.removeAttribute("src");
    iconEl.alt = "";
    iconEl.style.display = "none";
  }

  if (rainEl) rainEl.textContent = "🌧️ -- mm";
  if (humidityEl) humidityEl.textContent = "💧 --%";
  if (windEl) windEl.textContent = "💨 -- km/h";

  if (hoursEl) {
    hoursEl.innerHTML = `
      <div class="hour-card">
        <div>Cargando…</div>
      </div>
    `;
  }
}

function mostrarErrorTiempo() {
  if (locationEl) locationEl.textContent = city;
  if (statusEl) statusEl.textContent = "No se pudo cargar el tiempo.";
  if (tempEl) tempEl.textContent = "--°C";

  if (iconEl) {
    iconEl.removeAttribute("src");
    iconEl.alt = "";
    iconEl.style.display = "none";
  }

  if (rainEl) rainEl.textContent = "🌧️ -- mm";
  if (humidityEl) humidityEl.textContent = "💧 --%";
  if (windEl) windEl.textContent = "💨 -- km/h";

  if (hoursEl) {
    hoursEl.innerHTML = `
      <div class="hour-card">
        <div>Inténtalo más tarde</div>
      </div>
    `;
  }
}
