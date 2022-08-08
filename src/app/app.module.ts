import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnterNameComponent } from './enter-name/enter-name.component';
import { FormsModule } from '@angular/forms';
import { DailyLetterComponent } from './daily-letter/daily-letter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotYouComponent } from './not-you/not-you.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterNameComponent,
    DailyLetterComponent,
    PageNotFoundComponent,
    NotYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
