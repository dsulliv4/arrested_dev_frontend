import QuestionView from './questionView.js'

class RoundView {
  constructor(round) {
    this.round = round;
  }
  render() {
    const form = `<form id="round-form-${this.round.id}" class=question-form>
    <h1> ${this.round.title} </h1>
    ${this.round.questions
      .map((question) => {
        return new QuestionView(question).render();
      })
      .join('')}
      <input type="submit">Next Round</input> 
  </form> 
     `;

    return form;
  }
}

//
export default RoundView;
