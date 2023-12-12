class Card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}
let cards=[new Card("K","Heart"),
new Card("K","diamond"),
new Card("K","spades"),
new Card("K","clubs"),
new Card("A","Heart"),
new Card("K","diamond"),
new Card("K","spades"),
new Card("K","clubs"),];

console.log(cards[0].value+" "+cards[0].suit);
//printing all cards using forEach..
cards.forEach(card=>console.log(`${card.value} ${card.suit}`));