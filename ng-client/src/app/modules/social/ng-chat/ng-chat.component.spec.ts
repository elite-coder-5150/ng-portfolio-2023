import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChatComponent } from './ng-chat.component';

describe('NgChatComponent', () => {
  let component: NgChatComponent;
  let fixture: ComponentFixture<NgChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgChatComponent]
    });
    fixture = TestBed.createComponent(NgChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
