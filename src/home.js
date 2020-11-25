const home = () => {
  const content = document.getElementById('content');

  const homeSection = document.createElement('div');
  homeSection.setAttribute('class', 'home-section');
  content.appendChild(homeSection);

  const welcome = document.createElement('h1');
  homeSection.appendChild(welcome);
  welcome.innerHTML = 'Welcome to Global Cuisine';

  const intro = document.createElement('h2');
  intro.innerHTML = 'We believe good food offer great smile';
  homeSection.appendChild(intro);
};

export default home;