document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }
});
