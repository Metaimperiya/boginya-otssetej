/* ============================================
   БОГИНЯ СОЦСЕТЕЙ — интерактив
   ============================================ */

function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  const current = body.getAttribute('data-theme');

  if (current === 'light') {
    body.removeAttribute('data-theme');
    icon.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
    icon.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
}

(function loadTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.setAttribute('data-theme', 'light');
    document.addEventListener('DOMContentLoaded', () => {
      const icon = document.getElementById('theme-icon');
      if (icon) icon.textContent = '☀️';
    });
  }
})();

function filterChapters() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  const filter = input.value.toLowerCase();
  const cards = document.querySelectorAll('.chapter-card');

  cards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    const text = card.textContent.toLowerCase();
    if (title.includes(filter) || text.includes(filter)) {
      card.style.display = '';
      card.style.animation = 'fadeIn 0.3s';
    } else {
      card.style.display = 'none';
    }
  });
}

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

console.log('👑 БОГИНЯ СОЦСЕТЕЙ загружена. 30 глав. 1 система.');
