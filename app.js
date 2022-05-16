let myLibrary = [];



function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function() {
    return ("The "+title+" by "+author+", "+pages+" pages, "+haveRead);
  }
}


// const theHungerGames = new Books("Hunger Games", "Suzanne Collins", 384, "not read yet");
// const sailorMoon = new Books("Sailor Moon", "Billy Collins", 222, "not read yet");


// console.log(theHungerGames.info());

function addBookToLibrary() {
  let book = new Book(title, author, pages, haveRead);
  myLibrary.push(book);

}

function displayBooks() {
  const books = document.querySelector(".books");

  // myLibrary.forEach(myLibrary => {
  //   const card = document.createElement("div");
  //   card.classList.add("card");
  //   books.appendChild(card);

  //   for (let key in myLibrary) 
  // })
}

//On click listener for when the submit button is clicked
const btnAdd = document.querySelector(".test-submit");
const DivContainer = document.getElementById("main-content");
btnAdd.addEventListener("click", submitForm)

function submitForm() {
  const  bookTitle = document.getElementById("title_id").value;
  const author = document.getElementById("author_id").value;
  const numberPages = document.getElementById("pages_id").value;
  const readBook = document.getElementById("read_id").value;


  const textContainer = document.createElement("span");
  const titleHTML = document.createTextNode("Title: "+bookTitle);
  textContainer.appendChild(titleHTML);
  textContainer.style.display = "flex";
  textContainer.style.color = "white";
  textContainer.style.backgroundColor = "black";
  textContainer.style.width = "230px";
  textContainer.style.height = "auto";
  textContainer.style.alignItems = "center";
  textContainer.style.justifyContent = "center";
  textContainer.style.margin = 0;
  


  const authorHTML = document.createTextNode("Author: "+author);
  const pageNumberHTML = document.createTextNode("Pages: "+numberPages);
  const readHTML = document.createTextNode("Read? "+readBook);

  const br = document.createElement("br");


 
  const newDiv = document.createElement("div");
  newDiv.classList.add("div-card");

  newDiv.append(textContainer)
  // newDiv.appendChild(titleHTML);
  // newDiv.appendChild(document.createElement("br"));
  // newDiv.appendChild(document.createElement("br"));


  newDiv.appendChild(authorHTML);
  newDiv.appendChild(document.createElement("br"));
  newDiv.appendChild(document.createElement("br"));

  newDiv.appendChild(pageNumberHTML);
  newDiv.appendChild(document.createElement("br"));
  newDiv.appendChild(document.createElement("br"));


  newDiv.appendChild(readHTML);
  newDiv.appendChild(document.createElement("br"));
  newDiv.appendChild(document.createElement("br"));



  DivContainer.appendChild(newDiv);
  document.getElementById("group-form").style.display = "none";


  // document.getElementById("test-title").innerHTML = bookTitle;
  


  // // document.getElementById("books").style.display = "flex";s
}

function openForm() {
  document.getElementById("group-form").style.display = "flex";

}

function closeForm() {
  document.getElementById("group-form").style.display = "none";
}