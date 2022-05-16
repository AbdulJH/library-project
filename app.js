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


//On click listener for when the submit button is clicked
const btnAdd = document.querySelector(".test-submit");
const DivContainer = document.getElementById("main-content");
btnAdd.addEventListener("click", submitForm)

function submitForm() {
  const  bookTitle = document.getElementById("title_id").value;
  const author = document.getElementById("author_id").value;
  const numberPages = document.getElementById("pages_id").value;
  const readBook = document.getElementById("read_id").value;



  //textContainer is used to create the top bar for each book title
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
  

//Gets author, page, and if they read.
  const authorHTML = document.createTextNode("Author: "+author);
  const pageNumberHTML = document.createTextNode("Pages: "+numberPages);
  let readHTML = document.createTextNode("Read? "+readBook); 
  const br = document.createElement("br");


  //removeBtn is added to span and span is used to help remove the divs
  const mySpan = document.createElement("span");
   const removeButton = document.createElement("button");
   removeButton.textContent = "Remove!"
   removeButton.style.width = "65px";
   removeButton.style.height = "20px";
   removeButton.style.marginLeft = "40px";
   removeButton.style.borderRadius = "5px";
   removeButton.style.backgroundColor = "red";


   const updateButton = document.createElement("button");
   updateButton.textContent = "Update!";
   updateButton.style.width = "65px";
   updateButton.style.height = "20px";
   updateButton.style.marginLeft = "20px";
   updateButton.style.borderRadius = "5px";
   updateButton.style.backgroundColor = "green";





   //click listener for update
   let clicked = false;
   updateButton.onclick = function() {
     if (!clicked) {
       clicked = true;
        readHTML.textContent = ("Read? Yes :)");
     } else {
       clicked = false;
       readHTML.textContent = ("Read? No :(");
     }
   }

 
   //Event listener used to remove a book
   removeButton.addEventListener("click", (e) =>{
    const close = document.querySelectorAll("span");
    for (let i=0; i<close.length; i++) {
      close[i].addEventListener("click", ()=> {
        close[i].parentElement.style.opacity = 0;
        setTimeout(()=> {
         close[i].parentElement.style.display = "none";
         close[i].parentElement.remove();
        }, 10);
      })
    }

   })


   //add removeButton to span
   mySpan.appendChild(removeButton);
   mySpan.appendChild(updateButton);



  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "div1");
  newDiv.classList.add("div-card");

//textContainer contains the title
  newDiv.append(textContainer)
  

  newDiv.appendChild(authorHTML);
  newDiv.appendChild(document.createElement("br"));
  newDiv.appendChild(document.createElement("br"));

  newDiv.appendChild(pageNumberHTML);
  newDiv.appendChild(document.createElement("br"));
  newDiv.appendChild(document.createElement("br"));


  newDiv.appendChild(readHTML);
  newDiv.appendChild(document.createElement("br"));
  newDiv.appendChild(document.createElement("br"));

  newDiv.appendChild(mySpan);




  DivContainer.appendChild(newDiv);
  document.getElementById("group-form").style.display = "none";

}

function removeThis() {
 

  // const eDiv = document.getElementById("div1");
  // eDiv.parentNode.removeChild(eDiv);

}



function openForm() {
  document.getElementById("group-form").style.display = "flex";

}

function closeForm() {
  document.getElementById("group-form").style.display = "none";
}