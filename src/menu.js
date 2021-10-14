function createMenuPage() {
    
}



function loadMenuPage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenuPage());
}

export default loadMenuPage;