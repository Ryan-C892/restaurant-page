
function createHeader() {
    const header = createElement("header");
    header.classList.add("header");

    const logo = createElement("div");
    logo.classList.add("logo");
    const logoLink = createElement("a");
    logoLink.textContent("LOGO");
    logo.appendChild(logoLink);

    header.appendChild(logo);
    header.appendChild(createNav());
    
    return header;
}

function createNav() {
    const nav = createElement("nav");
    const list = createElement("ul");
    const listItem = createElement("li");
    nav.appendChild(list);
    listItem.appendChild(document.createTextNode("Five"));
    list.appendChild(listItem);

    return nav;
}
function loadWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
}

export default loadWebsite;