function updateHeader() {
    let headerElements = document.getElementsByClassName("jumbotron");
    let hrElements = document.getElementsByClassName("my-4");
    let buttonHeader = document.getElementsByClassName("btn-lg");
    
    headerElements[0].classList.add("d-flex", "flex-column", "align-items-end", "bg-secondary", "text-light");
    hrElements[0].classList.add("border-top", "border-light", "w-100");
    buttonHeader[0].classList.add("btn-success");
}

function updateMenu() {
    let menuElment = document.getElementsByClassName("btn-group-vertical")[0];

    menuElment.classList.remove("btn-group-vertical");
}

function updateCards() {
    let cardsTitles = document.getElementsByClassName("card-title");
    let cardsImages = document.getElementsByClassName("card-img-top");

    cardsTitles[0].innerHTML = 'Natureza';
    cardsImages[0].setAttribute('src', 'https://placeimg.com/300/180/nature')
    

    cardsTitles[1].innerHTML = 'Animais';
    cardsImages[1].setAttribute('src', 'https://placeimg.com/300/180/animals')

    cardsTitles[2].innerHTML = 'Pessoas';
    cardsImages[2].setAttribute('src', 'https://placeimg.com/300/180/people')

    cardsTitles[3].innerHTML = 'Tecnologia';
    cardsImages[3].setAttribute('src', 'https://placeimg.com/300/180/tech')

}

function updateList() {
    let listElemnts = document.getElementsByTagName("ul")[0];
    let itemsListElements = document.getElementsByClassName("list-group-item");

    itemsListElements[0].classList.remove("active")

    let newItem = document.createElement('li');
    newItem.innerHTML = 'Quarto Item';
    newItem.classList.add("list-group-item", "active");

    let newItem2 = document.createElement('li');
    newItem2.innerHTML = 'Quinto Item';
    newItem2.classList.add("list-group-item");

    listElemnts.appendChild(newItem);
    listElemnts.appendChild(newItem2);
}

function newVersion() {
    updateMenu();
    updateHeader();
    updateCards();
    updateList();
}

newVersion();