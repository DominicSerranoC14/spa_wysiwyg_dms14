//decalare object of famous people
var people = [
  {
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "<img src=//upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg></img>",
  lifespan: {
    birth: 1747,
    death: 1797 }
  },
  {
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "<img src=//upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg></img>",
    lifespan: {
      birth: 1747,
      death: 1797 }
  },
  {
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "<img src=//upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg></img>",
    lifespan: {
      birth: 1747,
      death: 1797 }
  }
];// end array

//create reference to text box
var userInput = document.getElementById('userInput');

//create reference to output conatainer div and declare
//counter for loop
var counter = 0;
var outputDiv = document.getElementById('container');

//add empty divs with class and id's with unique counter
//value to identify each div
for (; counter < 3; counter++) {
  // Give each person element a unique identifier
  outputDiv.innerHTML += `<div class="person__container"
  id="person--${counter}"></div>`;
  // if ( `${counter}` % 2 === 0 ) {
  //   var evenNumber = document.getElementById(`person--${counter}`);
  //   evenNumber.classList.add('yellowBackground');
  // } else {
  //   var oddNumber = document.getElementById(`person--${counter}`);
  //   oddNumber.classList.add('greenBackground');
  // }
}

// Now containerDiv will have elements in it
var containerDiv = document.getElementsByClassName("person__container");

//declare variable to store the reference to a event passed on a div
var storage;

//declare variable to store bio <p> in each person element
var storeBio;

// // Event listeners are created
for (var i = 0; i < containerDiv.length; i++) {

  var peopleDiv = document.getElementById(`person--${i}`);
  peopleDiv.innerHTML += `<h3>${people[i].name}</h3>`;
  peopleDiv.innerHTML += `<section id="bio--${i}">${people[i].bio}</section>`;
  peopleDiv.innerHTML += `<p>${people[i].image}</p>`;
  peopleDiv.innerHTML += `<p>${people[i].lifespan.birth}</p>`;
  peopleDiv.innerHTML += `<p>${people[i].lifespan.death}</p>`;

  // storeBio = document.getElementById(`bio--${i}`);

  //determine if each people el is an odd or even labeled element
  //and give it a background color
  if ( `${i}` % 2 === 0 ) {
    var evenNumber = document.getElementById(`person--${i}`);
    evenNumber.classList.add('yellowBackground');
  } else {
    var oddNumber = document.getElementById(`person--${i}`);
    oddNumber.classList.add('greenBackground');
  }

  //add event listeners to each element
  containerDiv[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
    this.classList.toggle('border');
    userInput.focus();

    //store element that is clicked in idString
    var idString = this.id;
    console.log(idString);
    //slice the id number from element
    idString = idString.slice(8);
    console.log(idString);
    //pass sliced value so you can select the element holding the bio
    //with the passed id value
    storeBio = document.getElementById(`bio--${idString}`);
    console.log(storeBio);
  });
};//end for loop


//set event listener for input to reset the text on enter press
userInput.addEventListener('keyup', function(event) {

  //set the userInput text to the selected people el's bio
  storeBio.innerHTML = userInput.value;

  //conditional statement that tests if enter key was pressed
  if ( event.keyCode === 13 ) {
    userInput.value = "";
  }//end if statement
});
