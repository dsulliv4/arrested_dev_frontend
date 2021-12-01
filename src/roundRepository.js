import Round from './round.js';

class RoundRepository {
  async fetchRound(roundNumber) {
    const response = await fetch(
      `http://localhost:3000/api/v1/rounds/${roundNumber}`
    );
    const json = await response.json();
    //const roundAttributes = {};
    //roundAttributes.id = json.data.id;
    // roundAttributes.name = json.data.name;
    //roundAttributes.questions = json.data.relationships.questions.data;
    // console.log(roundAttributes);
    return new Round(json);
  }
}

export default RoundRepository;

// data: {id: "1", type: "round", relationships: {,…}}
// id: "1"
// relationships: {,…}
// questions: {data: [{id: "1", type: "question"}, {id: "2", type: "question"}, {id: "3", type: "question"}]}
// type: "round"
