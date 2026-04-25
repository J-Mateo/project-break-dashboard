
const formatNumber = (numero) => numero.toString().padStart(2, '0');

const getMessage = (hours) => {
 if (hours >= 0 && hours < 7) {
    return "El código puede esperar… descansa y vuelve mañana.";
 } else if (hours >= 7 && hours < 12) {
    return "Buenos días. Café listo ☕, comienza el día.";
  } else if (hours >= 12 && hours < 14) {
    return "Último empujón antes del break.";
  } else if (hours >= 14 && hours < 16) {
    return "Volviendo al código… poco a poco.";
  } else if (hours > 16 && hours <= 18) {
    return "Sigue, vas bien. Últimos avances.";
  } else if (hours > 18 && hours <= 22) {
    return "Último push del día.¡Ánimo!";
  } else {
    return "Cierra el código. Es hora de desconectar.";
  }
};


function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const timeString = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
  const dateString = `${formatNumber(date)}/${formatNumber(month)}/${year}`;
  const messageElement = document.getElementById('message');

  if (messageElement) {
  messageElement.textContent = getMessage(hours);
}

// console.log(`Día: ${dateString}`);
// console.log(`Hora actual: ${timeString}`);

  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;
  
}


setInterval(updateClock, 1000);
updateClock();

