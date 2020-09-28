import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa3',
  templateUrl: './tarefa3.component.html',
  styleUrls: ['./tarefa3.component.css']
})
export class Tarefa3Component implements OnInit {
  buttonClickCounter = 0;
  clickArray = [];
  constructor() { }

  ngOnInit() {
  }

  isParagraphDisplay() {
    return this.buttonClickCounter % 2 === 0;
  }

  onDisplayDetailsClick() {
    this.buttonClickCounter++;
    this.clickArray.push(this.buttonClickCounter);
  }

  getBackgroundColorLog(click) {
    if (click >= 5) {
      return 'blue';
    }
    return 'none';
  }

}
