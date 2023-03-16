let myLibrary = [];

function Book(book, author, pages) {
  this.name = book;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  // do stuff here
  const bookName = document.querySelector(".name").value;
  const author = document.querySelector(".author").value;
  const pages = document.querySelector(".pages").value;
  let newBook = new Book(bookName, author, pages);
  console.log(newBook);
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
            <h3 class="title"> ${book.name} </h3>
            <h3 class="title"> ${book.author} </h3>
        </div>
        <div>
            <h3>  ${book.pages} Pages <h3>
            <button class="remove-btn" onclick="removeBook(${i})">Remove Book ${i}</button>
        </div>
        </div>
        `;
    newCard.appendChild(bookEl);
  }
}

function removeBook(position) {
  console.log(position);
  myLibrary.splice(position, 1);
  render();
}

const form = document.querySelector(".form-main");
const container = document.querySelector(".row");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();

  // Clear form fields
  const inputFields = form.getElementsByTagName("input");
  Array.from(inputFields).forEach(function (field) {
    field.value = "";
  });
});
