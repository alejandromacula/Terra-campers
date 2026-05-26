/* ── Nav scroll effect ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile burger ── */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const open = navLinks.classList.contains('open');
  burger.setAttribute('aria-expanded', open);
  burger.querySelectorAll('span').forEach((s, i) => {
    if (open) {
      if (i === 0) s.style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
      if (i === 1) s.style.cssText = 'opacity:0';
      if (i === 2) s.style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
    } else {
      s.style.cssText = '';
    }
  });
});

/* Close nav on link click */
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.querySelectorAll('span').forEach(s => s.style.cssText = '');
  });
});

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll(
  '.stats__item, .about__media, .about__text, .model-card, .feature-item, .process__step, .gallery__item, .testimonial, .contact__text, .contact__form-wrap, .footer__brand, .footer__links'
);
revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  const delay = (i % 4) * 0.1;
  el.style.transitionDelay = `${delay}s`;
});

const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach(el => observer.observe(el));

/* ── Smooth active nav link ── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}`
      ? 'var(--cream)'
      : '';
  });
}, { passive: true });

/* ── Contact form ── */
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.querySelector('#name').value.trim();
  const email = form.querySelector('#email').value.trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) { shake(form.querySelector('#name')); return; }
  if (!email || !emailRe.test(email)) { shake(form.querySelector('#email')); return; }

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.querySelector('.btn__text').textContent = 'Enviando…';

  setTimeout(() => {
    form.reset();
    btn.disabled = false;
    btn.querySelector('.btn__text').textContent = 'Enviar Solicitud';
    success.hidden = false;
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => { success.hidden = true; }, 6000);
  }, 1200);
});

function shake(el) {
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'shake .4s';
  el.focus();
  const s = document.createElement('style');
  s.textContent = '@keyframes shake{0%,100%{transform:none}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}';
  document.head.appendChild(s);
  el.addEventListener('animationend', () => el.style.animation = '', { once: true });
}

/* ── Gallery lightbox-hint cursor ── */
document.querySelectorAll('.gallery__item').forEach(item => {
  item.style.cursor = 'zoom-in';
  item.addEventListener('click', () => {
    const label = item.querySelector('.gallery__overlay span')?.textContent || '';
    console.info('Gallery item:', label);
  });
});

/* ── Counter animation on stats ── */
const statNums = document.querySelectorAll('.stats__number');
let statsAnimated = false;

const statsObs = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting || statsAnimated) return;
  statsAnimated = true;
  statNums.forEach(el => {
    const raw = el.textContent;
    const match = raw.match(/[\d.]+/);
    if (!match) return;
    const target = parseFloat(match[0]);
    const isDecimal = raw.includes('.');
    const prefix = raw.slice(0, raw.indexOf(match[0]));
    const suffix = raw.slice(raw.indexOf(match[0]) + match[0].length);
    let start = 0;
    const duration = 1400;
    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      el.textContent = prefix + (isDecimal ? val.toFixed(1) : Math.floor(val)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = raw;
    };
    requestAnimationFrame(step);
  });
}, { threshold: .5 });

const statsSection = document.querySelector('.stats');
if (statsSection) statsObs.observe(statsSection);
