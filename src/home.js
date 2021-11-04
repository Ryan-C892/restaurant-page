import loadMenuPage from "./menu";

function createHomePage() {
    const container = document.createElement("div");
    container.classList.add("container");

    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    const columnOne = document.createElement("div");
    columnOne.classList.add("column");
    row.appendChild(columnOne); 

    const image = document.createElement("img");
    image.classList.add("chef-image");
    image.src = "images/benu-marinescu-e6ZOmEfNHLM-unsplash.jpg";
    image.alt = "Chef";
    columnOne.appendChild(image);

    const columnTwo = document.createElement("div");
    columnTwo.classList.add("column");
    row.appendChild(columnTwo);
    columnTwo.appendChild(createAbout());
    columnTwo.appendChild(createPara());
    columnTwo.appendChild(createParaTwo());
    columnTwo.appendChild(createTime());

    const orderOnline = document.createElement("div");
    orderOnline.classList.add("column");
    row.appendChild(orderOnline);

    const onlineInner = document.createElement("div");
    onlineInner.classList.add("online-inner");
    orderOnline.appendChild(onlineInner);
    onlineInner.appendChild(createParaThree());
    onlineInner.appendChild(createButton());

    return container;
}

function createAbout() {
    const headerSection = document.createElement("div");
    headerSection.classList.add("header-section");

    const span = document.createElement("span");
    span.classList.add("sub-header");
    span.textContent = "About";
    headerSection.appendChild(span);

    const headerTwo = document.createElement("h2");
    headerTwo.classList.add("restaurant-name");
    headerTwo.textContent = "Antonio's Pizzeria";
    headerSection.appendChild(headerTwo);

    return headerSection;
}

function createPara() {
    const para = document.createElement("p");
    para.classList.add("about-para");
    para.textContent = "Come on down and try our delicious pizza! Our selection of Italian styled pizzas are perfected by our own family tradition and a team of experienced chefs. We cater to any special occasion including weddings, business meettings, and birthday parties."

    return para;
}

function createParaTwo() {
    const paraTwo = document.createElement("p");
    paraTwo.classList.add("about-para");
    paraTwo.textContent = "Order online or join us!";

    return paraTwo;
}

function createParaThree() {
    const paraThree = document.createElement("p");
    paraThree.classList.add("online-para");
    paraThree.textContent = "Order for lunch, dinner, or late-night delivery anytime. We have atleast three locations available to serve you - hot, ready and expertly made."

    return paraThree;
}

function createTime() {
    const time = document.createElement("div");
    time.classList.add("time");
    
    const span = document.createElement("span");
    span.textContent = "Mon - Fri "
    time.appendChild(span);

    const strong = document.createElement("strong");
    strong.textContent = "8 AM - 11 PM";
    span.appendChild(strong);

    const breakLine = document.createElement("br");
    time.appendChild(breakLine);

    const spanTwo = document.createElement("span");
    time.appendChild(spanTwo);

    const spanLink = document.createElement("a");
    spanLink.href="#";
    spanLink.textContent = "+ 1-978-123-4567";
    spanTwo.appendChild(spanLink);

    return time;
}

function createButton() {
    const orderBtn = document.createElement("button");
    orderBtn.classList.add("order-btn");

    const orderLink = document.createElement("a");
    orderLink.classList.add("order-link");
    orderLink.textContent = "Order Now";
    orderLink.href = "#";
    let menuBtn = document.getElementById("menu-btn");
    orderLink.addEventListener("click", (e)=> {
        if (e.target.classList.contains("active")) return;
        setActive(menuBtn);
        loadMenuPage();
    });
    orderBtn.appendChild(orderLink);

    return orderBtn;
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


function loadHomePage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomePage());
}

export default loadHomePage;