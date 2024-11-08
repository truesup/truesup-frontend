// linkedIn is not working yet
const linkedInBtn = document.querySelector('.linkedin-button');
linkedInBtn.addEventListener('click', () => {
  alert('it`s not working yet, sorry');
});

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
