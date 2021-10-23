let my_lib = [];

class Book {
    constructor(title, author, genre, description, read){
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.description = description;
    this.read = false;
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

    new Book(name, author, genre, desc, false);



    fTitle.value = "";
    fAuthor.value = "";
    fGenre.value = "";
    fDesc.value = "";

    update();    
}

function removeBook(ind){
    my_lib.splice(parseInt( ind), 1);
}


function update(){
    const loc = document.getElementById("books");
    loc.innerHTML = "";
    my_lib.forEach((book, index) => {
        let new_elem = document.createElement("li");
        let cont = document.createElement("div");
        let left_div = document.createElement("div");
        let right_div = document.createElement("div");

        let del_btn = document.createElement("button");
        del_btn.textContent = "Remove";
        del_btn.id = index;

        let read_btn = document.createElement("button");
        read_btn.textContent = "Read";

        let new_title = document.createElement("h3");
        let new_author = document.createElement("h4");
        let new_desc = document.createElement("p");

        new_title.textContent = `${index}. ${book.title}`;
        new_author.textContent = "Author: " + book.author;
        new_desc.textContent = book.description;

        left_div.appendChild(new_title);
        left_div.appendChild(new_author);
        left_div.appendChild(del_btn);
        left_div.appendChild(read_btn);

        right_div.appendChild(new_desc);

        cont.appendChild(left_div);
        cont.appendChild(right_div);
        cont.className = "card";
        new_elem.appendChild(cont);

        loc.appendChild(new_elem);

        del_btn.addEventListener("click", (e) => {
            e.preventDefault();
            removeBook(del_btn.id);
            update();
        })

        read_btn.addEventListener("click", (e) => {
            e.preventDefault();
            cont.classList.toggle("read");
        });
    });
}

update();
const btn = document.querySelector("form").addEventListener("submit", add_book_to_library)

