import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal-fade');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((el) => revealObserver.observe(el));

  // 2. Header Scroll Effect
  const header = document.querySelector('.header-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 3. Theme Toggle (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = themeToggleBtn?.querySelector('.sun-icon') as HTMLElement;
  const moonIcon = themeToggleBtn?.querySelector('.moon-icon') as HTMLElement;

  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = (theme: 'dark' | 'light') => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    } else {
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    }
  };

  // Initialize Theme
  setTheme(getPreferredTheme() as 'dark' | 'light');

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // 4. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  mobileToggle?.addEventListener('click', () => {
    navLinksContainer?.classList.toggle('open');
    mobileToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer?.classList.remove('open');
      mobileToggle?.classList.remove('active');
    });
  });

  // 5. Active Section Indicator on Scroll
  const sections = document.querySelectorAll('section');
  const navObserverOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies center of screen
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => navObserver.observe(section));
});
