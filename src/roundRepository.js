import Round from "./round.js"

class RoundRepository {

  async fetchRound(roundNumber) {
    const response = await fetch(`http://localhost:3000/rounds/${roundNumber}`)
    const json = await response.json()
    return new Round(json)
  }


}

export default RoundRepository 