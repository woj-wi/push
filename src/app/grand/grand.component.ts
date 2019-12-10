import {Component, OnInit} from '@angular/core';
import {MessageModel} from '../message-model';
import {BehaviorSubject} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tx-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {
  public ivalue = 1;

  public message: MessageModel = new MessageModel();
  public message1: MessageModel = new MessageModel();
  public message2: MessageModel = new MessageModel();

  public stream1$: BehaviorSubject<MessageModel> = new BehaviorSubject<MessageModel>(this.message1);
  public stream2$: BehaviorSubject<MessageModel> = new BehaviorSubject<MessageModel>(this.message2);


  constructor() {
  }

  public ngOnInit() {
    this.message.value = 1;
    this.message1.value = 1;
  }

  public changeNumber() {
    this.ivalue++;
  }

  public changeObject() {
    this.message.value++;
  }

  public newObject() {
    const n = this.message.value;
    this.message = new MessageModel();
    this.message.value = n;
    this.message.value++;

  }

  public sendMessage1() {
    this.message1.value++;
    this.stream1$.next(this.message1);
  }

  public sendMessage2() {
    this.message2.value++;
    this.stream2$.next(this.message2);
  }
}
