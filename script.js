const heroBg = document.querySelector('.hero-bg');
const hero = document.querySelector('.hero');
const fadeSections = document.querySelectorAll('.fade-section');

/* Parallax + Hero Fade */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  heroBg.style.transform = `translateY(${scrollY * 0.25}px)`;

  hero.style.opacity = 1 - scrollY / 600;
});

/* Fade-In Sections */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

fadeSections.forEach(section => {
  observer.observe(section);
});