document.addEventListener('DOMContentLoaded', () => {
    // Animate achievements on scroll
    const achievementBoxes = document.querySelectorAll('.achievement-box');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    achievementBoxes.forEach(box => {
      box.style.opacity = '0';
      box.style.transform = 'translateY(50px)';
      box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(box);
    });
  });

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
