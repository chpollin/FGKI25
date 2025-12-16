/* ==========================================================================
   FGKI25 - Main Application JavaScript
   Theme, Scroll Tracking, Navigation, Audio Player, Interactions
   ========================================================================== */

// ==========================================================================
// State Management
// ==========================================================================

const state = {
  currentChapter: null,
  scrollProgress: 0,
  theme: 'dark',
  audioPlayerVisible: false,
  audioPlayerMinimized: false,
  mobileMenuOpen: false
};

// ==========================================================================
// Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollTracking();
  initChapterNavigation();
  initMobileMenu();
  initAudioPlayer();
  initCopyButtons();
  initSmoothScroll();
  initKeyboardNavigation();

  // Check for hash in URL on load
  if (window.location.hash) {
    const targetId = window.location.hash.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
});

// ==========================================================================
// Theme Management
// ==========================================================================

function initTheme() {
  // Check for saved preference
  const saved = localStorage.getItem('fgki25-theme');

  // Check for system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set theme
  state.theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(state.theme);

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('fgki25-theme')) {
      state.theme = e.matches ? 'dark' : 'light';
      applyTheme(state.theme);
    }
  });

  // Theme toggle button
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(state.theme);
  localStorage.setItem('fgki25-theme', state.theme);
}

// ==========================================================================
// Scroll Tracking & Progress Bar
// ==========================================================================

function initScrollTracking() {
  const chapters = document.querySelectorAll('.chapter');
  const progressBar = document.querySelector('.progress-bar');

  if (!chapters.length) return;

  // Intersection Observer for chapter tracking
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCurrentChapter(entry.target.id);
      }
    });
  }, observerOptions);

  chapters.forEach(chapter => observer.observe(chapter));

  // Scroll progress
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollProgress(progressBar);
        checkAudioPlayerVisibility();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function updateScrollProgress(progressBar) {
  if (!progressBar) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  state.scrollProgress = Math.min((scrollTop / docHeight) * 100, 100);
  progressBar.style.width = `${state.scrollProgress}%`;
  progressBar.setAttribute('aria-valuenow', Math.round(state.scrollProgress));
}

function updateCurrentChapter(chapterId) {
  if (state.currentChapter === chapterId) return;

  state.currentChapter = chapterId;

  // Update navigation active state
  document.querySelectorAll('.chapter-nav-item').forEach(item => {
    const isActive = item.getAttribute('data-chapter') === chapterId;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-current', isActive ? 'true' : 'false');
  });

  // Update URL without scroll
  if (chapterId && chapterId !== 'intro') {
    history.replaceState(null, '', `#${chapterId}`);
  } else {
    history.replaceState(null, '', window.location.pathname);
  }

  // Scroll active nav item into view
  const activeNavItem = document.querySelector(`.chapter-nav-item[data-chapter="${chapterId}"]`);
  if (activeNavItem) {
    activeNavItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

// ==========================================================================
// Chapter Navigation
// ==========================================================================

function initChapterNavigation() {
  const navItems = document.querySelectorAll('.chapter-nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu if open
        if (state.mobileMenuOpen) {
          closeMobileMenu();
        }
      }
    });
  });
}

// ==========================================================================
// Mobile Menu
// ==========================================================================

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const chapterNav = document.querySelector('.chapter-nav');

  if (!menuToggle || !chapterNav) return;

  menuToggle.addEventListener('click', () => {
    if (state.mobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (state.mobileMenuOpen &&
        !e.target.closest('.chapter-nav') &&
        !e.target.closest('.menu-toggle')) {
      closeMobileMenu();
    }
  });
}

function openMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const chapterNav = document.querySelector('.chapter-nav');

  state.mobileMenuOpen = true;
  chapterNav.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const chapterNav = document.querySelector('.chapter-nav');

  state.mobileMenuOpen = false;
  chapterNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

// ==========================================================================
// Audio Player
// ==========================================================================

function initAudioPlayer() {
  const audioPlayer = document.querySelector('.audio-player');
  const audioToggle = document.querySelector('.audio-toggle');

  if (!audioPlayer) return;

  // Toggle minimize
  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      state.audioPlayerMinimized = !state.audioPlayerMinimized;
      audioPlayer.classList.toggle('minimized', state.audioPlayerMinimized);
    });
  }
}

function checkAudioPlayerVisibility() {
  const audioPlayer = document.querySelector('.audio-player');
  if (!audioPlayer) return;

  const shouldShow = window.scrollY > 500;

  if (shouldShow && !state.audioPlayerVisible) {
    state.audioPlayerVisible = true;
    audioPlayer.classList.add('visible');
  }
}

// ==========================================================================
// Copy Buttons
// ==========================================================================

function initCopyButtons() {
  const copyButton = document.querySelector('.copy-citation');

  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const citationBox = copyButton.closest('.citation-box');
      const citationText = citationBox?.querySelector('code')?.textContent;

      if (citationText) {
        try {
          await navigator.clipboard.writeText(citationText);
          showCopyFeedback(copyButton, 'Kopiert!');
        } catch (err) {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = citationText;
          textArea.style.position = 'fixed';
          textArea.style.left = '-9999px';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          showCopyFeedback(copyButton, 'Kopiert!');
        }
      }
    });
  }
}

