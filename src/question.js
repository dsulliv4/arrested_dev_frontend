class Question {
  constructor( attributes = {} ) {
    this.id = attributes.id;
    this.question_number = attributes.question_number;
    this.content = attributes.content;
    this.answer_a = attributes.answer_a;
    this.answer_b = attributes.answer_b;
    this.answer_c = attributes.answer_c;
    this.correct_answer = attributes.correct_answer;
  }
}

export default Question