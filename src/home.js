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
    headerTwo.textContent = "Antonio Restaurant";
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

function loadHomePage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomePage());
}

export default loadHomePage;