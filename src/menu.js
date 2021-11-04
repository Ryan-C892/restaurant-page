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
        // ---Box 1--- //
        if(i==0) {
            let menuImg = document.createElement("img");
            menuImg.classList.add("menu-img");
            menuImg.src = "images/homemade-cheese-pizza-7.jpg";
            selects[i].appendChild(menuImg);
        }
        // ---Box 2--- //
        if(i==1) {
            let smallColumnHeader = document.createElement("h2");
            smallColumnHeader.classList.add("small-column-header");
            smallColumnHeader.textContent = "Cheese Pizza";
            
            let smallParaOne = document.createElement("p");
            smallParaOne.classList.add("small-column-para");
            smallParaOne.textContent = "Small - $12.95";

            let smallParaTwo = document.createElement("p");
            smallParaTwo.classList.add("small-column-para");
            smallParaTwo.textContent = "Medium - $15.95";

            let smallParaThree = document.createElement("p");
            smallParaThree.classList.add("small-column-para");
            smallParaThree.textContent = "Large - $17.95";

            selects[i].appendChild(smallColumnHeader);
            selects[i].appendChild(smallParaOne);
            selects[i].appendChild(smallParaTwo);
            selects[i].appendChild(smallParaThree);
        }
        // ---Box 3--- //
        if(i==2) {
            let menuImg = document.createElement("img");
            menuImg.classList.add("menu-img");
            menuImg.src = "images/Supreme-Pizza-wuth-Pepperoni-Bell-Peppers-Mushrooms-and-Onions-800x530.png";
            selects[i].appendChild(menuImg);
        }
        // ---Box 4--- //
        if(i==3) {
            let smallColumnHeader = document.createElement("h2");
            smallColumnHeader.classList.add("small-column-header");
            smallColumnHeader.textContent = "Antonio's Special";

            let description = document.createElement("p");
            description.classList.add("small-column-description");
            description.textContent = "Pepperoni, salami, mushrooms, onions, green bell peppers."
            
            let smallParaOne = document.createElement("p");
            smallParaOne.classList.add("small-column-para");
            smallParaOne.textContent = "Small - $22.95";

            let smallParaTwo = document.createElement("p");
            smallParaTwo.classList.add("small-column-para");
            smallParaTwo.textContent = "Medium - $27.95";

            let smallParaThree = document.createElement("p");
            smallParaThree.classList.add("small-column-para");
            smallParaThree.textContent = "Large - $34.95";

            selects[i].appendChild(smallColumnHeader);
            selects[i].appendChild(description);
            selects[i].appendChild(smallParaOne);
            selects[i].appendChild(smallParaTwo);
            selects[i].appendChild(smallParaThree);
        }
        // ---Box 5--- //
        if(i==4) {
            let smallColumnHeader = document.createElement("h2");
            smallColumnHeader.classList.add("small-column-header");
            smallColumnHeader.textContent = "BBQ Chicken Pizza";

            let description = document.createElement("p");
            description.classList.add("small-column-description");
            description.textContent = "Chicken, pepperoni, mozzarella cheese, barbecue sauce, bacon, cilantro."
            
            let smallParaOne = document.createElement("p");
            smallParaOne.classList.add("small-column-para");
            smallParaOne.textContent = "Small - $22.95";

            let smallParaTwo = document.createElement("p");
            smallParaTwo.classList.add("small-column-para");
            smallParaTwo.textContent = "Medium - $27.95";

            let smallParaThree = document.createElement("p");
            smallParaThree.classList.add("small-column-para");
            smallParaThree.textContent = "Large - $34.95";

            selects[i].appendChild(smallColumnHeader);
            selects[i].appendChild(description);
            selects[i].appendChild(smallParaOne);
            selects[i].appendChild(smallParaTwo);
            selects[i].appendChild(smallParaThree);
        }
        // ---Box 6--- //
        if(i==5) {
            let menuImg = document.createElement("img");
            menuImg.classList.add("menu-img");
            menuImg.src = "images/barbecue-chicken-pizza-resize-5.jpg";
            selects[i].appendChild(menuImg);
        }
        // ---Box 7--- //
        if(i==6) {
            let smallColumnHeader = document.createElement("h2");
            smallColumnHeader.classList.add("small-column-header");
            smallColumnHeader.textContent = "Grilled Veggie Pizza";

            let description = document.createElement("p");
            description.classList.add("small-column-description");
            description.textContent = "Sweet yellow and red peppers, mozzarella cheese, onions, zucchini, mushrooms."
            
            let smallParaOne = document.createElement("p");
            smallParaOne.classList.add("small-column-para");
            smallParaOne.textContent = "Small - $15.95";

            let smallParaTwo = document.createElement("p");
            smallParaTwo.classList.add("small-column-para");
            smallParaTwo.textContent = "Medium - $18.95";

            let smallParaThree = document.createElement("p");
            smallParaThree.classList.add("small-column-para");
            smallParaThree.textContent = "Large - $27.95";

            selects[i].appendChild(smallColumnHeader);
            selects[i].appendChild(description);
            selects[i].appendChild(smallParaOne);
            selects[i].appendChild(smallParaTwo);
            selects[i].appendChild(smallParaThree);
        }
        // ---Box 8--- //
        if(i==7) {
            let menuImg = document.createElement("img");
            menuImg.classList.add("menu-img");
            menuImg.src = "images/Grilled-Veggie-Pizza_EXPS_LSBZ18_48960_D01_18_6b-5.jpg";
            selects[i].appendChild(menuImg);
        }
        // ---Box 9--- //
        if(i==8) {
            let menuImg = document.createElement("img");
            menuImg.classList.add("menu-img");
            menuImg.src = "images/tomato-pizza-resize-7.jpg";
            selects[i].appendChild(menuImg);
        }
        // ---Box 10--- //
        if(i==9) {
            let smallColumnHeader = document.createElement("h2");
            smallColumnHeader.classList.add("small-column-header");
            smallColumnHeader.textContent = "Tomato Pizza";

            let description = document.createElement("p");
            description.classList.add("small-column-description");
            description.textContent = "Tomatoes, mozzarella cheese, fresh basil sliced."
            
            let smallParaOne = document.createElement("p");
            smallParaOne.classList.add("small-column-para");
            smallParaOne.textContent = "Small - $15.95";

            let smallParaTwo = document.createElement("p");
            smallParaTwo.classList.add("small-column-para");
            smallParaTwo.textContent = "Medium - $18.95";

            let smallParaThree = document.createElement("p");
            smallParaThree.classList.add("small-column-para");
            smallParaThree.textContent = "Large - $27.95";

            selects[i].appendChild(smallColumnHeader);
            selects[i].appendChild(description);
            selects[i].appendChild(smallParaOne);
            selects[i].appendChild(smallParaTwo);
            selects[i].appendChild(smallParaThree);
        }
        // ---Box 11--- //
        if(i==10) {
            let menuImg = document.createElement("img");
            menuImg.classList.add("menu-img");
            menuImg.src = "images/easy-homemade-hawaiian-pizza-min.jpg";
            selects[i].appendChild(menuImg);
        }
        // ---Box 12--- //
        if(i==11) {
            let smallColumnHeader = document.createElement("h2");
            smallColumnHeader.classList.add("small-column-header");
            smallColumnHeader.textContent = "Hawaiian Pizza";

            let description = document.createElement("p");
            description.classList.add("small-column-description");
            description.textContent = "Pineapple, mozzarella cheese, deli ham."
            
            let smallParaOne = document.createElement("p");
            smallParaOne.classList.add("small-column-para");
            smallParaOne.textContent = "Small - $22.95";

            let smallParaTwo = document.createElement("p");
            smallParaTwo.classList.add("small-column-para");
            smallParaTwo.textContent = "Medium - $25.95";

            let smallParaThree = document.createElement("p");
            smallParaThree.classList.add("small-column-para");
            smallParaThree.textContent = "Large - $34.95";

            selects[i].appendChild(smallColumnHeader);
            selects[i].appendChild(description);
            selects[i].appendChild(smallParaOne);
            selects[i].appendChild(smallParaTwo);
            selects[i].appendChild(smallParaThree);
        }
        // ---Box 13--- //
        if(i==12) {
            let smallColumnHeader = document.createElement("h2");
            smallColumnHeader.classList.add("small-column-header");
            smallColumnHeader.textContent = "Cajun Pizza";

            let description = document.createElement("p");
            description.classList.add("small-column-description");
            description.textContent = "Cajun seasoning, red onion, green pepper, corn, smoked gouda cheese."
            
            let smallParaOne = document.createElement("p");
            smallParaOne.classList.add("small-column-para");
            smallParaOne.textContent = "Small - $22.95";

            let smallParaTwo = document.createElement("p");
            smallParaTwo.classList.add("small-column-para");
            smallParaTwo.textContent = "Medium - $25.95";

            let smallParaThree = document.createElement("p");
            smallParaThree.classList.add("small-column-para");
            smallParaThree.textContent = "Large - $34.95";

            selects[i].appendChild(smallColumnHeader);
            selects[i].appendChild(description);
            selects[i].appendChild(smallParaOne);
            selects[i].appendChild(smallParaTwo);
            selects[i].appendChild(smallParaThree);
        }
        // ---Box 14--- //
        if(i==13) {
            let menuImg = document.createElement("img");
            menuImg.classList.add("menu-img");
            menuImg.src = "images/Pizza6.webp";
            selects[i].appendChild(menuImg);
        }
        // ---Box 15--- //
        if(i==14) {
            let smallColumnHeader = document.createElement("h2");
            smallColumnHeader.classList.add("small-column-header");
            smallColumnHeader.textContent = "Chicken Alfredo Pizza";

            let description = document.createElement("p");
            description.classList.add("small-column-description");
            description.textContent = "Chicken, alfredo sauce, spinach."
            
            let smallParaOne = document.createElement("p");
            smallParaOne.classList.add("small-column-para");
            smallParaOne.textContent = "Small - $16.95";

            let smallParaTwo = document.createElement("p");
            smallParaTwo.classList.add("small-column-para");
            smallParaTwo.textContent = "Medium - $19.95";

            let smallParaThree = document.createElement("p");
            smallParaThree.classList.add("small-column-para");
            smallParaThree.textContent = "Large - $28.95";

            selects[i].appendChild(smallColumnHeader);
            selects[i].appendChild(description);
            selects[i].appendChild(smallParaOne);
            selects[i].appendChild(smallParaTwo);
            selects[i].appendChild(smallParaThree);
        }
        // ---Box 16--- //
        if(i==15) {
            let menuImg = document.createElement("img");
            menuImg.classList.add("menu-img");
            menuImg.src = "images/chicken-spinach-alfredo-pizza-resize-6.jpg";
            selects[i].appendChild(menuImg);
        }
        // ---Box 17--- //
        if(i==16) {
            let menuImg = document.createElement("img");
            menuImg.classList.add("menu-img");
            menuImg.src = "images/greek-pizza-homemade-min.jpg";
            selects[i].appendChild(menuImg);
        }
        // ---Box 18--- //
        if(i==17) {
            let smallColumnHeader = document.createElement("h2");
            smallColumnHeader.classList.add("small-column-header");
            smallColumnHeader.textContent = "Greek Pizza";

            let description = document.createElement("p");
            description.classList.add("small-column-description");
            description.textContent = "Green bell peppers, kalamata olives, crumbled feta, artichokes, tomatoes, onions."
            
            let smallParaOne = document.createElement("p");
            smallParaOne.classList.add("small-column-para");
            smallParaOne.textContent = "Small - $15.95";

            let smallParaTwo = document.createElement("p");
            smallParaTwo.classList.add("small-column-para");
            smallParaTwo.textContent = "Medium - $17.95";

            let smallParaThree = document.createElement("p");
            smallParaThree.classList.add("small-column-para");
            smallParaThree.textContent = "Large - $27.95";

            selects[i].appendChild(smallColumnHeader);
            selects[i].appendChild(description);
            selects[i].appendChild(smallParaOne);
            selects[i].appendChild(smallParaTwo);
            selects[i].appendChild(smallParaThree);
        }
        // ---Box 19--- //
        if(i==18) {
            let menuImg = document.createElement("img");
            menuImg.classList.add("menu-img");
            menuImg.src = "images/Ricotta-Pizza-024.jpg";
            selects[i].appendChild(menuImg);
        }
        // ---Box 20--- //
        if(i==19) {
            let smallColumnHeader = document.createElement("h2");
            smallColumnHeader.classList.add("small-column-header");
            smallColumnHeader.textContent = "Ricotta Pizza";

            let description = document.createElement("p");
            description.classList.add("small-column-description");
            description.textContent = "Artichokes, fresh basil, ricotta cheese, mozzarella and parmesan cheese."
            
            let smallParaOne = document.createElement("p");
            smallParaOne.classList.add("small-column-para");
            smallParaOne.textContent = "Small - $12.95";

            let smallParaTwo = document.createElement("p");
            smallParaTwo.classList.add("small-column-para");
            smallParaTwo.textContent = "Medium - $15.95";

            let smallParaThree = document.createElement("p");
            smallParaThree.classList.add("small-column-para");
            smallParaThree.textContent = "Large - $17.95";

            selects[i].appendChild(smallColumnHeader);
            selects[i].appendChild(description);
            selects[i].appendChild(smallParaOne);
            selects[i].appendChild(smallParaTwo);
            selects[i].appendChild(smallParaThree);
        }
    }
}

function loadMenuPage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenuPage());
}

export default loadMenuPage;