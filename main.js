(()=>{"use strict";function t(){const t=document.createElement("div");t.classList.add("container"),main.appendChild(t);const e=document.createElement("div");e.setAttribute("id","menu-container"),t.appendChild(e);const n=document.createElement("div");n.setAttribute("id","menu-header"),e.appendChild(n);const a=document.createElement("h2");a.classList.add("menu-title"),a.textContent="Menu",n.appendChild(a);const d=document.createElement("div");d.setAttribute("id","menu"),e.appendChild(d);for(let t=0;t<20;t++){const t=document.createElement("div");t.classList.add("small-column"),d.appendChild(t)}}const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(t())};const n=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("container");const n=document.createElement("div");n.classList.add("row"),t.appendChild(n);const a=document.createElement("div");a.classList.add("column"),n.appendChild(a);const d=document.createElement("img");d.classList.add("chef-image"),d.src="images/benu-marinescu-e6ZOmEfNHLM-unsplash.jpg",d.alt="Chef",a.appendChild(d);const c=document.createElement("div");c.classList.add("column"),n.appendChild(c),c.appendChild(function(){const t=document.createElement("div");t.classList.add("header-section");const e=document.createElement("span");e.classList.add("sub-header"),e.textContent="About",t.appendChild(e);const n=document.createElement("h2");return n.classList.add("restaurant-name"),n.textContent="Antonio Restaurant",t.appendChild(n),t}()),c.appendChild(function(){const t=document.createElement("p");return t.classList.add("about-para"),t.textContent="Come on down and try our delicious pizza! Our selection of Italian styled pizzas are perfected by our own family tradition and a team of experienced chefs. We cater to any special occasion including weddings, business meettings, and birthday parties.",t}()),c.appendChild(function(){const t=document.createElement("p");return t.classList.add("about-para"),t.textContent="Order online or join us!",t}()),c.appendChild(function(){const t=document.createElement("div");t.classList.add("time");const e=document.createElement("span");e.textContent="Mon - Fri ",t.appendChild(e);const n=document.createElement("strong");n.textContent="8 AM - 11 PM",e.appendChild(n);const a=document.createElement("br");t.appendChild(a);const d=document.createElement("span");t.appendChild(d);const c=document.createElement("a");return c.href="#",c.textContent="+ 1-978-123-4567",d.appendChild(c),t}());const i=document.createElement("div");i.classList.add("column"),n.appendChild(i);const s=document.createElement("div");return s.classList.add("online-inner"),i.appendChild(s),s.appendChild(function(){const t=document.createElement("p");return t.classList.add("online-para"),t.textContent="Order for lunch, dinner, or late-night delivery anytime. We have atleast three locations available to serve you - hot, ready and expertly made.",t}()),s.appendChild(function(){const t=document.createElement("button");t.classList.add("order-btn");const n=document.createElement("a");n.classList.add("order-link"),n.textContent="Order Now",n.href="#";let a=document.getElementById("menu-btn");return n.addEventListener("click",(t=>{t.target.classList.contains("active")||(function(t){document.querySelectorAll(".nav-button").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}(a),e())})),t.appendChild(n),t}()),t}())};function a(t){document.querySelectorAll(".nav-button").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.textContent="",t.appendChild(function(){const t=document.createElement("header");t.classList.add("header");const d=document.createElement("div");d.classList.add("logo");const c=document.createElement("button");return c.href="#",c.textContent="LOGO",d.appendChild(c),d.addEventListener("click",(()=>{n()})),t.appendChild(d),t.appendChild(function(){const t=document.createElement("nav");t.setAttribute("id","navbar");const d=document.createElement("ul");d.classList.add("navbar-list"),t.appendChild(d);let c=document.createElement("li");c.classList.add("navbar-link"),d.appendChild(c);let i=document.createElement("li");i.classList.add("navbar-link"),d.appendChild(i);let s=document.createElement("li");s.classList.add("navbar-link"),d.appendChild(s);let o=document.createElement("button");o.setAttribute("id","home-btn"),o.classList.add("nav-button"),o.textContent="Home",c.appendChild(o),o.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(o),n())}));let l=document.createElement("button");l.setAttribute("id","menu-btn"),l.classList.add("nav-button"),l.textContent="Menu",i.appendChild(l),l.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(l),e())}));let r=document.createElement("button");return r.setAttribute("id","contact-btn"),r.classList.add("nav-button"),r.textContent="Contact",s.appendChild(r),r.addEventListener("click",(t=>{t.target.classList.contains("active")||a(r)})),t}()),t}()),t.appendChild(function(){const t=document.createElement("main");return t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.setAttribute("id","footer");const e=document.createElement("span");return e.classList.add("copyright"),e.textContent="Copyright © 2021 | Ryan-C892",t.appendChild(e),t}()),a(document.querySelector(".nav-button")),n()}()})();