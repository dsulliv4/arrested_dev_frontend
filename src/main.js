import RoundView from "./roundView.js"
import Round from "./round.js"
import RoundRepository from "./roundRepository.js"

const stepOne = () => {
  const yesButton = document.querySelector("#yes");
  yesButton.addEventListener("click", () => {
    const stepTwoDiv = document.querySelector("#stepTwo");
    const stepOneDiv = document.querySelector("#stepOne");
    stepTwoDiv.classList.remove("hideEle");
    stepOneDiv.classList.add("hideEle");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  stepOne();
  readyNoButton();
  continueBtn();
  exitMain();
  returnMain();
  yesBtn();
  // formSubmit();
  loadRound(currentRound);
});

let currentRound = 1;

const loadRound = (roundNumber) => {
  const roundRepository = new RoundRepository();
  roundRepository.fetchRound(currentRound).then((round => {
    const roundView = new RoundView(round);
    const form =  document.getElementById('form-container');
    form.insertAdjacentHTML('beforeend', roundView.render()); 
  }))
  

}





const readyNoButton = () => {
  const button = document.querySelector("#no");
  button.addEventListener("click", () => {
    document.querySelector("#tobiasCrying").classList.remove("hideEle");
    document.querySelector("#returnBtn").classList.remove("hideEle");
    const stepOneDiv = document.querySelector("#stepOne");
    stepOneDiv.classList.add("hideEle");
  });
};

const audioPLay = () => {
  const audio = document.querySelector("audio");
};



// *// const formSubmit = () => {
//   const regForm = document.querySelector('#regForm Btn');
//   regForm.addEventListener("onSubmit", (e) => {
//     e.preventDefault()
//     console.log('hello');
//   }); //*
// };


const yesBtn = () => {
  const button = document.querySelector("#yes");
  button.addEventListener("click", () => {
    console.log("IN HERE");
    document.querySelector(".container").classList.remove("hideEle");
  });
};

const continueBtn = () => {
  const button = document.querySelector("#continue");
  button.addEventListener("click", () => {
    document.getElementById("regForm").style.display = "block";
    getQuestions();
    var hideRules = document.getElementById("stepTwo");
    console.log(hideRules);
    hideRules.classList.add("hideEle");
  });
};

const returnMain = () => {
  const button = document.querySelector("#returnBtn");
  button.addEventListener("click", () => {
    window.location = "index.html";
  });
};

const exitMain = () => {
  const button = document.querySelector("#quit");
  button.addEventListener("click", () => {
    window.location = "index.html";
  });
};
