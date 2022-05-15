let myLibrary = [];



function Books(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function() {
    return ("The "+title+" by "+author+", "+pages+" pages, "+haveRead);
  }
}


const theHungerGames = new Books("Hunger Games", "Suzanne Collins", 384, "not read yet");
const sailorMoon = new Books("Sailor Moon", "Billy Collins", 222, "not read yet");


console.log(theHungerGames.info());

function openForm() {
  document.getElementById("group-form").style.display = "flex";

}

function closeForm() {
  document.getElementById("group-form").style.display = "none";
}