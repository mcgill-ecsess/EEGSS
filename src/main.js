import './style.css'

// ===================================
// MOBILE MENU FUNCTIONALITY
// ===================================

const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

if (mobileMenuBtn && mobileMenu) {
  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      // Animate menu items
      setTimeout(() => {
        mobileMenu.classList.add('animate-slide-down');
      }, 10);
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('animate-slide-down');
    }
  });

  // Close mobile menu when clicking on a link
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('animate-slide-down');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('animate-slide-down');
      }
    }
  });
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Don't prevent default for empty href or just "#"
    if (href === '#' || href === '') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      const navHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = target.offsetTop - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

let lastScrollTop = 0;
const header = document.querySelector('header');
const nav = document.querySelector('.glass-nav');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Add shadow on scroll
  if (scrollTop > 20) {
    nav?.classList.add('shadow-lg');
  } else {
    nav?.classList.remove('shadow-lg');
  }
  
  lastScrollTop = scrollTop;
}, { passive: true });

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Optional: stop observing after animation
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.animate-fade-in-up, .animate-on-scroll').forEach((el) => {
  observer.observe(el);
});

// ===================================
// RESOURCE CARDS TILT EFFECT (SUBTLE)
// ===================================

const resourceCards = document.querySelectorAll('.resource-card');

resourceCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===================================
// PARALLAX EFFECT FOR BACKGROUND BLOBS
// ===================================

const backgroundBlobs = document.querySelectorAll('.fixed .absolute');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  
  backgroundBlobs.forEach((blob, index) => {
    const speed = (index + 1) * 0.1;
    const yPos = -(scrolled * speed);
    blob.style.transform = `translateY(${yPos}px)`;
  });
}, { passive: true });

// ===================================
// LOADING STATE MANAGEMENT
// ===================================

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Trigger animations for elements in viewport
  const elementsInView = document.querySelectorAll('.animate-fade-in-up');
  elementsInView.forEach((el, index) => {
    setTimeout(() => {
      el.style.animationDelay = `${index * 0.1}s`;
    }, 100);
  });
});

// ===================================
// PERFORMANCE: DEBOUNCE UTILITY
// ===================================

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced resize handler
const handleResize = debounce(() => {
  // Add any resize-specific logic here
  console.log('Window resized');
}, 250);

window.addEventListener('resize', handleResize);

// ===================================
// KEYBOARD NAVIGATION IMPROVEMENTS
// ===================================

// Trap focus in mobile menu when open
const trapFocusInMobileMenu = (e) => {
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    const focusableElements = mobileMenu.querySelectorAll('a[href], button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
    
    // Close menu on Escape
    if (e.key === 'Escape') {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn?.focus();
    }
  }
};

document.addEventListener('keydown', trapFocusInMobileMenu);

// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log(
  '%cEEGSS Website',
  'color: #3e7bd8; font-size: 24px; font-weight: bold;'
);
console.log(
  '%cBuilt with Vite + TailwindCSS',
  'color: #6092de; font-size: 14px;'
);
console.log(
  '%cMcGill ECE Graduate Society',
  'color: #82aae5; font-size: 12px;'
);

// ===================================
// EXPORT FOR TESTING (IF NEEDED)
// ===================================

export { debounce, observer };