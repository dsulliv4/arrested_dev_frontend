import UserAnswer from '../models/userAnswer.js';

class UserAnswerRepository {
  async saveUserAnswer(userAnswer) {
    const jsonData = JSON.stringify({ user_answer: userAnswer.attributes });
    const answer = await fetch(`http://localhost:3000/api/v1/user_answers`, {
      method: 'POST',
      body: jsonData,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
  }

  async all() {
    const response = await fetch(
      `http://localhost:3000/api/v1/user_answers.json`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }
    );
    const jsonData = await response.json();
    return jsonData;
  }
}

// return a div displaying user's stats?

export default UserAnswerRepository;
