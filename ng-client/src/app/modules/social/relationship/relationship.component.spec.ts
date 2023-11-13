import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RelationshipComponent } from './relationship.component';
import {  of }  from 'rxjs';
import axios from 'axios';
describe('RelationshipComponent', () => {
  let component: RelationshipComponent;
  let fixture: ComponentFixture<RelationshipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RelationshipComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it ('should send a request', () => {
    // spyOn(axios, 'post').and.returnValue(of<any>('success'));

    // spyOn(axios, 'post').and.returnValue({data: 'Success'});
  })
});
