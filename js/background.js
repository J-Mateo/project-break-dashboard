import { CLOUDINARY, photos } from '../img/photos-fondo.js';

const body = document.body;
const photoKeys = Object.keys(photos); 

const changeBackground = () => {
  const randomKey = photoKeys[Math.floor(Math.random() * photoKeys.length)];
  const publicId = photos[randomKey];
  const finalUrl = `${CLOUDINARY.base}/${CLOUDINARY.transforms}/${publicId}.jpg`;
  
  // Precarga la imagen antes de aplicarla al fondo para evitar parpadeos.
  const imgPreload = new Image();
  imgPreload.src = finalUrl;
  
  imgPreload.onload = () => {
    body.style.backgroundImage = `url('${finalUrl}')`;
  };
};

changeBackground();
setInterval(changeBackground, 15000);
