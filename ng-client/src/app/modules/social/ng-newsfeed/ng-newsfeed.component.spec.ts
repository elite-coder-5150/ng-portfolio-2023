import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNewsfeedComponent } from './ng-newsfeed.component';

describe('NgNewsfeedComponent', () => {
  let component: NgNewsfeedComponent;
  let fixture: ComponentFixture<NgNewsfeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgNewsfeedComponent]
    });
    fixture = TestBed.createComponent(NgNewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
