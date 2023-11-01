import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ng-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm?: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      'name': ['', [
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(30)]],
      'email': ['', [
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(30),
        Validators.email]],
      'subject': ['', [
        Validators.required, 
        Validators.minLength(15),
        Validators.maxLength(255)]],
      'message': ['', [
        Validators.required, 
        Validators.minLength(  15 ), 
        Validators.maxLength(500)]], 
    })
  }

  onSubmit() {
    if (this.contactForm?.valid) {
      console.log(this.contactForm.value);
    }
  }
}
