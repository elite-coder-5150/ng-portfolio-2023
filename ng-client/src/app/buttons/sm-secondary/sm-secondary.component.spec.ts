import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmSecondaryComponent } from './sm-secondary.component';

describe('SmSecondaryComponent', () => {
  let component: SmSecondaryComponent;
  let fixture: ComponentFixture<SmSecondaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmSecondaryComponent]
    });
    fixture = TestBed.createComponent(SmSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
