let my_lib = [];

class Book {
    constructor(title, author, genre, description){
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.description = description;
    my_lib.push(this);
    }
}

new Book("Kalawela", "Kalawela", "BS", "More BS IN THE STRONGEST POSSIBLE WAY . The moon walking jaybird ate a finch");
new Book("Jeff", "Jeff", "Jeff BS", "More jeff bs, why did you do it whyyyyyyyy!");

function add_book_to_library(e) {
    e.preventDefault();
    const fTitle= document.getElementById("Title");
    const name = fTitle.value;

    const fAuthor = document.getElementById("Author");
    const author = fAuthor.value;

    const fGenre = document.getElementById("Genre");
    const genre = fGenre.value;

    const fDesc = document.getElementById("Description");
    const desc = fDesc.value;
    new Book(name, author, genre, desc);

    update();    
}


function update(){
    const loc = document.getElementById("books");
    loc.innerHTML = "";
    my_lib.forEach(book => {
        let new_elem = document.createElement("li");
        let cont = document.createElement("div");
        let left_div = document.createElement("div");
        let right_div = document.createElement("div");

        let new_title = document.createElement("h3");
        let new_author = document.createElement("h4");
        let new_desc = document.createElement("p");

        new_title.textContent = book.title;
        new_author.textContent = "Author: " + book.author;
        new_desc.textContent = book.description;

        left_div.appendChild(new_title);
        left_div.appendChild(new_author);

        right_div.appendChild(new_desc);

        cont.appendChild(left_div);
        cont.appendChild(right_div);
        cont.className = "card";
        new_elem.appendChild(cont);

        loc.appendChild(new_elem);
    });
}

update();
const btn = document.querySelector("form").addEventListener("submit", add_book_to_library)