window.addEventListener('load', function(event) { 
    let playGameButton = document.getElementById('showDirections');
    playGameButton.addEventListener('click', function(event) {
      // 'this' means the object that just ran this function.
      showGameDirections(this);
    })
  });
  function showGameDirections(playGameButton) {
    let gameDirections = document.getElementById('gameDirections');
    gameDirections.classList.remove('hide');
    playGameButton.classList.add('hide');
    readyGame();
  }
  function readyGame() { // add event listener to the start button
    let startButton = document.getElementById('startGame');
    startButton.addEventListener('click', function(event) {
      showQuestion(this);
    })
  }
  window.addEventListener('load',function(event){
      let yesbtn = document.getElementById('yes');
      yesbtn.addEventListener('click',function(event){
        showinstruction();
      })


    });
    function showinstruction(){
        document.getElementById('enter-question').classList.add('hideEle');
        document.getElementById('gameRule').classList.remove("hideEle");
    }
  function showQuestion(startButton) { // start the process to show the next question, the first question if its the start of the game
    startButton.classList.add('hide');
    getQuestions();
  }
  function getQuestions() {
    fetch('http://localhost:3000/api/v1/questions') // get the list of questions
    .then(res => res.json())
    .then(data => {
      let questionNumber = document.getElementById('questionNumber'); //to keep track of the question
      if (questionNumber) {
        questionNumber = parseInt(questionNumber.dataset.qnumber) + 1;
      }else {
        questionNumber = 0;
      }
      displayQuestion(data[questionNumber], questionNumber); // pass in the data from the api and the question number
    })
  }
  function displayQuestion(questionData, number) {
    // create a string version of the question html for injecting in the page via javascript.
    let question = `
      <div id="questionNumber" data-qnumber="${number}" class="hide"></div>
      <div class="question">
        <p>
          ${questionData.content}
        </p>
        <ul>
          <li><input type="radio" name="answer" value="a"/>${questionData.answer_a}</li>
          <li><input type="radio" name="answer" value="b"/>${questionData.answer_b}</li>
          <li><input type="radio" name="answer" value="c"/>${questionData.answer_c}</li>
        </ul>
        <button id="checkAnswer" onClick="checkAnswer('${questionData.correct_answer}')">Am I right?</button>
      </div>
    `;
    let gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = question;  // inject the above html into page
  }
  function checkAnswer(correct_answer) { // correct answer passed in from the onClick callback of the button line 58
    let givenAnswer = document.querySelectorAll('input[type=radio]:checked');  // get the answer they checked
    if (givenAnswer.length && givenAnswer[0].value == correct_answer.toLowerCase()) { // compare the given answer to correct answer
      alert("You got it right!");
      showNextQuestion();
    }else {
      alert('Wrong answer. Try again')
    }
  }
  function showNextQuestion() {
    getQuestions();  // start the process over again. It will determine which question to show base on line 47
  }