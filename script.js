// script.js
// GSAP powered scroll animations and micro-interactions
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Fade-in for sections
  gsap.utils.toArray('.section').forEach((section) => {
    gsap.from(section, {
      y: 30, opacity: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: section, start: 'top 85%' }
    });
  });

  // Hero entrance
  gsap.from('.hero-inner .hero-text', { x: -20, opacity: 0, duration: 0.9, delay: 0.15, ease: 'power3.out' });
  gsap.from('.hero-card', { x: 20, opacity: 0, duration: 0.9, delay: 0.25, ease: 'power3.out' });

  // Timeline items reveal with stagger
  gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
      y: 20, opacity: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: item, start: 'top 90%' , toggleActions: 'play none none none' },
      delay: i * 0.05
    });
  });

  // Projects hover tilt subtle
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (py - 0.5) * 6; // rotateX
      const ry = (px - 0.5) * -6; // rotateY
      gsap.to(card, { rotationX: rx, rotationY: ry, duration: 0.4, ease: 'power2' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5, ease: 'power2' });
    });
  });

  // Animate skill bars using data-level attribute
  document.querySelectorAll('.skill-bar').forEach((el) => {
    const level = parseInt(el.getAttribute('data-level')) || 60;
    const fill = el.querySelector('.fill');
    gsap.to(fill, {
      width: level + '%',
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' }
    });
  });

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        gsap.to(window, { scrollTo: {y: target, offsetY: 80}, duration: 0.8, ease: 'power2.out' });
      }
    });
  });

  // small parallax on hero deco
  const deco = document.querySelector('.hero-deco');
  if (deco) {
    gsap.to(deco, {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', scrub: true }
    });
  }
});
