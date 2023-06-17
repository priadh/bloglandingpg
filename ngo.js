const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  themeToggle.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
});

// Detect user's preferred color scheme
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkScheme.matches) {
  body.classList.add('dark-theme');
  themeToggle.textContent = 'Light Mode';
} else {
  body.classList.remove('dark-theme');
  themeToggle.textContent = 'Dark Mode';
}
