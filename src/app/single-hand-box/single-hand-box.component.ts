import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Hand } from '../hand';

const numberToCard = (num: number) =>  {
  switch(num) {
    case 0:
      return 'A';
    case 1:
      return 'K';
    case 2: 
      return 'Q';
    case 3:
      return 'J';
    case 4:
      return 'T';
    case 5: 
      return '9';
    case 6:
      return '8';
    case 7:
      return '7';
    case 8:
      return '6';
    case 9:
      return '5';
    case 10:
      return '4';
    case 11:
      return '3';
    case 12:
      return '2';
    default:
      throw Error(`error generating card from ${num}`);
  };
}

const createHand = (x: number, y: number) => {
  let handType: string;
  if (x > y) handType = 'offsuit';
  else if (x < y) handType = 'suited';
  else handType = '';

  return {
    type: handType,
    cardOne: x <= y ? numberToCard(x) : numberToCard(y),
    cardTwo: x <= y ? numberToCard(y) : numberToCard(x)
  };
}

@Component({
  selector: 'single-hand-box',
  templateUrl: './single-hand-box.component.html',
  styleUrls: ['./single-hand-box.component.css']
})

export class SingleHandBox implements OnInit {
  @Input() x: number;
  @Input() y: number;
  @Input() isMouseDown: boolean;


  @HostListener('mouseover') onMouseOver () {
   if(this.isMouseDown) this.select();
  }
  
  hand: Hand;

  isSelected: boolean = false;

  //TODO: small UX annoyance when selecting a bunch
  //of hands quickly.... maybe add a setTimeout debounce
  //kind of thing
  //this works perfect when selecting vertically
  //but not horizontally
  select() :void {
    this.isSelected = !this.isSelected
  }

  ngOnInit() {
    this.hand = createHand(this.x,this.y);
  }
}

