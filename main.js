class Deck {
  constructor() {
      this.deck = []
      this.reset()
      this.shuffle()
  }

  reset = () => {
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
      
      for (let suit in suits) {
          for (let value in values) {
              this.deck.push(`${values[value]} of ${suits[suit]}`)
          }
      }
  }

  shuffle = () => {
      const { deck } = this
      let m = deck.length, i 

      while (m) {
          i = Math.floor(Math.random() * m--) 
          console.log(i, m)
//             [deck[m], deck[i]] = [deck[i], deck[m]] 
          let temp = deck[m] 
          deck[m] = deck[i]
          deck[i] = temp 
      }

      return this 
  }

  deal() {
      return this.deck.pop() 
  }
}

let deck1 = new Deck() 
deck1.shuffle()
console.log(deck1.deck) 
deck1.deal()
console.log(deck1.deck) 
deck1.reset()
console.log(deck1.deck)