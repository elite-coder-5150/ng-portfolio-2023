import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRtChatComponent } from './ng-rt-chat.component';

describe('NgRtChatComponent', () => {
  let component: NgRtChatComponent;
  let fixture: ComponentFixture<NgRtChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgRtChatComponent]
    });
    fixture = TestBed.createComponent(NgRtChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
