
function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const logo = document.createElement("div");
    logo.classList.add("logo");
    const logoLink = document.createElement("a");
    logoLink.textContent = "LOGO";
    logo.appendChild(logoLink);

    header.appendChild(logo);
    header.appendChild(createNav());
    
    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    const list = document.createElement("ul");
    const listItem = document.createElement("li");
    nav.appendChild(list);
    listItem.appendChild(document.createTextNode("Five"));
    list.appendChild(listItem);

    return nav;
}
function loadWebsite() {
    const content = document.getElementById("content");
    content.textContent ="";
    content.appendChild(createHeader());
}

export default loadWebsite;