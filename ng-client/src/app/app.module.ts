import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialModule } from './modules/social/social.module';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewTaskFormComponent } from './modules/task-manager/new-task-form/new-task-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { ButtonComponent } from './button/button.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    NewTaskFormComponent,
    HeaderComponent,
    FooterComponent,
    CustomCheckboxComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
