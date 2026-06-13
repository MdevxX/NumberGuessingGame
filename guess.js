const numberEl = document.getElementById("number");
const guessBtn = document.getElementById("guess-btn");
const resetBtn = document.querySelector(".reset");
const resultMsg = document.querySelector(".result");

function computerChoice() {
  const choice = Math.floor(Math.random() * 10) + 1;
  return choice;
}

let numberOfTrials = 0;

// console.log(computerChoiceSaved);

guessBtn.addEventListener("click", () => {
  let computerChoiceSaved = computerChoice();
  let ogNumber = Number(numberEl.value);
  if (numberEl.value === "") {
    alert("Please input a Valid Number");
    return;
  }
  numberOfTrials++;
  if (ogNumber === computerChoiceSaved) {
    resultMsg.textContent = `You Got it Right! in ${numberOfTrials} tries`;
    resetBtn.style.display = "block";
    guessBtn.style.display = "none";
  } else {
    numberEl.value = "";
    resultMsg.textContent = `Try Again! ${numberOfTrials} tries`;
  }
});

resetBtn.addEventListener("click", () => {
  numberEl.value = "";
  numberOfTrials = 0;
  resultMsg.textContent = "";
  resetBtn.style.display = "none";
  guessBtn.style.display = "block";
});
