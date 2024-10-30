

// Function to Move the Logo to the Right
const logo = document.querySelector('.logo img');
logo.addEventListener('touch', () => {
  logo.style.transform = 'translateX(250px)'; 
});

// Function for Centered Image Viewer on Mobile
const images = document.querySelectorAll('section img'); // Select all images in sections
const imageViewer = document.createElement('div'); // Image viewer overlay
imageViewer.classList.add('image-viewer');
document.body.appendChild(imageViewer);

images.forEach((img) => {
  img.addEventListener('click', () => {
    const clone = img.cloneNode(); // Clone clicked image
    imageViewer.innerHTML = ''; // Clear any previous image
    imageViewer.appendChild(clone); // Show new image in viewer
    imageViewer.classList.add('active'); // Display the image viewer
  });
});

// Hide Image Viewer on Click
imageViewer.addEventListener('click', () => {
  imageViewer.classList.remove('active'); // Hide viewer on click
});
// Sticky Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#222'; // Darken navbar on scroll
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });
  
  // Responsive Navbar Toggle for Mobile
  const toggleButton = document.createElement('div');
  toggleButton.className = 'toggle-button';
  toggleButton.innerHTML = '&#9776;'; // Hamburger icon
  document.querySelector('nav').prepend(toggleButton);
  
  toggleButton.addEventListener('click', () => {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('show'); // Toggle visibility
  });
  
  // Scroll-to-Top Button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.className = 'scroll-to-top';
  scrollToTopButton.textContent = '↑ Top';
  document.body.appendChild(scrollToTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.add('show'); // Show button on scroll
    } else {
      scrollToTopButton.classList.remove('show'); // Hide button at top
    }
  });
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Image Carousel for Projects
  const carouselImages = document.querySelectorAll('.carousel img');
  let currentImageIndex = 0;
  
  const prevButton = document.createElement('button');
  const nextButton = document.createElement('button');
  prevButton.textContent = '❮';
  nextButton.textContent = '❯';
  
  const carouselContainer = document.querySelector('.carousel');
  carouselContainer.appendChild(prevButton);
  carouselContainer.appendChild(nextButton);
  
  function updateCarousel() {
    const offset = -currentImageIndex * 100; // Move to the current image
    carouselImages.forEach((img) => {
      img.style.transform = `translateX(${offset}%)`;
    });
  }
  
  prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
  });
  
  nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    updateCarousel();
  });

  //reveal in js section
  const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const scrollPosition = window.scrollY + window.innerHeight;
  
  revealElements.forEach((el) => {
    if (scrollPosition > el.offsetTop) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
