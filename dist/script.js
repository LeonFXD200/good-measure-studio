const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const priceButtons = document.querySelectorAll('[data-price-mode]');
const priceValues = document.querySelectorAll('[data-project][data-monthly]');
const pricingCopy = document.querySelector('[data-pricing-copy]');

menuButton.addEventListener('click', () => {
  const open = !nav.classList.contains('is-open');
  nav.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

priceButtons.forEach(button => button.addEventListener('click', () => {
  const mode = button.dataset.priceMode;
  priceButtons.forEach(candidate => {
    const active = candidate === button;
    candidate.classList.toggle('is-active', active);
    candidate.setAttribute('aria-pressed', String(active));
  });
  priceValues.forEach(value => { value.textContent = value.dataset[mode]; });
  pricingCopy.textContent = mode === 'project'
    ? 'Pay once for the build. Hosting and support are available separately after launch.'
    : 'Pay a smaller setup fee, then one monthly amount for the website, hosting, maintenance and routine updates.';
}));

document.querySelectorAll('[data-plan]').forEach(link => link.addEventListener('click', () => {
  const mode = document.querySelector('[data-price-mode].is-active').textContent.trim();
  document.querySelector('.contact-card .button').href = `mailto:hello@yourdomain.co.uk?subject=${encodeURIComponent(`${link.dataset.plan} website — ${mode}`)}`;
}));

document.querySelector('[data-year]').textContent = new Date().getFullYear();
