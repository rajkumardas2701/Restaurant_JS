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
  // home();
  // menu();
  // about();
  contact();
  footer();
};

document.body.appendChild(component());
