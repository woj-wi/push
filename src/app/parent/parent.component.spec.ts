import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDefaultComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentDefaultComponent;
  let fixture: ComponentFixture<ParentDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
