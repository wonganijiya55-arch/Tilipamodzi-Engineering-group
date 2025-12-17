// Tilipamodzi Engineering Group - Minimal JS
(function() {
  // Mobile menu toggle
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    // Close menu when clicking a link (mobile)
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form (demo feedback)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = (document.getElementById('name') || {}).value || '';
      const email = (document.getElementById('email') || {}).value || '';
      const message = (document.getElementById('message') || {}).value || '';
      if (!name || !email || !message) {
        if (status) {
          status.textContent = 'Please complete all fields.';
          status.style.color = '#b91c1c';
        }
        return;
      }
      // Simulate successful submission
      if (status) {
        status.textContent = 'Thank you. Your message has been noted. We will contact you via email.';
        status.style.color = '#2ea66f';
      }
      form.reset();
    });
  }
})();
