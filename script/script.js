/* JavaScript for the order page */
//Declare variable for the order form
let orderForm = document.querySelector(".order-form");

//Add an event listener to display a message when the form is submitted
if(orderForm){
  orderForm.addEventListener("submit", function(){
    alert("Your order has been received!");
  });
};



/* JavaScript for the review page */
//Store the comments and commentors' names in arrays
let comments = [
  "7UP is always crisp and never syrupy, making it the perfect option for anyone who wants to quench their thirst without getting too much sugar.",
  "I absolutely love 7UP! It has a unique flavor that is light, crisp, and perfect for any occasion. The amount of fizz is also just right to make you feel re-energized.",
  "Whether you need a drink on a hot summer day or a mixer for cocktails, 7UP never disappoints. It is neither too sweet or too sour, just the perfect balance.",
  "For any party or gathering, 7UP is a crowd-pleaser that everyone can enjoy. It mixes well with all kinds of food and snacks.",
  "I've been drinking 7UP for years and it's still my go-to soda. The refreshing lemon-lime flavor always hits the spot on a hot day."
];

let commentors = [
  "Sarah T., Toronto, ON",
  "Johnnie D., Edmonton, AB",
  "John L., Vancouver, BC",
  "Emilie K., Halifax, NS",
  "Nikolas V., Montreal, QC"
];

//Declare variables for the comment text, commentor's name, and the previous and next buttons in the DOM
let comment = document.getElementById("comment-text");
let commentor = document.getElementById("commentor");
let previousBtn = document.querySelector(".previous-btn");
let nextBtn = document.querySelector(".next-btn");
let count = 0;          //this variable will change either the previous button or the next button is clicked                         

//Declare a function for changing the comment text and commentor's name
function showComment(count){
  if (count % 5 === 0){
    comment.textContent = comments[0];
    commentor.textContent = commentors[0];
  }

  else if (count % 5 === 1 || count % 5 === -1){
    comment.textContent = comments[1];
    commentor.textContent = commentors[1];
  }

  else if (count % 5 === 2 || count % 5 === -2){
    comment.textContent = comments[2];
    commentor.textContent = commentors[2];
  }

  else if (count % 5 === 3 || count % 5 === -3){
    comment.textContent = comments[3];
    commentor.textContent = commentors[3];
  }

  else if (count % 5 === 4 || count % 5 === -4){
    comment.textContent = comments[4];
    commentor.textContent = commentors[4];
  }
};

//Add event listener to the previous button and the next button
if(previousBtn){
  previousBtn.addEventListener("click", function(){
    console.log("clicked");
    count--;
    showComment(count);
  });
};

if(nextBtn){
  nextBtn.addEventListener("click", function(){
    console.log("clicked");
    count++;
    showComment(count);
  });
};




