class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() { 
    if (this.cards) {
      let m = this.cards.length - 1
      while (m) {
          const i = Math.floor(Math.random()*m)
          const randomElement = this.cards[i]
          this.cards[i] = this.cards[m]
          this.cards[m] = randomElement
          m--
      }
  }
}


  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true 
    } else {
      return false
    }
  }

  checkIfFinished(){
    if(this.cards.length === 24)
    return false
   if(this.pairsGuessed === this.cards.length/2)
      return true
    else
      return false
  }
}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
