import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MessageModel} from "../message-model";
import {Observable} from "rxjs";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tx-parent-default',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ParentDefaultComponent implements OnInit {

  @Input()
  public ivalue: number;

  @Input()
  public message: MessageModel;

  @Input()
  public message1$: Observable<MessageModel>;

  @Input()
  public message2$: Observable<MessageModel>;

  // @Input()
  // public message1$: Observable<MessageModel>;

  public title = 'CHANGE STRATEGY: DEFAULT';
  public counter = 0;
  public subs;

  constructor() {
  }

  ngOnInit() {

    setInterval(() => {
      this.counter++;
    }, 500);
    this.message2$.subscribe((x) => this.subs = x);


  }

  public setCounter() {
    this.counter = 1;
  }
}
