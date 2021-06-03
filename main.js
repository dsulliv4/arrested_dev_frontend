const stepOne = () => {
  const yesButton = document.querySelector("#yes");
  yesButton.addEventListener("click", () => {
    const stepTwoDiv = document.querySelector("#stepTwo");
    const stepOneDiv = document.querySelector("#stepOne");
    stepTwoDiv.classList.remove("hideEle");
    stepOneDiv.classList.add('hideEle');

  });
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  stepOne();
  readyNoButton();
});

const readyNoButton = () => {
  const button = document.querySelector("#no");
    button.addEventListener("click", () => {
     document.querySelector("#tobiasCrying").classList.remove("hideEle")
     const stepOneDiv = document.querySelector("#stepOne");
     stepOneDiv.classList.add('hideEle');
    })
};

const audioPLay = () => {
    const audio = document.querySelector('audio');
    audio.

}