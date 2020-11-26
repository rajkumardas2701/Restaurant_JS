/* eslint-disable no-plusplus, no-return-assign, no-use-before-define,
import/extensions, implicit-arrow-linebreak, operator-linebreak  */
import navBar from './navbar.js';
import home from './home.js';
import footer from './footer.js';
import menu from './menu.js';
import about from './about.js';
import contact from './contact.js';

const component = () => {
  navBar();
  home();
  menu();
  about();
  contact();
  const checkHomePage = document.querySelector('.hide-home-section');
  if (checkHomePage) {
    document.querySelector('.home-section').classList.remove('hide-home-section');
  }
  document.querySelector('.menu-section').classList.add('hide-menu-section');
  document.querySelector('.about-section').classList.add('hide-about-section');
  document.querySelector('.contact-section').classList.add('hide-contact-section');
  document.querySelector('#homeTab').classList.add('active-tab');


  document.getElementById('homeTab').addEventListener('click', () => {
    const checkHomeSection = document.querySelector('.hide-home-section');
    if (checkHomeSection) {
      document.querySelector('.home-section').classList.remove('hide-home-section');
    }
    document.querySelector('.menu-section').classList.add('hide-menu-section');
    document.querySelector('.about-section').classList.add('hide-about-section');
    document.querySelector('.contact-section').classList.add('hide-contact-section');
    document.querySelector('#homeTab').classList.add('active-tab');
    document.querySelector('#menuTab').classList.remove('active-tab');
    document.querySelector('#contactTab').classList.remove('active-tab');
    document.querySelector('#aboutTab').classList.remove('active-tab');
  });

  document.getElementById('menuTab').addEventListener('click', () => {
    const checkMenuSection = document.querySelector('.hide-menu-section');
    if (checkMenuSection) {
      document.querySelector('.menu-section').classList.remove('hide-menu-section');
    }
    document.querySelector('.home-section').classList.add('hide-home-section');
    document.querySelector('.about-section').classList.add('hide-about-section');
    document.querySelector('.contact-section').classList.add('hide-contact-section');
    document.querySelector('#homeTab').classList.remove('active-tab');
    document.querySelector('#menuTab').classList.add('active-tab');
    document.querySelector('#contactTab').classList.remove('active-tab');
    document.querySelector('#aboutTab').classList.remove('active-tab');
  });
  document.getElementById('aboutTab').addEventListener('click', () => {
    const checkAboutSection = document.querySelector('.hide-about-section');
    if (checkAboutSection) {
      document.querySelector('.about-section').classList.remove('hide-about-section');
    }
    document.querySelector('.menu-section').classList.add('hide-menu-section');
    document.querySelector('.home-section').classList.add('hide-home-section');
    document.querySelector('.contact-section').classList.add('hide-contact-section');
    document.querySelector('#homeTab').classList.remove('active-tab');
    document.querySelector('#menuTab').classList.remove('active-tab');
    document.querySelector('#contactTab').classList.remove('active-tab');
    document.querySelector('#aboutTab').classList.add('active-tab');
  });

  document.getElementById('contactTab').addEventListener('click', () => {
    const checkContactSection = document.querySelector('.hide-contact-section');
    if (checkContactSection) {
      document.querySelector('.contact-section').classList.remove('hide-contact-section');
    }
    document.querySelector('.menu-section').classList.add('hide-menu-section');
    document.querySelector('.about-section').classList.add('hide-about-section');
    document.querySelector('.home-section').classList.add('hide-home-section');
    document.querySelector('#homeTab').classList.remove('active-tab');
    document.querySelector('#menuTab').classList.remove('active-tab');
    document.querySelector('#contactTab').classList.add('active-tab');
    document.querySelector('#aboutTab').classList.remove('active-tab');
  });
  footer();
};

component();
