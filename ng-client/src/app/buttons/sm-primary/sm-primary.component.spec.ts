import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmPrimaryComponent } from './sm-primary.component';

describe('SmPrimaryComponent', () => {
  let component: SmPrimaryComponent;
  let fixture: ComponentFixture<SmPrimaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmPrimaryComponent]
    });
    fixture = TestBed.createComponent(SmPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
