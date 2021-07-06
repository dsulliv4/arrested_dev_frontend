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
  continueBtn();
  exitMain();
  returnMain();
});

const readyNoButton = () => {
  const button = document.querySelector("#no");
    button.addEventListener("click", () => {
     document.querySelector('#tobiasCrying').classList.remove("hideEle")
     document.querySelector('#returnBtn').classList.remove("hideEle")
     const stepOneDiv = document.querySelector("#stepOne");
     stepOneDiv.classList.add('hideEle');
    })
};

const audioPLay = () => {
    const audio = document.querySelector('audio');

}



const getQuestions = () => {
  fetch('http://localhost:3000/questions')
  .then(res => res.json() )
  .then(data => {
    let question = "";
    data.map(function(qInfo){
      question += `<div> <h3> ${qInfo.content } </h3> </div> `
    })
    let qContainer=  document.getElementById('quiz-container');
    qContainer.innerHTML= question;
  })
}

const continueBtn = () => {
  const button = document.querySelector('#continue');
  button.addEventListener("click", () => {
    getQuestions();

  });
}

const returnMain = () => {
  const button = document.querySelector("#returnMain")
  button.addEventListener("click", () => {
    window.location = 'index.html';
  });


}

const exitMain = () => {
  const button = document.querySelector("#quit")
  button.addEventListener("click", () => {
    window.location = 'index.html';
  });
}

