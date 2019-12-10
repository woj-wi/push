import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GrandComponent } from './grand/grand.component';
import { ChildComponent } from './child/child.component';
import {ParentOnPushComponent} from './parent/parent-onpush.component';
import {ParentDefaultComponent} from './parent/parent-default.component';

@NgModule({
  declarations: [
    AppComponent,
    GrandComponent,
    ParentDefaultComponent,
    ChildComponent,
    ParentOnPushComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
