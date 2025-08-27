import { Component } from '@angular/core';
import { Card } from '../models/card.model';


@Component({
    selector: 'ken-poker',
    imports: [],
    templateUrl: './poker.component.html',
    styleUrl: './poker.component.css'
})
export class PokerComponent {
  deck: Card[] = [];
  playerHand: Card[] = [];
  discardIndex: number = 0;
  discardPile: Card[] = [];
  playerScore: number = 0;
  
  constructor() {
    this.setupGame();
  }

  dealCards(): void {
    this.playerHand = [];
    for (let i = 0; i < 5; i++) {
      this.playerHand.push(this.deck.pop()!);
    }
  }

  setupGame(): void {
    this.initializeDeck();
    this.shuffleDeck();
    this.dealCards();
  }

  initializeDeck(): void {
    const suits: ['♥️', '♦️', '♣️', '♠️'] = ['♥️', '♦️', '♣️', '♠️'];
    const ranks: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.deck = [];
    for (const suit of suits) {
      for (const rank of ranks) {
        this.deck.push(new Card(suit, rank));
      }
    }
  }

  shuffleDeck(): void {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  discardCard(card: Card): void {
    const index = this.playerHand.indexOf(card);
    this.discardIndex = index;
    if (index > -1) {
      this.playerHand.splice(index, 1);
      this.discardPile.push(card);
    }
  }

  drawFromDeck(): void {
    if (this.deck.length > 0) {
      const drawnCard = this.deck.pop();
      if (drawnCard) {
        this.playerHand.splice(this.discardIndex, 0, drawnCard).push(drawnCard);
      }
    }
  }

  identifyPokerHand(hand: Card[]): string {
    let tempHand = [...hand]; // Create a copy of the hand to avoid modifying the original
    // identify royal flush, straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, one pair, high card
    if (tempHand.length !== 5) {
      throw new Error('A poker hand must consist of exactly 5 cards.');
    }
    // Sort the hand by rank
    tempHand.sort((a, b) => {
      const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      return rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank);
    });
    // Check for flush (all cards of the same suit)
    const isFlush = tempHand.every(card => card.suit === tempHand[0].suit);
    // Check for straight (consecutive ranks)
    const isStraight = tempHand.every((card, index) => {
      if (index === 0) return true; // First card, no previous card to compare
      const previousCard = tempHand[index - 1];
      const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      // catch the case where Ace can be low (A, 2, 3, 4, 5)
      if (card.rank === 'A' && previousCard.rank === '5') {
        return true; // Ace can be low in this case   
      } 
      return rankOrder.indexOf(card.rank) === rankOrder.indexOf(previousCard.rank) + 1;
    });
    // Check for pairs, three of a kind, four of a kind
    const rankCount: { [key: string]: number } = {};
    tempHand.forEach(card => {
      rankCount[card.rank] = (rankCount[card.rank] || 0) + 1;
    });
    const counts = Object.values(rankCount).sort((a, b) => b - a); // Sort counts in descending order
    if (isFlush && isStraight && tempHand[0].rank === '10' && tempHand[4].rank === 'A') {
      return 'Royal Flush';
    } else if (isFlush && isStraight) {
      return 'Straight Flush';
    } else if (counts[0] === 4) {
      return 'Four of a Kind';
    } else if (counts[0] === 3 && counts[1] === 2) {
      return 'Full House';
    } else if (isFlush) {
      return 'Flush';
    } else if (isStraight) {
      return 'Straight';
    } else if (counts[0] === 3) {
      return 'Three of a Kind';
    } else if (counts[0] === 2 && counts[1] === 2) {
      return 'Two Pair';
    } else if (counts[0] === 2) {
      return 'Pair';
    } else {
      return 'High Card';
    }
  }
}
