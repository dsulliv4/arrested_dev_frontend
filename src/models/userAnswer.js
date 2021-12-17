class UserAnswer {
  constructor(attributes = {}) {
    this.question_id = attributes.question_id;
    this.user_input = attributes.user_input;
    this.correct = attributes.correct;
  }

  get attributes() {
    return {
      question_id: this.question_id,
      user_input: this.user_input,
    };
  }
}

export default UserAnswer;

// answers = [...]
// const correct = answers.filter((a) => a.correct).length