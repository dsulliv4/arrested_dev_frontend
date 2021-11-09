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
});

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

const getQuestions = () => {
  fetch("http://localhost:3000/api/v1/questions")
    .then((res) => res.json())
    .then((data) => {
      let question = "";
      console.log(data);
      /*data.map(function (qInfo) {
        //console.log(qInfo);
        question += `<div> <h3> ${qInfo.content} </h3> </div> `;
      });*/
      let tab1content = "";
      let tab2content = "";
      let tab3content = "";
      for (i = 0; i < 9; i++) {
        console.log(i);
        if (i % 3 == 0 && i != 0) {
          let tab_id = "tab" + i / 3;
          console.log(tab_id);
          let qContainer = document.getElementById(tab_id);
          qContainer.innerHTML = tab1content;
          console.log(qContainer);
          tab1content = "";
        }
        tab1content += "<h2>" + data[i].content + "</h2>";
        tab1content +=
          "<input type='radio' name='q" +
          i +
          "' value='" +
          data[i].answer_a +
          "' /> " +
          data[i].answer_a;
        tab1content +=
          " <input type='radio' name='q" +
          i +
          "' value='" +
          data[i].answer_b +
          "' />" +
          data[i].answer_b;
        tab1content +=
          " <input type='radio' name='q" +
          i +
          "' value='" +
          data[i].answer_c +
          "' />" +
          data[i].answer_c;
        console.log(tab1content);
      }
      let qContainer = document.getElementById("tab3");
      qContainer.innerHTML = tab1content;
      //qContainer.innerHTML = question;
    });
};

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
  const button = document.querySelector("#returnMain");
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
