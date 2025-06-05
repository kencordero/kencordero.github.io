export class Card {
    public suit: '♥️' |  '♦️' | '♣️' | '♠️';
    rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

    constructor(suit: '♥️' | '♦️' | '♣️' | '♠️', rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A') {
        this.suit = suit;
        this.rank = rank;
    }
    
    private toString(): string {
        return `${this.rank}${this.suit}`;
    }

    get image(): string {
        // Returns the image path for the card
        let rankToken: string;
        switch (this.rank) {
            case 'A': 
                rankToken = 'ace';
            break;
            case 'K':
                rankToken = 'king';
            break;
            case 'Q':
                rankToken = 'queen';
            break;
            case 'J':
                rankToken = 'jack';
            break;
            default:
                rankToken = this.rank;
            break;
        }
        let suitToken: string;
        switch (this.suit) {
            case '♥️':
                suitToken = 'hearts';
            break;
            case '♦️':
                suitToken = 'diamonds';
            break;
            case '♣️':
                suitToken = 'clubs';
            break;
            case '♠️':
                suitToken = 'spades';
            break;
            default:
                suitToken = '';
            break;
        }
        return `${rankToken}_of_${suitToken}.svg`;
    }
}