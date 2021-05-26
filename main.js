const stepOne = () => {
  const yesButton = document.querySelector("#yes");
  yesButton.addEventListener("click", () => {
    const stepTwoDiv = document.querySelector("#stepTwo");
    const stepOneDiv = document.querySelector("#stepOne");
    stepOneDiv.classList.add("invisible");
    debugger;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  stepOne();
});
