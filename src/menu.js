function createMenuPage() {
    const container = document.createElement("div");
    container.classList.add("container");
    main.appendChild(container);

    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu-container");
    container.appendChild(menuContainer);

    const menuHeader = document.createElement("div");
    menuHeader.setAttribute("id", "menu-header");
    menuContainer.appendChild(menuHeader);

    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu";
    menuHeader.appendChild(menuTitle);

    const mainMenu = document.createElement("div");
    mainMenu.setAttribute("id", "menu");
    menuContainer.appendChild(mainMenu);

    for(let i = 0; i < 20; i++) {
        const smallColumn = document.createElement("div");
        smallColumn.classList.add("small-column");
        mainMenu.appendChild(smallColumn);

        let selects = document.getElementsByClassName("small-column");
        if(i==1) {
            let smallColumnHeader = document.createElement("h2");
            smallColumnHeader.classList.add("small-column-header");
            smallColumnHeader.textContent = "Cheese Pizza";
            
            let smallColumnPara = document.createElement("p");
            smallColumnPara.classList.add("small-column-para");

            selects[i].appendChild(smallColumnHeader);
            selects[i].appendChild(smallColumnPara);
        }
    }
}

function loadMenuPage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenuPage());
}

export default loadMenuPage;