const menu = () => {
  const content = document.getElementById('content');
  const menuSection = document.createElement('div');
  menuSection.setAttribute('class', 'menu-section');
  content.appendChild(menuSection);

  const menuItems = () => {
    const menuList = [{
      header: 'STARTERS',
      items: [{
        name: 'Dragon Chicken',
        price: '$2',
      },
      {
        name: 'Crispy Prawns Balls',
        price: '$3',
      },
      {
        name: 'Chicken Fry',
        price: '$3',
      },
      {
        name: 'Chicken 65',
        price: '$2',
      }],
    },
    {
      header: 'MAIN COURSE',
      items: [{
        name: 'Worli Style Mutton Curry',
        price: '$10',
      },
      {
        name: 'Jaipuri Chicken Curry',
        price: '$5',
      },
      {
        name: 'Maple Mustard-Glazed Chicken',
        price: '$6',
      },
      {
        name: 'Tawa Murg',
        price: '$7',
      }],
    },
    {
      header: 'DESSERT',
      items: [{
        name: 'Pecan Pie Cheesecake',
        price: '$3',
      },
      {
        name: 'Samoa Dessert Lasagna',
        price: '$5',
      },
      {
        name: 'Oreo Truffles',
        price: '$5',
      },
      {
        name: 'Chocolate Pudding',
        price: '$2',
      }],
    },
    {
      header: 'BEVERAGES',
      items: [{
        name: 'Hot Chocolate',
        price: '$2',
      },
      {
        name: 'Mocha Cashew Butter',
        price: '$3',
      },
      {
        name: 'Pink Lemonade',
        price: '$3',
      },
      {
        name: 'Irish Coffee',
        price: '$2',
      }],
    },
    ];

    for (let i = 0; i < menuList.length; i += 1) {
      const mealType = document.createElement('div');
      mealType.setAttribute('class', 'meal-type');
      const menuHeader = document.createElement('h2');
      menuHeader.setAttribute('class', 'menu-header');
      mealType.appendChild(menuHeader);
      menuHeader.innerHTML = `< = = = = = = ${menuList[i].header} = = = = = = >`;
      menuSection.appendChild(mealType);
      for (let j = 0; j < menuList[i].items.length; j += 1) {
        const meal = document.createElement('div');
        meal.setAttribute('class', 'meal-item');
        const menuItem = document.createElement('p');
        const menuPrice = document.createElement('p');
        menuItem.setAttribute('class', 'menu-item');
        menuPrice.setAttribute('class', 'menu-price');
        meal.appendChild(menuItem);
        meal.appendChild(menuPrice);
        menuItem.innerHTML = `${menuList[i].items[j].name}`;
        menuPrice.innerHTML = `${menuList[i].items[j].price}`;
        mealType.appendChild(meal);
      }
    }
  };

  menuItems();
};

export default menu;