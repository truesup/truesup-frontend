// header menu
const menuLinks = document.querySelectorAll('.header-menu-link');

function updateCurrentMenuLink(event) {
  menuLinks.forEach((link) => link.classList.remove('is-current'));

  event.target.classList.add('is-current');

  const targetId = event.target.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  event.preventDefault();
}

menuLinks.forEach((link) => {
  link.addEventListener('click', updateCurrentMenuLink);
});

// portfolio cards flip for mobile
document.querySelectorAll('.portfolio-card-wrapper').forEach((card) => {
  card.addEventListener('click', () => {
    const flipCardInner = card.querySelector('.flip-card-inner');
    flipCardInner.classList.toggle('flipped');
  });
});

// burger menu
document.addEventListener('DOMContentLoaded', () => {
  const burgerMenuBtn = document.querySelector('.burger-menu-btn');
  const menuList = document.querySelector('.header-menu-list');

  burgerMenuBtn.addEventListener('click', () => {
    menuList.classList.toggle('open');
    burgerMenuBtn.classList.toggle('open');
  });
});

// experience section header change
function updateHeadingText() {
  const headingExperience = document.querySelector('.experience-title');
  const headingContact = document.querySelector('.contact-title');
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1279 && screenWidth > 1200) {
    headingExperience.textContent = 'EXPERIENCE';
    headingContact.textContent = 'CONNECT';
  } else {
    headingExperience.textContent = 'MY EXPERIENCE';
    headingContact.textContent = "LET'S CONNECT";
  }
}
updateHeadingText();
window.addEventListener('resize', updateHeadingText);

// emailJS
document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('nrnOequk6o8K9Xxrp');

  const form = document.getElementById('contactForm');
  const formBtn = document.querySelector('.form-button');
  const loader = document.querySelector('.loader');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    formBtn.classList.add('visually-hidden');
    loader.classList.remove('visually-hidden');

    const params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };

    emailjs.send('service_wtsaubt', 'template_1c8f5th', params).then(
      () => {
        alert('Message delievered');
        form.reset();
        formBtn.classList.remove('visually-hidden');
        loader.classList.add('visually-hidden');
      },
      () => {
        alert(`Sorry, your message wasn't delievered :(
An error occured!`);
        formBtn.classList.remove('visually-hidden');
        loader.classList.add('visually-hidden');
      }
    );
  });
});

// scroll animation (not available for mobile and laptop)
document.addEventListener('DOMContentLoaded', function () {
  const isMobile = window.innerWidth <= 599;
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  function animateOnScroll() {
    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight - 100) {
        element.classList.add('visible');
      }
    });
  }

  if (!isMobile) {
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  } else {
    animatedElements.forEach((element) => element.classList.add('visible'));
  }
});

import './index.html';
import './styles.css';
