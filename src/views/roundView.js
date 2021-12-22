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
      <br>
      <input type="submit"></input> 
  </form> 
     `;

    return form;
  }
}

//
export default RoundView;
