import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPostComponent } from './component-post.component';

describe('ComponentPostComponent', () => {
  let component: ComponentPostComponent;
  let fixture: ComponentFixture<ComponentPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentPostComponent]
    });
    fixture = TestBed.createComponent(ComponentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
