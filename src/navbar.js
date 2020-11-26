const navBar = () => {
  const content = document.getElementById('content');
  content.setAttribute('class', 'container');

  const navSection = document.createElement('div');
  content.appendChild(navSection);
  navSection.setAttribute('class', 'nav-section');

  const navItems = document.createElement('div');
  navSection.appendChild(navItems);
  navItems.setAttribute('class', 'nav-items');

  const mainLogo = document.createElement('div');
  navItems.appendChild(mainLogo);
  mainLogo.setAttribute('class', 'main-logo');

  const logoText = document.createElement('a');
  logoText.innerHTML = 'The Global Cuisine';
  mainLogo.appendChild(logoText);

  const navRightSide = document.createElement('div');
  navRightSide.setAttribute('class', 'nav-Right-Side');
  navItems.appendChild(navRightSide);

  const navTabs = () => {
    const navTabItems = [
      {
        className: 'Home',
        contentID: 'homeTab',
        contentText: 'Home',
      },
      {
        className: 'Menu',
        contentID: 'menuTab',
        contentText: 'Menu',
      },
      {
        className: 'About',
        contentID: 'aboutTab',
        contentText: 'About',
      },
      {
        className: 'Contact',
        contentID: 'contactTab',
        contentText: 'Contact',
      },
    ];

    for (let i = 0; i < navTabItems.length; i += 1) {
      const navRightTab = document.createElement('div');
      navRightTab.setAttribute('class', `${navTabItems[i].className}`);
      const navRightTabsText = document.createElement('a');
      navRightTabsText.setAttribute('id', `${navTabItems[i].contentID}`);
      navRightTabsText.innerHTML = `${navTabItems[i].contentText}`;
      navRightTab.appendChild(navRightTabsText);
      navRightSide.appendChild(navRightTab);
    }
  };
  navTabs();
};

export default navBar;
