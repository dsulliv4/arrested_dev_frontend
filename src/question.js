class Question {

  constructor(id, question_number, content, answer_a, answer_b, answer_c){
      this.id = id;
      this.question_number = question_number;
      this.content = content;
      this.answer_a = answer_a;
      this.answer_b = answer_b;
      this.answer_c = answer_c;
   }
  
}

renderQuestion(question) {
  DOMElements.quiz_container.style.display = "table";
  const q = document.createElement("p");

  q.innerHTML = `${question.question_number}. ${question.content}`;
  DOMElements.quiz_form.appendChild(q);

  for (let i = 1; i < 4; i++) {
    const div = document.createElement("div");
    const answer = document.createElement("input");
    const answer_text = document.createElement("label");

    answer.setAttribute("type", "radio");
    answer.setAttribute("name", question.id);
    answer.setAttribute("class", "form-check-input");
    answer.setAttribute("id", "user_input");
    answer_text.className = "form-check-label";


    switch (i) {
      case 1:
        answer.setAttribute("value", "A");
        answer_text.innerText = ` ${question.answer_a}`;
        break;
      case 2:
        answer.setAttribute("value", "B");
        answer_text.innerText = ` ${question.answer_b}`;
        break;
      case 3:
        answer.setAttribute("value", "C");
        answer_text.innerText = ` ${question.answer_c}`;
        break;

  
    };

