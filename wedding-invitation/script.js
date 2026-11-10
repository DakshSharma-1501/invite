/**
 * Royal Hindu Wedding Invitation - Interactive Preview Script
 * Daksh Sharma & Aadrika Goswami
 */

let currentZoom = 0.85;
const minZoom = 0.4;
const maxZoom = 1.3;

function applyZoom() {
  document.documentElement.style.setProperty('--preview-scale', currentZoom);
  const label = document.getElementById('zoomLabel');
  if (label) {
    label.textContent = `${Math.round(currentZoom * 100)}%`;
  }
}

function adjustZoom(delta) {
  currentZoom = Math.min(maxZoom, Math.max(minZoom, currentZoom + delta));
  applyZoom();
}

function resetZoom() {
  currentZoom = 0.85;
  applyZoom();
}

function scrollToPage(pageNum) {
  const target = document.getElementById(`cardWrapper${pageNum}`);
  if (target) {
    const toolbarHeight = document.getElementById('previewToolbar')?.offsetHeight || 60;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - toolbarHeight - 20;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Update active pill
    document.querySelectorAll('.nav-pill').forEach((pill, idx) => {
      pill.classList.toggle('active', idx === pageNum - 1);
    });
  }
}

// Track scrolling to update navigation pills
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 200;
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById(`cardWrapper${i}`);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-pill').forEach((pill, idx) => {
          pill.classList.toggle('active', idx === i - 1);
        });
        break;
      }
    }
  }
}, { passive: true });

// Listen for print event
window.addEventListener('beforeprint', () => {
  console.log('Preparing luxury A4 three-page wedding invitation for print...');
});

window.addEventListener('afterprint', () => {
  console.log('Print dialog closed.');
});

// Fit-to-width on initial load if screen is small
window.addEventListener('DOMContentLoaded', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 1200) {
    // 210mm in px at 96dpi is ~794px. Scale to fit screen with padding.
    const idealScale = Math.min(0.85, (screenWidth - 40) / 800);
    currentZoom = Math.max(0.4, Number(idealScale.toFixed(2)));
    applyZoom();
  }
});
