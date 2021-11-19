function createContactPage() {
    const contact_container = document.createElement("div");
    contact_container.classList.add("contact-container");
    main.appendChild(contact_container);

    const contact_header = document.createElement("div");
    contact_header.classList.add("contact-header");
    contact_container.appendChild(contact_header);

    const header = document.createElement("h2");
    header.textContent = "Contact";
    contact_header.appendChild(header);

    const row = document.createElement("div");
    row.classList.add("contact-row");
    contact_container.appendChild(row);

    const columnOne = document.createElement("div");
    columnOne.classList.add("contact-column");
    row.appendChild(columnOne);

    const iframe = document.createElement("iframe");
    iframe.src = "https://maps.google.com/maps?q=36%20North%20St,%20Jersey%20City,%20NJ%2007307&t=&z=13&ie=UTF8&iwloc=&output=embed"
    iframe.width = "100%";
    iframe.height = "520px";
    iframe.border = "none";
    columnOne.appendChild(iframe);

    const columnTwo = document.createElement("div");
    columnTwo.classList.add("contact-column");
    row.appendChild(columnTwo);

    const form = document.createElement("form");
    form.action = "#";
    columnTwo.appendChild(form);

    const labelOne = document.createElement("label");
    labelOne.setAttribute("for", "name");
    labelOne.textContent = "Name";
    form.appendChild(labelOne);

    const inputOne = document.createElement("input");
    inputOne.setAttribute("type", "text");
    inputOne.setAttribute("name", "name");
    inputOne.setAttribute("placeholder", "Name");
    inputOne.id = "name";
    form.appendChild(inputOne);

    const labelTwo = document.createElement("label");
    labelTwo.setAttribute("for", "email");
    labelTwo.textContent = "Email";
    form.appendChild(labelTwo);

    const inputTwo = document.createElement("input");
    inputTwo.setAttribute("type", "email");
    inputTwo.setAttribute("name", "email");
    inputTwo.setAttribute("placeholder", "Email");
    inputTwo.id = "Email";
    form.appendChild(inputTwo);

    const labelThree = document.createElement("label");
    labelThree.setAttribute("for", "subject");
    labelThree.textContent = "Subject";
    form.appendChild(labelThree);

    const inputThree = document.createElement("input");
    inputThree.setAttribute("type", "text");
    inputThree.setAttribute("name", "subject");
    inputThree.setAttribute("placeholder", "Subject");
    inputThree.id = "subject";
    form.appendChild(inputThree);

    const labelFour = document.createElement("label");
    labelFour.setAttribute("for", "message");
    labelFour.textContent = "Message";
    form.appendChild(labelFour);

    const textarea = document.createElement("textarea");
    textarea.id = "message";
    textarea.setAttribute("name", "message");
    textarea.setAttribute("placeholder", "Message");
    textarea.style = "height: 170px;";
    form.appendChild(textarea);

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    form.appendChild(submit);
    
    return contact_container;
}

function loadContactPage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContactPage());
}

export default loadContactPage