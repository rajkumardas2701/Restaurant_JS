/* eslint-disable no-plusplus, no-return-assign, no-use-before-define,
import/extensions, implicit-arrow-linebreak, operator-linebreak  */
import navBar from './navbar.js';
import home from './home.js';
import footer from './footer.js';
import menu from './menu.js';


const component = () => {
  navBar();
  // home();
  menu();

  footer();
};

document.body.appendChild(component());
