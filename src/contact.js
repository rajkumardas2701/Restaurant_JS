const contact = () => {
  const content = document.getElementById('content');
  const contactSection = document.createElement('div');
  contactSection.setAttribute('class', 'contact-section');
  content.appendChild(contactSection);

  const contactHeader = document.createElement('h1');
  contactSection.appendChild(contactHeader);
  contactHeader.innerHTML = 'Contact Us';

  const contactDesc = document.createElement('p');
  contactSection.appendChild(contactDesc);
  contactDesc.innerHTML = `Email: contact@globalcuisine.com <br>
  Phone: +18001002222`;

  const form = document.createElement('form');
  contactSection.appendChild(form);
  form.setAttribute('class', 'form-section');

  const contactDetails = () => {
    const details = [
      {
        className: 'name-input',
        labelName: 'name',
        inputType: 'text',
        labelContent: 'Name',
      },
      {
        className: 'email-input',
        labelName: 'email',
        inputType: 'email',
        labelContent: 'Email',
      },
    ];
    for (let i = 0; i < details.length; i += 1) {
      const formItem = document.createElement('div');
      form.appendChild(formItem);
      formItem.setAttribute('class', `${details[i].className}`);

      const formLabel = document.createElement('label');
      formLabel.setAttribute('for', `${details[i].labelName}`);
      formLabel.innerHTML = `${details[i].labelContent} : `;
      formItem.appendChild(formLabel);

      const formInput = document.createElement('input');
      formInput.setAttribute('type', `${details[i].inputType}`);
      formItem.appendChild(formInput);
    }
  };

  contactDetails();

  const msgLabel = document.createElement('label');
  msgLabel.innerHTML = '(Please provide your feedback below)';
  form.appendChild(msgLabel);
  const message = document.createElement('input');
  form.appendChild(message);


  const submit = document.createElement('button');
  form.appendChild(submit);
  submit.innerHTML = 'Submit';
};

export default contact;