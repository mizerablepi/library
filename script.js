let main = document.getElementsByClassName('book-cards')[0];

let newBookButton = document.getElementById('new-book-btn');
newBookButton.addEventListener('click', toggleForm);

let addButton = document.getElementById('add');
addButton.addEventListener('click', getInfoAndDisplayCards);

let myLibrary = [
  {
    title: "crime and punishment",
    author: "fyodor dostovesky",
    numberOfPages: 500,
    numberOfPagesRead: 200,
    read: false,
  },
  {
    title: "metamorphosis",
    author: "franz kafka",
    numberOfPages: 200,
    numberOfPagesRead: 200,
    read: true,
  },
  {
    title: "1984",
    author: "george orwell",
    numberOfPages: 400,
    numberOfPagesRead: 0,
    read: false,
  }
];


displayBookCards();

function Book(title, author, numberOfPages ,numberOfPagesRead, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.numberOfPagesRead = numberOfPagesRead;
  this.read = read;
}

function addBookToLibrary(title, author, numberOfPages ,numberOfPagesRead, read=false) {
  myLibrary.push(new Book(title, author, numberOfPages ,numberOfPagesRead, read))
}

function displayBookCards() {
  main.innerHTML = '';
  for (let book of myLibrary) {
    main.appendChild(generateCardElement(book.title, book.author, book.numberOfPages, book.numberOfPagesRead, book.numberOfPagesRead, book.read));
  }
}

function generateCardElement(title, author, numberOfPages, numberOfPagesRead, read) {
  let card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-index', myLibrary.length);
  let titleElement = document.createElement('span');
  titleElement.className = 'card-title';
  titleElement.textContent = title;
  let authorElement = document.createElement('span');
  authorElement.textContent = `Author: ${author}`;
  let numberOfPagesElement = document.createElement("span");
  numberOfPagesElement.textContent = `Pages: ${numberOfPages}`;
  let numberOfPagesReadElement = document.createElement("span");
  numberOfPagesReadElement.textContent = `Pages read: ${numberOfPagesRead}`;
  let readElement = document.createElement('span');
  readElement.textContent = `Completed: ${read ? 'yes' : 'no'}`
  card.append(titleElement, authorElement, numberOfPagesElement, numberOfPagesReadElement, readElement);
  return card;
}

function getInfoAndDisplayCards(e) {
  let newTitle = document.getElementById('new-title').value;
  let newAuthor = document.getElementById('new-author').value;
  let newPages = document.getElementById('pages').value;
  let newPagesRead = document.getElementById('pages-read').value;
  let newCompleted = document.getElementById('completed').checked;

  addBookToLibrary(newTitle, newAuthor, newPages, newPagesRead, newCompleted);
  toggleForm();
  displayBookCards();
  document.getElementsByTagName('form')[0].reset();

  e.preventDefault();
}

function toggleForm() {
  let overlay = document.getElementsByClassName('overlay')[0];
  overlay.classList.toggle('hidden');
}