class UserAnswerView {
  //
  constructor(userAnswer) {
    this.userAnswer = userAnswer;
  }

  render() {
    return `
    <div class ="all_answers">
      <div class="user_answer">
          ${this.userAnswer.question_id}. ${this.userAnswer.correct ? 'Right! ' : 'Totally wrong'} <br>
        </div>
    </div>
     
    
    `;
  }
}

export default UserAnswerView;