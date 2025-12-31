// CineSparq UI interactions
// Handles client-side behaviors for the application shell


(function () {
  const toggleBtn = document.querySelector('[data-toggle="password"]');
  const password = document.getElementById('password');

  if (toggleBtn && password) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = password.type === 'password';
      password.type = isHidden ? 'text' : 'password';

      const label = toggleBtn.querySelector('[data-state]');
      if (label) label.textContent = isHidden ? 'Hide' : 'Show';

      toggleBtn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
    });
  }

  // Prevent form submit from navigating (mock only)
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Optional: you can route later to the next mock page
      window.location.href = './pages/readiness-summary.html';
    });
  }
})();
