/* ═══════════════════════════════════════════════════════
   TERRA CAMPERS — app.js
═══════════════════════════════════════════════════════ */

/* ── 1. Nav scroll state ── */
const nav      = document.getElementById('nav');
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── 2. Burger menu ── */
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

/* ══════════════════════════════════
   3. MULTI-LAYER PARALLAX
   Each layer has:
     data-scroll → compensates scrollY (0=no compensation, 1=fully fixed)
     data-mouse  → depth of mouse parallax (higher = more shift = foreground)
══════════════════════════════════ */
const isMobile = () => window.innerWidth <= 640 ||
  window.matchMedia('(hover: none) and (pointer: coarse)').matches;

const heroEl = document.getElementById('inicio');
const heroH  = () => heroEl ? heroEl.offsetHeight : window.innerHeight;

// Collect all parallax layers (SVG layers + content)
const layers = [];
document.querySelectorAll('[data-scroll], [data-mouse]').forEach(el => {
  layers.push({
    el,
    scroll: parseFloat(el.dataset.scroll || 0),
    mouse:  parseFloat(el.dataset.mouse  || 0),
  });
});

// Mouse lerp state
let mouseX = 0.5, mouseY = 0.5;
let lerpX  = 0.5, lerpY  = 0.5;
const LERP    = 0.055;
const M_RANGE = 20; // max px shift at mouse depth 1.0

document.addEventListener('mousemove', e => {
  mouseX = e.clientX / window.innerWidth;
  mouseY = e.clientY / window.innerHeight;
}, { passive: true });

(function tick() {
  requestAnimationFrame(tick);

  const sy = window.scrollY;

  // Lerp mouse position
  lerpX += (mouseX - lerpX) * LERP;
  lerpY += (mouseY - lerpY) * LERP;
  const dx = (lerpX - 0.5) * 2; // −1 … +1
  const dy = (lerpY - 0.5) * 2;

  // Only apply while hero is even partially in view
  const heroVisible = sy < heroH() * 1.15;

  layers.forEach(({ el, scroll, mouse }) => {
    // scrollY * scroll  →  higher value keeps layer "fixed" (background)
    // low scroll value  →  layer exits viewport faster (foreground)
    const scrollShift = sy * scroll;

    if (isMobile() || !heroVisible) {
      el.style.transform = `translateY(${scrollShift.toFixed(1)}px)`;
      return;
    }

    const mx = dx * M_RANGE * mouse;
    const my = dy * M_RANGE * mouse * 0.45;
    el.style.transform =
      `translate(${mx.toFixed(2)}px, ${(scrollShift + my).toFixed(2)}px)`;
  });
})();

/* ── 4. Scroll reveal ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── 5. Photo break scroll parallax ── */
const photoBreakBg = document.getElementById('photoBreakBg');
if (photoBreakBg) {
  const section = photoBreakBg.closest('.photo-break');
  window.addEventListener('scroll', () => {
    if (isMobile() || !section) return;
    const rect = section.getBoundingClientRect();
    const vh   = window.innerHeight;
    if (rect.bottom < 0 || rect.top > vh) return;
    const progress = (vh - rect.top) / (vh + rect.height);
    photoBreakBg.style.transform =
      `translateY(${((progress - 0.5) * -70).toFixed(2)}px)`;
  }, { passive: true });
}

/* ── 6. Counter animation ── */
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
let glowX = 0, glowY = 0, gmX = 0, gmY = 0, glowRaf = null;

if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    gmX = e.clientX; gmY = e.clientY;
    cursorGlow.style.opacity = '1';
    if (!glowRaf) glowRaf = requestAnimationFrame(tickGlow);
  }, { passive: true });
  document.addEventListener('mouseleave', () => { cursorGlow.style.opacity = '0'; });
  function tickGlow() {
    glowX += (gmX - glowX) * 0.1;
    glowY += (gmY - glowY) * 0.1;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top  = glowY + 'px';
    glowRaf = requestAnimationFrame(tickGlow);
  }
}

