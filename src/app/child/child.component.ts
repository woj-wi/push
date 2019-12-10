import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from "../message-model";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tx-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  public ivalue: number;
  @Input()
  public message: MessageModel;
  public counter = 0;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 200);
  }

}
