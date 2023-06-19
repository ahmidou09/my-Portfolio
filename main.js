const nav = document.querySelector('.nav');
const toggelBtn = document.querySelector('.toggel-btn');
const navItem = document.querySelectorAll('.nav-item');
const menuIcon = document.querySelector('.menu-icon');

toggelBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-active');

  if (nav.classList.contains('nav-active')) {
    menuIcon.src = './img/icon/close-icon.svg';
  }

  if (!nav.classList.contains('nav-active')) {
    menuIcon.src = './img/icon/menu.svg';
  }
});

navItem.forEach((btn) => {
  btn.addEventListener('click', () => {
    nav.classList.remove('nav-active');

    if (nav.classList.contains('nav-active')) {
      menuIcon.src = './img/icon/close-icon.svg';
    }

    if (!nav.classList.contains('nav-active')) {
      menuIcon.src = './img/icon/menu.svg';
    }
  });
});
