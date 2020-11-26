(()=>{"use strict";(()=>{const e=document.getElementById("content");e.setAttribute("class","container");const t=document.createElement("div");e.appendChild(t),t.setAttribute("class","nav-section");const n=document.createElement("div");t.appendChild(n),n.setAttribute("class","nav-items");const c=document.createElement("div");n.appendChild(c),c.setAttribute("class","main-logo");const o=document.createElement("a");o.innerHTML="The Global Cuisine",c.appendChild(o);const a=document.createElement("div");a.setAttribute("class","nav-Right-Side"),n.appendChild(a),(()=>{const e=[{className:"Home",contentID:"homeTab",contentText:"Home"},{className:"Menu",contentID:"menuTab",contentText:"Menu"},{className:"About",contentID:"aboutTab",contentText:"About"},{className:"Contact",contentID:"contactTab",contentText:"Contact"}];for(let t=0;t<e.length;t+=1){const n=document.createElement("div");n.setAttribute("class",`${e[t].className}`);const c=document.createElement("a");c.setAttribute("id",`${e[t].contentID}`),c.innerHTML=`${e[t].contentText}`,n.appendChild(c),a.appendChild(n)}})()})(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","home-section"),e.appendChild(t);const n=document.createElement("h1");t.appendChild(n),n.innerHTML="Welcome to Global Cuisine";const c=document.createElement("h2");c.innerHTML="We believe good food offer great smile",t.appendChild(c)})(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","menu-section"),e.appendChild(t);const n=document.createElement("h1");n.innerHTML="Menu",t.appendChild(n),(()=>{const e=[{header:"STARTERS",items:[{name:"Dragon Chicken",price:"$2"},{name:"Crispy Prawns Balls",price:"$3"},{name:"Chicken Fry",price:"$3"},{name:"Chicken 65",price:"$2"}]},{header:"MAIN COURSE",items:[{name:"Worli Style Mutton Curry",price:"$10"},{name:"Jaipuri Chicken Curry",price:"$5"},{name:"Maple Mustard-Glazed Chicken",price:"$6"},{name:"Tawa Murg",price:"$7"}]},{header:"DESSERT",items:[{name:"Pecan Pie Cheesecake",price:"$3"},{name:"Samoa Dessert Lasagna",price:"$5"},{name:"Oreo Truffles",price:"$5"},{name:"Chocolate Pudding",price:"$2"}]},{header:"BEVERAGES",items:[{name:"Hot Chocolate",price:"$2"},{name:"Mocha Cashew Butter",price:"$3"},{name:"Pink Lemonade",price:"$3"},{name:"Irish Coffee",price:"$2"}]}];for(let n=0;n<e.length;n+=1){const c=document.createElement("div");c.setAttribute("class","meal-type");const o=document.createElement("h2");o.setAttribute("class","menu-header"),c.appendChild(o),o.innerHTML=`${e[n].header}`,t.appendChild(c);for(let t=0;t<e[n].items.length;t+=1){const o=document.createElement("div");o.setAttribute("class","meal-item");const a=document.createElement("p"),i=document.createElement("p");a.setAttribute("class","menu-item"),i.setAttribute("class","menu-price"),o.appendChild(a),o.appendChild(i),a.innerHTML=`${e[n].items[t].name}`,i.innerHTML=`${e[n].items[t].price}`,c.appendChild(o)}}})()})(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","about-section"),e.appendChild(t);const n=document.createElement("h1");t.appendChild(n),n.innerHTML="About Us";const c=document.createElement("p");t.appendChild(c),c.innerHTML="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem\n  <br>\n  <br>\n\n  ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu\n  <br>\n  <br>\n\n  - Sr. Chef John Doe"})(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","contact-section"),e.appendChild(t);const n=document.createElement("h1");t.appendChild(n),n.innerHTML="Contact Us";const c=document.createElement("p");t.appendChild(c),c.innerHTML="Email: contact@globalcuisine.com <br>\n  Phone: +18001002222";const o=document.createElement("form");t.appendChild(o),o.setAttribute("class","form-section"),(()=>{const e=[{className:"name-input",labelName:"name",inputType:"text",labelContent:"Name"},{className:"email-input",labelName:"email",inputType:"email",labelContent:"Email"}];for(let t=0;t<e.length;t+=1){const n=document.createElement("div");o.appendChild(n),n.setAttribute("class",`${e[t].className}`);const c=document.createElement("label");c.setAttribute("for",`${e[t].labelName}`),c.innerHTML=`${e[t].labelContent} : `,n.appendChild(c);const a=document.createElement("input");a.setAttribute("type",`${e[t].inputType}`),n.appendChild(a)}})();const a=document.createElement("label");a.innerHTML="(Please provide your feedback below)",o.appendChild(a);const i=document.createElement("input");o.appendChild(i);const s=document.createElement("button");o.appendChild(s),s.innerHTML="Submit"})(),document.querySelector(".hide-home-section")&&document.querySelector(".home-section").classList.remove("hide-home-section"),document.querySelector(".menu-section").classList.add("hide-menu-section"),document.querySelector(".about-section").classList.add("hide-about-section"),document.querySelector(".contact-section").classList.add("hide-contact-section"),document.querySelector("#homeTab").classList.add("active-tab"),document.getElementById("homeTab").addEventListener("click",(()=>{document.querySelector(".hide-home-section")&&document.querySelector(".home-section").classList.remove("hide-home-section"),document.querySelector(".menu-section").classList.add("hide-menu-section"),document.querySelector(".about-section").classList.add("hide-about-section"),document.querySelector(".contact-section").classList.add("hide-contact-section"),document.querySelector("#homeTab").classList.add("active-tab"),document.querySelector("#menuTab").classList.remove("active-tab"),document.querySelector("#contactTab").classList.remove("active-tab"),document.querySelector("#aboutTab").classList.remove("active-tab")})),document.getElementById("menuTab").addEventListener("click",(()=>{document.querySelector(".hide-menu-section")&&document.querySelector(".menu-section").classList.remove("hide-menu-section"),document.querySelector(".home-section").classList.add("hide-home-section"),document.querySelector(".about-section").classList.add("hide-about-section"),document.querySelector(".contact-section").classList.add("hide-contact-section"),document.querySelector("#homeTab").classList.remove("active-tab"),document.querySelector("#menuTab").classList.add("active-tab"),document.querySelector("#contactTab").classList.remove("active-tab"),document.querySelector("#aboutTab").classList.remove("active-tab")})),document.getElementById("aboutTab").addEventListener("click",(()=>{document.querySelector(".hide-about-section")&&document.querySelector(".about-section").classList.remove("hide-about-section"),document.querySelector(".menu-section").classList.add("hide-menu-section"),document.querySelector(".home-section").classList.add("hide-home-section"),document.querySelector(".contact-section").classList.add("hide-contact-section"),document.querySelector("#homeTab").classList.remove("active-tab"),document.querySelector("#menuTab").classList.remove("active-tab"),document.querySelector("#contactTab").classList.remove("active-tab"),document.querySelector("#aboutTab").classList.add("active-tab")})),document.getElementById("contactTab").addEventListener("click",(()=>{document.querySelector(".hide-contact-section")&&document.querySelector(".contact-section").classList.remove("hide-contact-section"),document.querySelector(".menu-section").classList.add("hide-menu-section"),document.querySelector(".about-section").classList.add("hide-about-section"),document.querySelector(".home-section").classList.add("hide-home-section"),document.querySelector("#homeTab").classList.remove("active-tab"),document.querySelector("#menuTab").classList.remove("active-tab"),document.querySelector("#contactTab").classList.add("active-tab"),document.querySelector("#aboutTab").classList.remove("active-tab")})),(()=>{const e=document.getElementById("content"),t=document.createElement("footer");e.appendChild(t),t.setAttribute("class","footer");const n=document.createElement("div");n.setAttribute("class","footer-top"),t.appendChild(n);const c=document.createElement("div");c.setAttribute("class","footer-Left"),n.appendChild(c);const o=document.createElement("div");o.setAttribute("class","footer-center"),n.appendChild(o);const a=document.createElement("div");a.setAttribute("class","footer-right"),n.appendChild(a),(()=>{const e=document.createElement("h3");c.appendChild(e),e.innerHTML="RESTAURANT";const t=["About Us","Our Services","Contacts","Blog"];for(let e=0;e<t.length;e+=1){const n=document.createElement("li");n.innerHTML=`${t[e]}`,c.appendChild(n)}})(),(()=>{const e=["fab fa-facebook-square","fab fa-instagram-square","fab fa-twitter-square"],t=document.createElement("h3");o.appendChild(t),t.innerHTML="CONTACT";const n=document.createElement("p");o.appendChild(n),n.innerHTML="Email: contact@globalcuisine.com </br> Phone: +18001002222";const c=document.createElement("div");o.appendChild(c);for(let t=0;t<e.length;t+=1){const n=document.createElement("i");n.setAttribute("class",`${e[t]} icons`),c.appendChild(n)}})(),(()=>{const e=document.createElement("h3");a.appendChild(e),e.innerHTML="ADDRESS";const t=document.createElement("p");a.appendChild(t),t.innerHTML="101 The Amazing Road <br> Premier Building <br> Manchester <br> 400106"})();const i=document.createElement("div");i.setAttribute("class","copyright"),i.innerHTML="© Copyright 2020 The Global Cuisine",t.appendChild(i)})()})();