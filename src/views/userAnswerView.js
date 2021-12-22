class UserAnswerView {
  //
  constructor(userAnswer) {
    this.userAnswer = userAnswer;
  }

  render() {
    return `
      <div class="user_answer">
        <div class="user_answer__question_id">
          ${this.userAnswer.question_id}.
        </div>
        <div class="user_answer__correct">
          ${this.userAnswer.correct ? 'Right! ' : 'Totally wrong'}
        </div>
        <br>
        <br>
      </div>
    `;
  }
}

export default UserAnswerView;