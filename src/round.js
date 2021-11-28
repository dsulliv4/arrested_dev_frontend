class Round {
  constructor(attributes = {}) {
    this.id = attributes['id']
    this.title = attributes['title']
    this.questions = attributes.questions.map((q) => { return new Question(q) } )
  }
}

export default Round