import './styles.css';

function handleNavigation() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = event.target.getAttribute('href');
      fetchPage(href);
    });
  });
}

async function fetchPage(page) {
  try {
    const response = await fetch(page);
    const html = await response.text();
    document.querySelector('main').innerHTML = html;
    handleNavigation();
  } catch (error) {
    console.error('Error fetching page:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchPage('index.html');
});