const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const priceButtons = document.querySelectorAll('[data-price-mode]');
const priceValues = document.querySelectorAll('[data-project][data-monthly]');
const pricingCopy = document.querySelector('[data-pricing-copy]');

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

menuButton.addEventListener('click', () => {
  const willOpen = !nav.classList.contains('is-open');
  nav.classList.toggle('is-open', willOpen);
  menuButton.setAttribute('aria-expanded', String(willOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

priceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const mode = button.dataset.priceMode;

    priceButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-pressed', String(active));
    });

    priceValues.forEach((value) => {
      value.textContent = value.dataset[mode];
    });

    pricingCopy.textContent = mode === 'project'
      ? 'One clear project price. Your completed website is yours, with optional hosting and support after launch.'
      : 'A smaller setup fee and one monthly payment, with hosting, maintenance and routine content updates included.';
  });
});

document.querySelectorAll('[data-plan]').forEach((link) => {
  link.addEventListener('click', () => {
    const mode = document.querySelector('[data-price-mode].is-active').textContent.trim();
    const subject = encodeURIComponent(`${link.dataset.plan} website — ${mode}`);
    const emailLink = document.querySelector('.contact-actions .button');
    emailLink.href = `mailto:hello@yourdomain.co.uk?subject=${subject}`;
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
document.querySelector('[data-year]').textContent = new Date().getFullYear();
