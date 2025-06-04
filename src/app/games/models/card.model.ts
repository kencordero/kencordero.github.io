export class Card {
    public suit: '♥️' |  '♦️' | '♣️' | '♠️';
    rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
    value: number; // Numerical value for scoring, e.g., 2-10 for numbered cards, 10 for face cards, 11 for Ace

    constructor(suit: '♥️' | '♦️' | '♣️' | '♠️', rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A') {
        this.suit = suit;
        this.rank = rank;
        this.value = this.calculateValue();
    }
    
    private calculateValue(): number {
        if (this.rank === 'A') {
            return 11; // Ace can be high or low, but we'll treat it as high for now
        } else if (['K', 'Q', 'J'].includes(this.rank)) {
            return 10; // Face cards are worth 10 points
        } else {
            return parseInt(this.rank); // Number cards are worth their face value
        }
    }
}