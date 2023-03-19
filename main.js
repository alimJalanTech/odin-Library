// used Const because myLibrary is functionally altered but not reassigned
const myLibrary = [
    {
        "name": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "pages": 310,
        "read": true
    },
    {
        "name": "Pride and Prejudice",
        "author": "Jane Austen",
        "pages": 432,
        "read": false
    }
];

function Book(book, author, pages, read) {
  this.name = book;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  const bookName = document.querySelector(".name").value;
  const author = document.querySelector(".author").value;
  const pages = document.querySelector(".pages").value;
  const read = document.querySelector(".read").checked;
  
  let newBook = new Book(bookName, author, pages, read);
  myLibrary.push(newBook);
  
  render();
}

function render() {
  let newCard = document.querySelector(".library");
  newCard.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `
        <div class="card">
        <div class="card-head">
            <h3 class="title"> Book Name: ${book.name} </h3>
            <h3 class="title"> Author: ${book.author} </h3>
            <h3>  ${book.pages} Pages <h3>
            <button class="read-status" onclick="changeRead(${i})"> 
            ${
              book.read
                ? '<div style="color:green">Read</div>'
                : '<div style="color:red">Not Read</div>'
            } 
            </button>
        </div>
        <div>
            <button class="remove-btn" onclick="removeBook(${i})">Remove Book ${i}</button>
        </div>
        </div>
        `;
    newCard.appendChild(bookEl);
  }
}

function removeBook(position) {
  myLibrary.splice(position, 1);
  render();
}

function changeRead(index) {
  myLibrary[index].read = !myLibrary[index].read;
  render();
}

function emptyForm() {
  const inputFields = form.getElementsByTagName("input");
  Array.from(inputFields).forEach(function (field) {
    field.value = "";
  });
}

render()
const form = document.querySelector(".form-main");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();

  emptyForm();
});
