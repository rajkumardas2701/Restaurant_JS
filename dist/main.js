(()=>{"use strict";document.body.appendChild(((()=>{const e=document.getElementById("content");e.setAttribute("class","container");const t=document.createElement("div");e.appendChild(t),t.setAttribute("class","nav-section");const n=document.createElement("div");t.appendChild(n),n.setAttribute("class","nav-items");const c=document.createElement("div");n.appendChild(c),c.setAttribute("class","main-logo");const a=document.createElement("a");a.innerHTML="The Global Cuisine",c.appendChild(a);const o=document.createElement("div");o.setAttribute("class","nav-Right-Side"),n.appendChild(o),(()=>{const e=[{className:"Home",contentID:"homeTab",contentText:"Home"},{className:"Menu",contentID:"menuTab",contentText:"Menu"},{className:"About",contentID:"aboutTab",contentText:"About"},{className:"Contact",contentID:"contactTab",contentText:"Contact"}];for(let t=0;t<e.length;t+=1){const n=document.createElement("div");n.setAttribute("class",`${e[t].className}`);const c=document.createElement("a");c.setAttribute("id",`${e[t].contentID}`),c.innerHTML=`${e[t].contentText}`,n.appendChild(c),o.appendChild(n)}})()})(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","contact-section"),e.appendChild(t);const n=document.createElement("h1");t.appendChild(n),n.innerHTML="Contact Us";const c=document.createElement("p");t.appendChild(c),c.innerHTML="Email: contact@globalcuisine.com <br>\n  Phone: +18001002222";const a=document.createElement("form");t.appendChild(a),a.setAttribute("class","form-section"),(()=>{const e=[{className:"name-input",labelName:"name",inputType:"text",labelContent:"Name"},{className:"email-input",labelName:"email",inputType:"email",labelContent:"Email"}];for(let t=0;t<e.length;t+=1){const n=document.createElement("div");a.appendChild(n),n.setAttribute("class",`${e[t].className}`);const c=document.createElement("label");c.setAttribute("for",`${e[t].labelName}`),c.innerHTML=`${e[t].labelContent} : `,n.appendChild(c);const o=document.createElement("input");o.setAttribute("type",`${e[t].inputType}`),n.appendChild(o)}})();const o=document.createElement("label");o.innerHTML="(Please provide your feedback below)",a.appendChild(o);const l=document.createElement("input");a.appendChild(l);const i=document.createElement("button");a.appendChild(i),i.innerHTML="Submit"})(),void(()=>{const e=document.getElementById("content"),t=document.createElement("footer");e.appendChild(t),t.setAttribute("class","footer");const n=document.createElement("div");n.setAttribute("class","footer-top"),t.appendChild(n);const c=document.createElement("div");c.setAttribute("class","footer-Left"),n.appendChild(c);const a=document.createElement("div");a.setAttribute("class","footer-center"),n.appendChild(a);const o=document.createElement("div");o.setAttribute("class","footer-right"),n.appendChild(o),(()=>{const e=document.createElement("h3");c.appendChild(e),e.innerHTML="RESTAURANT";const t=["About Us","Our Services","Contacts","Blog"];for(let e=0;e<t.length;e+=1){const n=document.createElement("li");n.innerHTML=`${t[e]}`,c.appendChild(n)}})(),(()=>{const e=["fab fa-facebook-square","fab fa-instagram-square","fab fa-twitter-square"],t=document.createElement("h3");a.appendChild(t),t.innerHTML="CONTACT";const n=document.createElement("p");a.appendChild(n),n.innerHTML="Email: contact@globalcuisine.com </br> Phone: +18001002222";const c=document.createElement("div");a.appendChild(c);for(let t=0;t<e.length;t+=1){const n=document.createElement("i");n.setAttribute("class",`${e[t]} icons`),c.appendChild(n)}})(),(()=>{const e=document.createElement("h3");o.appendChild(e),e.innerHTML="ADDRESS";const t=document.createElement("p");o.appendChild(t),t.innerHTML="101 The Amazing Road <br> Premier Building <br> Manchester <br> 400106"})();const l=document.createElement("div");l.setAttribute("class","copyright"),l.innerHTML="© Copyright 2020 The Global Cuisine",t.appendChild(l)})()))})();