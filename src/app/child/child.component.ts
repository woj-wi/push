import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tx-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  public ivalue: number;

  public counter = 0;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 200);
  }

}
