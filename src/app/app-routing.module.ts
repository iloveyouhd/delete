import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyLetterComponent } from './daily-letter/daily-letter.component';
import { EnterNameComponent } from './enter-name/enter-name.component';
import { NotYouComponent } from './not-you/not-you.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: EnterNameComponent },
  { path: 'daily-letter', component: DailyLetterComponent },
  { path: 'not-you', component: NotYouComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
