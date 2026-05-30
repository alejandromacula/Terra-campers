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

/* ── 3. Mouse + scroll parallax (Slider Revolution style) ── */
const isMobile = () => window.innerWidth <= 768 ||
  window.matchMedia('(hover: none) and (pointer: coarse)').matches;

const hero = document.getElementById('inicio');
const heroH = () => hero ? hero.offsetHeight : window.innerHeight;

// Collect parallax layers
const parallaxLayers = [];
document.querySelectorAll('[data-depth]').forEach(el => {
  parallaxLayers.push({
    el,
    depth: parseFloat(el.dataset.depth),
    speed: parseFloat(el.dataset.speed || 0),
  });
});

// Lerp targets
let mouseX = 0.5, mouseY = 0.5;   // normalized 0–1
let lerpX = 0.5,  lerpY = 0.5;
let scrollY = 0;

// Mouse tracking (hero zone)
document.addEventListener('mousemove', e => {
  mouseX = e.clientX / window.innerWidth;
  mouseY = e.clientY / window.innerHeight;
}, { passive: true });

window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
}, { passive: true });

const LERP_FACTOR = 0.06;
const MOUSE_RANGE = 22; // max px shift from mouse at depth 1.0

function lerp(a, b, t) { return a + (b - a) * t; }

function tickParallax() {
  requestAnimationFrame(tickParallax);

  if (isMobile()) {
    // On mobile: only apply vertical scroll parallax, no mouse effect
    if (scrollY <= heroH() * 1.2) {
      parallaxLayers.forEach(({ el, speed }) => {
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }
    return;
  }

  // Smooth mouse lerp
  lerpX = lerp(lerpX, mouseX, LERP_FACTOR);
  lerpY = lerp(lerpY, mouseY, LERP_FACTOR);

  const dx = (lerpX - 0.5) * 2; // -1 to 1
  const dy = (lerpY - 0.5) * 2;

  parallaxLayers.forEach(({ el, speed, depth }) => {
    const scrollShift = scrollY * speed;
    const mx = dx * MOUSE_RANGE * depth;
    const my = dy * MOUSE_RANGE * depth * 0.55; // less vertical range

    if (scrollY <= heroH() * 1.2) {
      el.style.transform = `translate(${mx.toFixed(2)}px, ${(scrollShift + my).toFixed(2)}px)`;
    }
  });
}

tickParallax();

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
let glowMouseX = 0, glowMouseY = 0, glowX = 0, glowY = 0;
let glowRaf = null;

if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    glowMouseX = e.clientX;
    glowMouseY = e.clientY;
    cursorGlow.style.opacity = '1';
    if (!glowRaf) glowRaf = requestAnimationFrame(animateGlow);
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });

  function animateGlow() {
    glowX += (glowMouseX - glowX) * 0.1;
    glowY += (glowMouseY - glowY) * 0.1;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    glowRaf = requestAnimationFrame(animateGlow);
  }
}

/* ── 8. Interior horizontal drag scroll ── */
const track = document.getElementById('interiorTrack');
if (track) {
  let isDown = false, startX = 0, trackScrollLeft = 0;

  const endDrag = () => {
    isDown = false;
    track.classList.remove('dragging');
  };

  track.addEventListener('mousedown', e => {
    isDown = true;
    track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft;
    trackScrollLeft = track.scrollLeft;
  });
  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = trackScrollLeft - (x - startX) * 1.4;
  });
  track.addEventListener('mouseup', endDrag);
  track.addEventListener('mouseleave', endDrag);

  track.addEventListener('touchstart', e => {
    startX = e.touches[0].pageX;
    trackScrollLeft = track.scrollLeft;
  }, { passive: true });
  track.addEventListener('touchmove', e => {
    track.scrollLeft = trackScrollLeft - (e.touches[0].pageX - startX);
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
    e.target.querySelectorAll('.film-strip__track').forEach(t => {
      t.style.animationPlayState = e.isIntersecting ? 'running' : 'paused';
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

/* ── 14. Atmospheric particles ── */
class AtmosphericParticles {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.resize();
    this.init();
    window.addEventListener('resize', () => this.resize(), { passive: true });
    this.tick();
  }

  resize() {
    this.canvas.width  = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }

  init() {
    this.particles = [];
    const count = Math.floor((this.canvas.width * this.canvas.height) / 14000);
    for (let i = 0; i < count; i++) {
      this.particles.push(this.spawn(true));
    }
  }

  spawn(anywhere) {
    const x = Math.random() * this.canvas.width;
    const y = anywhere
      ? Math.random() * this.canvas.height
      : this.canvas.height + 4;
    return {
      x, y,
      r: 0.4 + Math.random() * 1.2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -(0.15 + Math.random() * 0.35),
      alpha: 0.05 + Math.random() * 0.25,
      life: 0,
      maxLife: 180 + Math.random() * 240,
    };
  }

  tick() {
    requestAnimationFrame(() => this.tick());

    // Only animate when hero is visible
    if (window.scrollY > this.canvas.offsetHeight * 1.1) return;

    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x  += p.vx;
      p.y  += p.vy;
      p.life++;

      const progress = p.life / p.maxLife;
      // Fade in then out
      const fade = progress < 0.15
        ? progress / 0.15
        : progress > 0.75
          ? 1 - (progress - 0.75) / 0.25
          : 1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(242,237,228,${(p.alpha * fade).toFixed(3)})`;
      ctx.fill();

      if (p.life >= p.maxLife || p.y < -4) {
        this.particles[i] = this.spawn(false);
      }
    }
  }
}

const particleCanvas = document.getElementById('heroParticles');
if (particleCanvas && !isMobile()) {
  new AtmosphericParticles(particleCanvas);
}

/* ── 15. Word-split hero title animation ── */
function wrapWords(el) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) textNodes.push(node);

  textNodes.forEach(tn => {
    const frag = document.createDocumentFragment();
    const words = tn.textContent.split(/(\s+)/);
    words.forEach(part => {
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
      } else if (part) {
        const span = document.createElement('span');
        span.className = 'word';
        const inner = document.createElement('span');
        inner.className = 'word__inner';
        inner.textContent = part;
        span.appendChild(inner);
        frag.appendChild(span);
      }
    });
    tn.parentNode.replaceChild(frag, tn);
  });
}

const heroTitle = document.getElementById('heroTitle');
if (heroTitle) {
  wrapWords(heroTitle);

  // Stagger the animation delay on each word
  heroTitle.querySelectorAll('.word__inner').forEach((w, i) => {
    w.style.animationDelay = `${0.15 + i * 0.12}s`;
  });
}

/* ── 16. Intro load animation class ── */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('loading');
});
