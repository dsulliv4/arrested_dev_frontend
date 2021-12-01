class QuestionView {
  // TODO
  constructor(question) {
    this.question = question;
  }

  // TODO
  render() {
    // 1 make an html container for the question data
    // 2 add the question data to the container
    // 3 return the container

    let html = `
      <fieldset>
        <div>${this.question.content}</div>

        <label>
          ${this.question.answer_a} <input type="radio" value="a" name="question_${this.question.id}_answer"/>
        </label>
        <label>
        ${this.question.answer_b} <input type="radio" value="b" name="question_${this.question.id}_answer"/>
        </label>
        <label>
        ${this.question.answer_c} <input type="radio" value="c" name="question_${this.question.id}_answer" />
        </label>
      </fieldset>`;

    return html;
  }
}

export default QuestionView;
