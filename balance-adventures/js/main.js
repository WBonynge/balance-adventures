/* ============================================================
   BALANCE ADVENTURES — main.js
   ============================================================ */

/* ── NAV scroll effect ────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Mobile nav ───────────────────────────────────────────── */
const burger   = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');
const mobileLinks = mobileNav.querySelectorAll('a');

burger.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  document.body.style.overflow = open ? 'hidden' : '';
  // Animate burger to X
  const spans = burger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    const spans = burger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  });
});

/* ── Scroll reveal ────────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));

/* ── Smooth scroll for anchor links ──────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── CTA button handler ───────────────────────────────────── */
// Replace the href values below with your Calendly link once set up
// e.g. https://calendly.com/balanceadventures/discovery-call
const CALENDLY_URL = 'mailto:info@balanceadventures.co.uk?subject=Balance Adventures — Expedition Enquiry';

document.querySelectorAll('[data-cta]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    window.open(CALENDLY_URL, '_blank');
  });
});
