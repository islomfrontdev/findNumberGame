let number = document.getElementById("number");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let amountChance = document.getElementById("chance");
let equalText = document.getElementById("equalText");
let trueModal = document.getElementById("modalBoxTrue");
let gameOver = document.getElementById("modalBoxGameOver");
let enterNumber = document.getElementById("enterNumber");
let stickerImg = document.getElementById("sadImg");
let chance = 5;
number.focus();
amountChance.innerHTML = chance;
console.log(randomNumber);
function check() {
  if (chance > 0) {
    if (number.value == randomNumber) {
      trueModal.classList.remove("d-none");
      equalText.classList.add("d-none");
    } else {
      let numImg = document.getElementById("img" + chance);
      numImg.classList.add("d-none");
      if (number.value != "") {
        if (number.value > randomNumber)
          equalText.innerHTML = "Siz o'ylagan sondan kichik";
        else equalText.innerHTML = "Siz o'ylagan sondan katta";
        number.value = "";
        number.focus();
        chance--;
        stickerImg.src = "./images/sad" + chance + ".png";
      } else {
        enterNumber.classList.remove("d-none");
        equalText.classList.add("d-none");
      }
    }

    if (chance > 0) amountChance.innerHTML = chance;
    else {
      stickerImg.src = "./images/sad0.gif";
      gameOver.classList.remove("d-none");
      equalText.classList.add("d-none");
      amountChance.innerHTML = chance;
    }
  } else {
    alert("Afsuski o'yinni davom ettira olmaysiz ");
    number.value = "";
    number.focus();
  }
}
function reload() {
  chance = 5;
  amountChance.innerHTML = chance;
  equalText.innerHTML = "";
  number.value = "";
  number.focus();
  trueModal.classList.add("d-none");
  gameOver.classList.add("d-none");
  stickerImg.src = "./images/sad5.png";
  for (let i = 1; i <= 5; i++) {
    document.getElementById("img" + i).classList.remove("d-none");
  }
}
function continueGame() {
  let numImg = document.getElementById("img" + chance);
  numImg.classList.remove("d-none");
  enterNumber.classList.add("d-none");
  equalText.classList.remove("d-none");
  number.focus();
}
