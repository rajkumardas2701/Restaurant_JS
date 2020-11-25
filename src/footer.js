const footer = () => {
  const content = document.getElementById('content');

  const footer = document.createElement('footer');
  content.appendChild(footer);
  footer.setAttribute('class', 'footer');

  const footerTop = document.createElement('div');
  footerTop.setAttribute('class', 'footer-top');
  footer.appendChild(footerTop);

  const footerLeft = document.createElement('div');
  footerLeft.setAttribute('class', 'footer-Left');
  footerTop.appendChild(footerLeft);

  const leftItems = () => {
    const footerLeftHeader = document.createElement('h3');
    footerLeft.appendChild(footerLeftHeader);
    footerLeftHeader.innerHTML = 'RESTAURANT';

    const footerleftItems = ['About Us', 'Our Services', 'Contacts', 'Blog'];
    for (let i = 0; i < footerleftItems.length; i += 1) {
      const footerItem = document.createElement('li');
      footerItem.innerHTML = `${footerleftItems[i]}`;
      footerLeft.appendChild(footerItem);
    }
  };

  const footerCenter = document.createElement('div');
  footerCenter.setAttribute('class', 'footer-center');
  footerTop.appendChild(footerCenter);

  const centerItems = () => {
    const icon = ['fab fa-facebook-square', 'fab fa-instagram-square', 'fab fa-twitter-square'];
    const footerCenterHeader = document.createElement('h3');
    footerCenter.appendChild(footerCenterHeader);
    footerCenterHeader.innerHTML = 'CONTACT';

    const contact = document.createElement('p');
    footerCenter.appendChild(contact);
    contact.innerHTML = 'Email: contact@globalcuisine.com </br> Phone: +18001002222';

    const iconSection = document.createElement('div');
    footerCenter.appendChild(iconSection);

    for (let i = 0; i < icon.length; i += 1) {
      const centerIcon = document.createElement('i');
      centerIcon.setAttribute('class', `${icon[i]} icons`);
      iconSection.appendChild(centerIcon);
    }
  };

  const footerRight = document.createElement('div');
  footerRight.setAttribute('class', 'footer-right');
  footerTop.appendChild(footerRight);

  const rightItems = () => {
    const footerRightHeader = document.createElement('h3');
    footerRight.appendChild(footerRightHeader);
    footerRightHeader.innerHTML = 'ADDRESS';

    const add = document.createElement('p');
    footerRight.appendChild(add);
    add.innerHTML = '101 The Amazing Road <br> Premier Building <br> Manchester <br> 400106';
  };

  leftItems();
  centerItems();
  rightItems();

  const copyright = document.createElement('div');
  copyright.setAttribute('class', 'copyright');
  copyright.innerHTML = '© Copyright 2020 The Global Cuisine';
  footer.appendChild(copyright);
};

export default footer;