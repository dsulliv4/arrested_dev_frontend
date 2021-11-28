class QuestionView {
  // TODO
  constructor(question) {
    this.quesiton = question;
  }

  // TODO
  render() {
    // 1 make an html container for the question data
    // 2 add the question data to the container
    // 3 return the container
    
    let html = `<div>
                    <span>${this.question.content}</span>
                    ${this.question.answer_1}<input type="radio" value="1"/>
                    ${this.question.answer_2}<input type="radio" value="2"/>
                    ${this.question.answer_3}<input type="radio" value="3"/>
                <div>`;

   return html
  }
}