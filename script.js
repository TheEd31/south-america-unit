// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});

// Term definitions — click a pill to show its definition
document.querySelectorAll('.term-pills').forEach(pillGroup => {
  const civ = pillGroup.dataset.civ;
  const defPanel = document.getElementById('def-' + civ);
  if (!defPanel) return;

  const defWord = defPanel.querySelector('.def-word');
  const defText = defPanel.querySelector('.def-text');

  pillGroup.querySelectorAll('span').forEach(pill => {
    pill.addEventListener('click', () => {
      const isActive = pill.classList.contains('active');

      // Clear other active states in this group
      pillGroup.querySelectorAll('span').forEach(p => p.classList.remove('active'));

      if (isActive) {
        // Clicking the active pill closes the panel
        defPanel.classList.remove('open');
      } else {
        pill.classList.add('active');
        defWord.textContent = pill.textContent;
        defText.textContent = pill.dataset.def;
        defPanel.classList.add('open');
      }
    });
  });
});

// Scroll reveal — adds .reveal class to elements entering the viewport.
// Content is visible by default; this just adds a soft fade-up animation.
if ('IntersectionObserver' in window) {
  const groups = [
    '.conquest-cards',
    '.leader-grid',
    '.legacy-tiles',
    '.casta-grid'
  ];

  const groupObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const kids = entry.target.children;
        Array.from(kids).forEach((kid, i) => {
          kid.classList.add('reveal');
          if (i > 0) kid.classList.add('reveal-' + Math.min(i + 1, 6));
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  groups.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => groupObserver.observe(el));
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
