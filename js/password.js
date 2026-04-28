const lockIcon = document.getElementById('lockIcon');
const generateBtn = document.getElementById('generateBtn');
const passwordResult = document.getElementById('passwordResult');
const inputLength = document.getElementById('length');

function getRandomChar(chars) {
  const randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}
function shuffleString(str) {
  return str
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}
generateBtn.addEventListener('click', () => {
  lockIcon.setAttribute("data-lucide", "lock-keyhole");
  lucide.createIcons();

  const passwordLength = Number(inputLength.value);

  if (passwordLength < 12 || passwordLength > 50) {
    alert("La contraseña debe tener entre 12 y 50 caracteres");
    return;
  }

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()-_=+";

  const allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;

  let password = "";

  password += getRandomChar(uppercaseChars);
  password += getRandomChar(lowercaseChars);
  password += getRandomChar(numberChars);
  password += getRandomChar(symbolChars);

  while (password.length < passwordLength) {
    password += getRandomChar(allChars);
  }
  password = shuffleString(password);
  passwordResult.textContent = password;

});