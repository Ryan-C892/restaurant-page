import loadHomePage from "./home";
import loadMenuPage from "./menu";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const logo = document.createElement("div");
    logo.classList.add("logo");

    const logoLink = document.createElement("button");
    logoLink.href="#"
    logoLink.textContent = "LOGO";
    logo.appendChild(logoLink);
    logo.addEventListener("click", ()=> {
        loadHomePage();
    });
    header.appendChild(logo);
    header.appendChild(createNav());
    
    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    nav.setAttribute("id", "navbar");

    const list = document.createElement("ul");
    list.classList.add("navbar-list");
    nav.appendChild(list);
    
    let listItemOne = document.createElement("li");
    listItemOne.classList.add("navbar-link");
    list.appendChild(listItemOne);

    let listItemTwo = document.createElement("li");
    listItemTwo.classList.add("navbar-link");
    list.appendChild(listItemTwo);

    let listItemThree = document.createElement("li");
    listItemThree.classList.add("navbar-link");
    list.appendChild(listItemThree);

    let homeBtn = document.createElement("button");
    homeBtn.classList.add("nav-button");
    homeBtn.textContent = "Home";
    listItemOne.appendChild(homeBtn);
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(homeBtn);
        loadHomePage();
    });
    

    let menuBtn = document.createElement("button");
    menuBtn.classList.add("nav-button");
    menuBtn.textContent = "Menu";
    listItemTwo.appendChild(menuBtn);
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(menuBtn);
        loadMenuPage();
    });

    let contactBtn = document.createElement("button");
    contactBtn.classList.add("nav-button");
    contactBtn.textContent = "Contact";
    listItemThree.appendChild(contactBtn);
    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(contactBtn);
    });

    return nav;
}

function setActive(button) {
    const buttonList = document.querySelectorAll(".nav-button");

    buttonList.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.setAttribute("id", "footer");

    const copyright = document.createElement("span");
    copyright.classList.add("copyright");
    copyright.textContent = "Copyright © 2021 | Ryan-C892";
    footer.appendChild(copyright);
    return footer;
}

function loadWebsite() {
    const content = document.getElementById("content");
    content.textContent ="";
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActive(document.querySelector(".nav-button"));
    loadHomePage();
}

export default loadWebsite;