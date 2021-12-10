import UserAnswer from './userAnswer.js';

class UserAnswerRepository {
  async saveUserAnswer(userAnswer) {
    const jsonData = JSON.stringify({ user_answer: userAnswer.attributes });
    const answer = await fetch(`http://localhost:3000/api/v1/user_answers`, {
      method: 'POST',
      body: jsonData,
    });
  }
}

// return a div displaying user's stats?

export default UserAnswerRepository;
