const linksForm = document.getElementById('linksForm');
const linkName = document.getElementById('linkName');
const linkUrl = document.getElementById('linkUrl')
const saveLinkBtn = document.getElementById('saveLinkBtn');
const linksList = document.getElementById('linksList');

const allLinks = JSON.parse(localStorage.getItem('links')) || [];

function renderLinks(){
    linksList.innerHTML = "";
  
    allLinks.forEach((link) => {
    const linkItem = createLinkItem(link.name, link.url);
    linksList.appendChild(linkItem);
});
};
function createLinkItem(name, url) {
  const linkItem = document.createElement('li');
  const linkElement = document.createElement('a');
  const deleteButton = document.createElement('button');

  linkItem.appendChild(linkElement);
  linkItem.appendChild(deleteButton);

  linkElement.href = url;
  linkElement.target = "_blank";
  linkElement.rel = "noopener noreferrer";
  linkElement.textContent = name;

  deleteButton.textContent = 'X';

  deleteButton.addEventListener('click', () => {
  const index = allLinks.findIndex(link => link.name === name && link.url === url);

  if (index !== -1) {
    allLinks.splice(index, 1);
    localStorage.setItem('links', JSON.stringify(allLinks));
    renderLinks();
  }
});
  return linkItem;  
}

linksForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = linkName.value;
  const url = linkUrl.value;
  if (!name || !url) {
    return;
  }

  allLinks.push({ name, url });
  localStorage.setItem('links', JSON.stringify(allLinks));

  renderLinks();

  linksForm.reset();
});
renderLinks();


