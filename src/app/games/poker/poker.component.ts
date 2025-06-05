import { Component } from '@angular/core';
import { Card } from '../models/card.model';
import { MatMenu } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poker',
  standalone: true,
  imports: [MatMenu, CommonModule],
  templateUrl: './poker.component.html',
  styleUrl: './poker.component.css'
})
export class PokerComponent {
  deck: Card[] = [];
  playerHand: Card[] = [];
  discardIndex: number = 0;
  discardPile: Card[] = [];
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

  animateCard(card: Card): void {
    // make card flip
    const cardElement = document.querySelector(`.card-${card.rank}-${card.suit}`);
    if (cardElement) {
      cardElement.classList.add('flip');
      setTimeout(() => {
        cardElement.classList.remove('flip');
      }, 1000); // Adjust the duration as needed
    }
  }

  calculateHandScore(hand: Card[]): number {
    let score = 0;
    for (const card of hand) {
      // add value of card to score
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
