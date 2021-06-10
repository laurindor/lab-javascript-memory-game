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

/*sort method would be more accurate or this one "Fisher yates method"

shuffleCards() {
for (let i= this.cards.lenght -1; i >0; i--) ¨{
  const j = Math.floor(Math.random() * (i + 1));
  [this.cards[i], array[j]] = [this.cards[j], this.cards[i]];
  }
}

*/

  checkIfPair(card1, card2) {
    this.pairsClicked += 1 //counter of the number of tries
    if (card1 === card2) {
      this.pairsGuessed += 1 //counter of the pairs you have guessed
      return true 
    } else {
      return false
    }
  }

  resetClickedPair() {
    this.pickedCards = [];
  }
 /* checkIfFinished(){
    if(this.cards.length === 24)
    return false
   if(this.pairsGuessed === this.cards.length/2)
      return true
    else
      return false
  }
}*/
//THIS ONE IS BETTER

checkIfFinished() {
  let correctPairs = this.pairsGuessed;
  if (correctPairs < this.cards.length / 2) {
    return false;
  } else {
    return true;
  }
}
}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