/* ── 8. Interior horizontal drag scroll ── */
const track = document.getElementById('interiorTrack');
if (track) {
  let isDown = false, startX = 0, scrollLeft = 0;
  const endDrag = () => { isDown = false; track.classList.remove('dragging'); };
  track.addEventListener('mousedown', e => {
    isDown = true; track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX) * 1.4;
  });
  track.addEventListener('mouseup', endDrag);
  track.addEventListener('mouseleave', endDrag);
  track.addEventListener('touchstart', e => {
    startX = e.touches[0].pageX; scrollLeft = track.scrollLeft;
  }, { passive: true });
  track.addEventListener('touchmove', e => {
    track.scrollLeft = scrollLeft - (e.touches[0].pageX - startX);
  }, { passive: true });
}

/* ── 9. Active nav highlight ── */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');
sections.forEach(s => {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      const id = entries[0].target.id;
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--cream)' : '';
      });
    }
  }, { rootMargin: '-40% 0px -50% 0px' }).observe(s);
});

/* ── 10. Scroll-cue fade ── */
const scrollCue = document.getElementById('scrollCue');
window.addEventListener('scroll', () => {
  if (scrollCue) scrollCue.style.opacity = Math.max(0, 1 - window.scrollY / 180);
}, { passive: true });

/* ── 11. Atmospheric particles ── */
class Particles {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d');
    this.pts    = [];
    this.resize();
    this.init();
    window.addEventListener('resize', () => { this.resize(); this.init(); }, { passive: true });
    this.tick();
  }
  resize() {
    this.canvas.width  = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }
  spawn(anywhere) {
    return {
      x:       Math.random() * this.canvas.width,
      y:       anywhere ? Math.random() * this.canvas.height : this.canvas.height + 4,
      r:       0.35 + Math.random() * 1.1,
      vx:      (Math.random() - 0.5) * 0.18,
      vy:      -(0.10 + Math.random() * 0.28),
      alpha:   0.05 + Math.random() * 0.20,
      life:    0,
      maxLife: 200 + Math.random() * 280,
    };
  }
  init() {
    const count = Math.floor(this.canvas.width * this.canvas.height / 13000);
    this.pts = Array.from({ length: count }, () => this.spawn(true));
  }
  tick() {
    requestAnimationFrame(() => this.tick());
    if (window.scrollY > this.canvas.offsetHeight * 1.1) return;
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = this.pts.length - 1; i >= 0; i--) {
      const p = this.pts[i];
      p.x += p.vx; p.y += p.vy; p.life++;
      const t    = p.life / p.maxLife;
      const fade = t < 0.15 ? t / 0.15 : t > 0.75 ? 1 - (t - 0.75) / 0.25 : 1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,228,215,${(p.alpha * fade).toFixed(3)})`;
      ctx.fill();
      if (p.life >= p.maxLife || p.y < -4) this.pts[i] = this.spawn(false);
    }
  }
}

const particleCanvas = document.getElementById('heroParticles');
if (particleCanvas && !isMobile()) new Particles(particleCanvas);

/* ── 12. Smooth anchor scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id  = a.getAttribute('href').slice(1);
    const tgt = document.getElementById(id);
    if (!tgt) return;
    e.preventDefault();
    window.scrollTo({ top: Math.max(0, tgt.getBoundingClientRect().top + window.scrollY - 72), behavior: 'smooth' });
  });
});

/* ── 13. Booking form ── */
const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

if (bookingForm) {
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const shake   = el => {
    el.style.borderColor = 'var(--orange-lt)';
    el.focus();
    el.addEventListener('input', () => { el.style.borderColor = ''; }, { once: true });
  };

  bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    const name  = bookingForm.querySelector('#bName');
    const email = bookingForm.querySelector('#bEmail');
    const from  = bookingForm.querySelector('#bFrom');

    if (!name.value.trim())         { shake(name);  return; }
    if (!emailRe.test(email.value)) { shake(email); return; }
    if (!from.value)                { shake(from);  return; }

    const btn     = bookingForm.querySelector('button[type="submit"]');
    const btnText = btn.querySelector('.btn__text');
    btn.disabled  = true;
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
