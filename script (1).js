// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});

// Scroll reveal — adds .reveal class to elements entering the viewport.
// Content is visible by default; this just adds a soft fade-up animation.
// If JS fails for any reason, the page still looks correct.
if ('IntersectionObserver' in window) {
  const groups = [
    '.conquest-cards',
    '.leader-grid',
    '.legacy-tiles',
    '.casta-grid'
  ];

  // Stagger children of these grid containers
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
