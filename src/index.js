/* eslint-disable no-plusplus, no-return-assign, no-use-before-define,
import/extensions, implicit-arrow-linebreak, operator-linebreak  */
import navBar from './navbar.js';
import home from './home.js';
import footer from './footer.js';


const component = () => {
  navBar();
  home();
  footer();
};

component();
