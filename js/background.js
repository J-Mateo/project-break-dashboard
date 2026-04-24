import { CLOUDINARY, photos } from '../img/photos-fondo.js';

const body = document.body;
const photoKeys = Object.keys(photos); 

const changeBackground = () => {
  const randomKey = photoKeys[Math.floor(Math.random() * photoKeys.length)];
  const publicId = photos[randomKey];
  const finalUrl = `${CLOUDINARY.base}/${CLOUDINARY.transforms}/${publicId}.jpg`;
  
  // PRECARGA: Creamos una imagen invisible en memoria
  const imgPreload = new Image();
  imgPreload.src = finalUrl;
  
  // Cuando la imagen invisible se haya descargado COMPLETAMENTE...
  imgPreload.onload = () => {
    // ...entonces la aplicamos al body. ¡Sin parpadeos!
    body.style.backgroundImage = `url('${finalUrl}')`;
    // console.log("Cambiado a:", randomKey);
  };
};

changeBackground();
setInterval(changeBackground, 15000);
