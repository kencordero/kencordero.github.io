import { Component } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-samich',
  standalone: true,
  imports: [],
  templateUrl: './samich.component.html',
  styleUrl: './samich.component.css'
})
export class SamichComponent {
  deck: Card[] = [];
  playerHand: Card[] = [];
  computerHand: Card[] = [];
  playerScore: number = 0;
  computerScore: number = 0;
  gameOver: boolean = false;
  
  constructor() {
    this.setupGame();
  }

  dealCards(): void {
    this.playerHand = [];
    this.computerHand = [];
    for (let i = 0; i < 5; i++) {
      this.playerHand.push(this.deck.pop()!);
      this.computerHand.push(this.deck.pop()!);
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

  calculateHandScore(hand: Card[]): number {
    let score = 0;
    for (const card of hand) {
      if (card.rank === 'A') {
        score += 11; // Ace is worth 11 points
      } else if (['K', 'Q', 'J'].includes(card.rank)) {
        score += 10; // Face cards are worth 10 points
      } else {
        score += parseInt(card.rank); // Number cards are worth their face value
      }
    }
    return score;
    
  }

}
