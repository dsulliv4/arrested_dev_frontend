import QuestionView from './questionView.js'

class RoundView {
  constructor(round) {
    this.round = round;
  }
  render() {
    const form = `<form class=question-form>
    <h1> ${this.round.title} </h1>
    ${this.round.questions
      .map((question) => {
        return new QuestionView(question).render();
      })
      .join('')}
  </form> 
     `;

    return form;
  }
}

//
export default RoundView;
