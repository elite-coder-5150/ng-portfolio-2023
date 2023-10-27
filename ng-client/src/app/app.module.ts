import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialModule } from './modules/social/social.module';
import { TaskManagerModule } from './modules/task-manager/task-manager.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialModule,
    TaskManagerModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
