import { Component, HostListener } from '@angular/core';

const generateSeed = () : number[][] => Array(13).fill(Array(13).fill(0));


@Component({
  selector: 'hand-chart',
  templateUrl: './hand-chart.component.html',
  styleUrls: ['./hand-chart.component.css']
})

export class HandChartComponent {
  isMouseDown: boolean= false;

  @HostListener('mousedown') onMouseDown() {
    this.isMouseDown = true;
  }

  @HostListener('mouseup') onMouseUp() {
    this.isMouseDown = false;
  }

  //this is here because of a small bug where if
  //we hold mousedown and leave the grid area 
  //the mouseup doesn't register...
  //at first I just put the mouseup/down listener 
  //on the root component but this seems better 
  @HostListener('mouseleave') onMouseLeave(){
    this.isMouseDown = false;
  }

  x: number;
  y: number;
  seed: number[][] = generateSeed();
  constructor() {}
}

