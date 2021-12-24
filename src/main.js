import RoundView from './views/roundView.js';
import Round from './models/round.js';
import RoundRepository from './repositories/roundRepository.js';
import UserAnswerRepository from './repositories/userAnswerRepository.js';
import UserAnswer from './models/userAnswer.js';
import UserAnswerView from './views/userAnswerView.js';

const stepOne = () => {
  const yesButton = document.querySelector('#yes');
  yesButton.addEventListener('click', () => {
    const stepTwoDiv = document.querySelector('#stepTwo');
    const stepOneDiv = document.querySelector('#stepOne');
    stepTwoDiv.classList.remove('hideEle');
    stepOneDiv.classList.add('hideEle');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  stepOne();
  readyNoButton();
  continueBtn();
  exitMain();
  returnMain();
  yesBtn();

  loadRound(currentRound);
});

let currentRound = 1;
const totalRounds = 3;
const roundRepository = new RoundRepository();
const userAnswerRepository = new UserAnswerRepository();

const loadRound = (roundNumber) => {
  roundRepository.fetchRound(currentRound).then((round) => {
    const roundView = new RoundView(round);
    const form = document.getElementById('form-container');
    form.insertAdjacentHTML('beforeend', roundView.render());
    console.log('handler added for round: ' + currentRound);
    form.addEventListener('submit',showQuestions);
  });
};

const showQuestions = (event) => {
  event.preventDefault();
  console.log('handler run for round: ' + currentRound);
  const answerForm = event.target;
  const data = new FormData(answerForm);

  if (incompleteForm()) {
    alert("Please answer all questions before moving to the next round.");
  }
  else {
    // window.formData = data;
    for (let QA of data.entries()) {
      const key = QA[0];
      const value = QA[1];
      const question_id = key.match(/\d+/)[0];
      const userAnswer = new UserAnswer({ question_id, user_input: value });
      userAnswerRepository.saveUserAnswer(userAnswer)
    }
    loadNextRound();
  }
}

const incompleteForm = () => {
  const questionAnswers = document.querySelectorAll('input[type=radio]');
  const questionsAnswered = Array.from(questionAnswers).filter(radio => radio.checked)
  return questionsAnswered.length != 3
}

const loadNextRound = () => {
  const removeForm = document.getElementById(`round-form-${currentRound}`);
  if (!removeForm) {
    console.warn('form not found');
    return;
  }
  removeForm.remove();
  currentRound++;
  if (currentRound <= totalRounds) {
    loadRound(currentRound);
  } else {
    const formContainer = document.getElementById('form-container');
    formContainer.insertAdjacentHTML('beforeend', '<h1>Your Results: </h1>');
    setTimeout(() => {
      userAnswerRepository.all().then((userAnswers) => {
        console.log('user answers fetched')
        let userAnswerView;
        userAnswers.forEach((userAnswer) => {
          userAnswerView = new UserAnswerView(userAnswer);
          formContainer.insertAdjacentHTML('beforeend', userAnswerView.render());
        });
      });
      showGameOverActions(formContainer);
    }, 500);
  }
};

const gameOverActions = () => {
  const actions = "<div> <button id='newGame'>New Game</button>   <button id='quit'>Quit</button></div> <br>";
  return actions;
}


const returnToHome = () => {
  const button = "<div> <button id='returnHome'>Return Home</button></div>";
  return button;
}




const showGameOverActions = (formContainer) => {
  formContainer.insertAdjacentHTML('beforeend', gameOverActions());
  let newGame = document.getElementById('newGame');
  let quit = document.getElementById('quit');
  
  newGame.addEventListener('click', function(e) {
    window.location.href = '/';
  })
  quit.addEventListener('click', function() {
    document.querySelector('#tobiasCrying').classList.remove('hideEle');
    document.querySelector('#form-container').classList.add('hideEle');
    const parentDiv = document.getElementById('tobiasImage');
    parentDiv.insertAdjacentHTML('beforeend', returnToHome());
    parentDiv.addEventListener('click', () => {
      window.location.href = '/';
    })

    
  })
}

const readyNoButton = () => {
  const button = document.querySelector('#no');
  button.addEventListener('click', () => {
    document.querySelector('#tobiasCrying').classList.remove('hideEle');
    document.querySelector('#returnBtn').classList.remove('hideEle');
    const stepOneDiv = document.querySelector('#stepOne');
    stepOneDiv.classList.add('hideEle');
  });
};

// build out this function
const audioPLay = () => {
  const audio = document.querySelector('audio');
};

const yesBtn = () => {
  const button = document.querySelector('#yes');
  button.addEventListener('click', () => {
    document.querySelector('.container').classList.remove('hideEle');
  });
};

const continueBtn = () => {
  const button = document.querySelector('#continue');
  button.addEventListener('click', () => {
    document.getElementById('stepTwo').classList.add('hideEle');
    document.getElementById('form-container').classList.remove('hideEle');   
  });
};

const returnMain = () => {
  const button = document.querySelector('#returnBtn');
  button.addEventListener('click', () => {
    window.location = 'index.html';
  })
};

const exitMain = () => {
  const button = document.querySelector('#quitgame');
  button.addEventListener('click', () => {
    window.location = 'index.html';
  });
};

const playAgain = () => {
  const button = document.createElement('button');
  button.addEventListener()
}