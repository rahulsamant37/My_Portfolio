function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Text animation
const dynamicText = document.querySelector("#dynamic-text");
const words = ["I'm Rahul Samant", "I'm a Data Scientist", "I'm an AI Engineer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;



function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
      dynamicText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
  } else {
      dynamicText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => {
          isDeleting = true;
      }, 1500);
  } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
  }

  const typingSpeed = isDeleting ? 100 : 200;
  setTimeout(typeEffect, typingSpeed);
}

// Start the animation when page loads
document.addEventListener('DOMContentLoaded', typeEffect);

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".achievements-container");
    const items = Array.from(container.children); // Initial items in the container

    // Clone items to create an illusion of infinite scroll
    items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
    });

    const scrollSpeed = 1; // Adjust scroll speed

    function infiniteScroll() {
        if (container.scrollLeft >= container.scrollWidth / 2) {
            // Reset to the beginning, but visually seamless
            container.scrollLeft = 0;
        }
        container.scrollLeft += scrollSpeed;
        requestAnimationFrame(infiniteScroll); // Continue animation
    }

    // Start the scroll animation
    infiniteScroll();
});
