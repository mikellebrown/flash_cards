const addCard = document.getElementById(".addButton");
// object.addEventListener("click", add);
// var flashCard;
// var deleteCard;
// var flipCard;
var addCard = document.querySelector(".add_button");
var input = document.querySelector("#card_input")
var backInput = document.querySelector("#back_input")
addCard.addEventListener("click", function(event){
  event.preventDefault();
  var container = document.querySelector(".container");
  var newC = document.createElement('div')
  newC.innerHTML = `
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h1> ${input.value}</h1>
      </div>
      <div class="flip-card-back">
        <h1> ${backInput.value} </h1>
        <button id=delete class=delete type="button"> Delete Card </button>
      </div>
    </div>
  </div>
  `
  container.appendChild(newC);
  // debugger
})