function showCopyFeedback(button, message) {
  const originalHTML = button.innerHTML;
  button.innerHTML = `<span style="font-size: 12px">${message}</span>`;
  button.disabled = true;

  setTimeout(() => {
    button.innerHTML = originalHTML;
    button.disabled = false;
  }, 2000);
}

// ==========================================================================
// Smooth Scroll
// ==========================================================================

function initSmoothScroll() {
  // Handle all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ==========================================================================
// Keyboard Navigation
// ==========================================================================

function initKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // Skip if user is typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const chapters = Array.from(document.querySelectorAll('.chapter'));
    const currentIndex = chapters.findIndex(ch => ch.id === state.currentChapter);

    switch(e.key) {
      case 'ArrowDown':
      case 'j':
        // Next chapter
        if (currentIndex < chapters.length - 1) {
          e.preventDefault();
          chapters[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        }
        break;

      case 'ArrowUp':
      case 'k':
        // Previous chapter
        if (currentIndex > 0) {
          e.preventDefault();
          chapters[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
        break;

      case 'Home':
        // First chapter
        e.preventDefault();
        chapters[0].scrollIntoView({ behavior: 'smooth' });
        break;

      case 'End':
        // Last chapter
        e.preventDefault();
        chapters[chapters.length - 1].scrollIntoView({ behavior: 'smooth' });
        break;

      case 't':
        // Toggle theme
        if (!e.ctrlKey && !e.metaKey) {
          toggleTheme();
        }
        break;
    }
  });
}

// ==========================================================================
// Visualization Interactions (AJI Diagram, Problems)
// ==========================================================================

// Problem details data
const problemDetails = {
  // Hard Problems
  alignment: {
    name: 'Alignment-Problem',
    description: 'Wie stellen wir sicher, dass die Systeme tun, was wir wollen, nicht was wir sagen?',
    type: 'hard'
  },
  duck: {
    name: 'Duck-Problem',
    description: 'Ob es Intelligenz ist, wenn es wie Intelligenz aussieht und klingt. Wir können nicht unterscheiden, ob ein System "wirklich" versteht oder nur so tut.',
    type: 'hard'
  },
  blackbox: {
    name: 'Black-Box-Problem',
    description: 'Wir verstehen nicht, wie die Systeme zu ihren Outputs kommen. Interpretability-Forschung macht Fortschritte, aber die Grundsituation bleibt.',
    type: 'hard'
  },
  responsible: {
    name: 'Verantwortungsvolle Nutzung',
    description: 'Jede Nutzung legitimiert das System und seine Produzenten. Es gibt keine neutrale Position.',
    type: 'hard'
  },
  systemzwang: {
    name: 'Systemzwangs-Problem',
    description: 'Der wachsende Druck mitzumachen, auch wenn man skeptisch ist. Wer nicht adoptiert, fällt zurück.',
    type: 'hard'
  },
  kraenkung: {
    name: '4. Kränkung',
    description: 'Nach Kopernikus, Darwin und Freud zeigt die Maschine, dass auch Sprache, Kreativität und Reasoning simulierbar sind.',
    type: 'hard'
  },
  // Easy Problems
  kompetenz: {
    name: 'Kompetenzverfall',
    description: 'Was passiert mit den Fähigkeiten, die wir nicht mehr trainieren? Adressierbar durch Curriculum-Design.',
    type: 'easy'
  },
  expert: {
    name: 'Expert-in-the-Loop',
    description: 'Begrenzte Autonomie und notwendige menschliche Expertise. Adressierbar durch Ausbildung und Rollenklärung.',
    type: 'easy'
  },
  evaluation: {
    name: 'Evaluierungs-Problem',
    description: 'Die Maßstäbe versagen oder werden zu schnell obsolet. Adressierbar durch bessere Evaluationsmethoden.',
    type: 'easy'
  },
  kommunikation: {
    name: 'Kommunikationslücken',
    description: 'Die wachsende Distanz zwischen denen, die verstehen, und denen, die nutzen. Adressierbar durch Bildung.',
    type: 'easy'
  },
  attribution: {
    name: 'Attributions-Problem',
    description: 'Wer ist für generierte Inhalte verantwortlich? Adressierbar durch rechtliche und institutionelle Klärung.',
    type: 'easy'
  },
  integration: {
    name: 'Integrations-Problem',
    description: 'Wie fügt sich das in bestehende Workflows? Adressierbar durch Design und Organisationsentwicklung.',
    type: 'easy'
  },
  compute: {
    name: 'Compute-Problem',
    description: 'Wer hat Zugang zu Compute und wer nicht? Adressierbar durch Policy und Ressourcenverteilung.',
    type: 'easy'
  }
};

// Initialize problem item interactions
document.querySelectorAll('.problem-item').forEach(item => {
  item.addEventListener('click', () => {
    const problemId = item.getAttribute('data-problem');
    const detail = problemDetails[problemId];
    if (detail) {
      showProblemModal(detail);
    }
  });
});

function showProblemModal(detail) {
  // Simple alert for now - could be enhanced with a modal
  alert(`${detail.name}\n\n${detail.description}`);
}

// ==========================================================================
// Utility Functions
// ==========================================================================

// Debounce function for performance
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

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
