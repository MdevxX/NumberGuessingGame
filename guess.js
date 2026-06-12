const numberEl = document.getElementById("number");
const guessBtn = document.getElementById("guess-btn");
const resultMsg = document.querySelector(".result");

function computerChoice() {
  const choice = Math.floor(Math.random() * 10) + 1;
  return choice;
}

let numberOfTrials = 0;

// console.log(computerChoiceSaved);
function reset(){
    
}

guessBtn.addEventListener("click", () => {
  let computerChoiceSaved = computerChoice();
  let ogNumber = Number(numberEl.value);
  if (numberEl.value === "") {
    alert("Please input a Valid Number");
    return;
  }
  numberOfTrials++;
  if (ogNumber === computerChoiceSaved) {
    numberEl.value = "";
    resultMsg.textContent = `You Got it Right! in ${numberOfTrials} tries`;
    numberOfTrials = 0;
  } else {
    numberEl.value = "";
    resultMsg.textContent = `Try Again! ${numberOfTrials} tries`;
  }
});
