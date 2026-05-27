/* ═══════════════════════════════════════════════════════
   TERRA CAMPERS — app.js
═══════════════════════════════════════════════════════ */

/* ── 1. Generate forest paths ── */
function seededRand(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function buildForestPath(count, baseY, minH, maxH, spread, seed) {
  const points = [`M0,${baseY}`];
  for (let i = 0; i < count; i++) {
    const t = i / count;
    const x = t * 1440 + seededRand(i * 7 + seed) * spread - spread / 2;
    const h = minH + seededRand(i * 3 + seed + 2) * (maxH - minH);
    const w = h * (0.32 + seededRand(i + seed + 5) * 0.14);
    const xc = Math.max(w + 2, Math.min(1438 - w, x));
    points.push(`L${(xc - w).toFixed(1)},${baseY}`, `L${xc.toFixed(1)},${(baseY - h).toFixed(1)}`, `L${(xc + w).toFixed(1)},${baseY}`);
  }
  points.push(`L1440,${baseY}`, `L1440,900`, `L0,900`, 'Z');
  return points.join(' ');
}

document.getElementById('forestBackPath').setAttribute('d',
  buildForestPath(50, 870, 30, 65, 40, 11));
document.getElementById('forestFrontPath').setAttribute('d',
  buildForestPath(28, 895, 55, 120, 55, 37));

/* ── 2. Nav ── */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  const spans = burger.querySelectorAll('span');
  if (open) {
    spans[0].style.cssText = 'transform:rotate(45deg) translate(4.5px,4.5px)';
    spans[1].style.cssText = 'opacity:0;transform:scaleX(0)';
    spans[2].style.cssText = 'transform:rotate(-45deg) translate(4.5px,-4.5px)';
  } else {
    spans.forEach(s => s.style.cssText = '');
  }
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    burger.querySelectorAll('span').forEach(s => s.style.cssText = '');
  });
});

/* ── 3. Hero parallax (desktop only) ── */
const isMobile = () => window.innerWidth <= 768 ||
  window.matchMedia('(hover: none) and (pointer: coarse)').matches;

const heroLayers = [];
document.querySelectorAll('[data-speed]').forEach(el => {
  heroLayers.push({ el, speed: parseFloat(el.dataset.speed) });
});

const hero = document.getElementById('inicio');
const heroH = () => hero ? hero.offsetHeight : window.innerHeight;

function updateParallax() {
  if (isMobile()) return;
  const sy = window.scrollY;
  if (sy > heroH() * 1.2) return;
  heroLayers.forEach(({ el, speed }) => {
    el.style.transform = `translateY(${sy * speed}px)`;
  });
}

window.addEventListener('scroll', updateParallax, { passive: true });
updateParallax();

/* ── 4. CTA banner parallax (desktop only) ── */
const ctaBg = document.getElementById('ctaBannerBg');
if (ctaBg) {
  const ctaBanner = ctaBg.closest('.cta-banner');
  const updateCtaParallax = () => {
    if (isMobile() || !ctaBanner) return;
    const rect = ctaBanner.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.bottom < 0 || rect.top > vh) return;
    const progress = (vh - rect.top) / (vh + rect.height);
    ctaBg.style.transform = `translateY(${(progress - 0.5) * -80}px)`;
  };
  window.addEventListener('scroll', updateCtaParallax, { passive: true });
  updateCtaParallax();
}

/* ── 5. Scroll reveal ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── 6. Counter animation (strip numbers) ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  if (isNaN(target)) return;
  const duration = 1400;
  let start = null;
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(easeOut(p) * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const stripObs = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) return;
  document.querySelectorAll('.strip__num[data-target]').forEach(animateCounter);
  stripObs.disconnect();
}, { threshold: 0.5 });

const strip = document.querySelector('.strip');
if (strip) stripObs.observe(strip);

/* ── 7. Cursor glow ── */
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
let glowRaf = null;

if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.opacity = '1';
    if (!glowRaf) glowRaf = requestAnimationFrame(animateGlow);
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    glowRaf = requestAnimationFrame(animateGlow);
  }
}

/* ── 8. Interior horizontal drag scroll ── */
const track = document.getElementById('interiorTrack');
if (track) {
  let isDown = false, startX = 0, scrollLeft = 0;

  const endDrag = () => {
    isDown = false;
    track.classList.remove('dragging');
  };

  track.addEventListener('mousedown', e => {
    isDown = true;
    track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollLeft - (x - startX) * 1.4;
  });
  track.addEventListener('mouseup', endDrag);
  track.addEventListener('mouseleave', endDrag);

  track.addEventListener('touchstart', e => {
    startX = e.touches[0].pageX;
    scrollLeft = track.scrollLeft;
  }, { passive: true });
  track.addEventListener('touchmove', e => {
    track.scrollLeft = scrollLeft - (e.touches[0].pageX - startX);
  }, { passive: true });
}

/* ── 9. Active nav highlight on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navAnchors.forEach(a => {
        const active = a.getAttribute('href') === `#${id}`;
        a.style.color = active ? 'var(--cream)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(s => sectionObs.observe(s));

/* ── 10. Hero scroll-cue fade on scroll ── */
const scrollCue = document.getElementById('scrollCue');
window.addEventListener('scroll', () => {
  if (!scrollCue) return;
  scrollCue.style.opacity = Math.max(0, 1 - window.scrollY / 200);
}, { passive: true });

/* ── 11. Film strip pause on intersection ── */
const filmObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    e.target.querySelectorAll('.film-strip__track').forEach(track => {
      track.style.animationPlayState = e.isIntersecting ? 'running' : 'paused';
    });
  });
}, { threshold: 0.05 });
document.querySelectorAll('.film-strip').forEach(s => filmObs.observe(s));

/* ── 12. Booking form ── */
const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

if (bookingForm) {
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function shake(el) {
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.borderColor = 'var(--orange-lt)';
    el.focus();
    el.addEventListener('input', () => { el.style.borderColor = ''; }, { once: true });
  }

  bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    const name  = bookingForm.querySelector('#bName');
    const email = bookingForm.querySelector('#bEmail');
    const from  = bookingForm.querySelector('#bFrom');

    if (!name.value.trim())            { shake(name);  return; }
    if (!emailRe.test(email.value))    { shake(email); return; }
    if (!from.value)                   { shake(from);  return; }

    const btn = bookingForm.querySelector('button[type="submit"]');
    const btnText = btn.querySelector('.btn__text');
    btn.disabled = true;
    btnText.textContent = 'Enviando…';

    setTimeout(() => {
      bookingForm.reset();
      btn.disabled = false;
      btnText.textContent = 'Enviar Consulta';
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => { formSuccess.hidden = true; }, 7000);
    }, 1100);
  });
}

/* ── 13. Smooth anchor scrolling offset for fixed nav ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  });
});

/* ── 14. Intro load animation class ── */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('loading');
});
