import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetterComponent } from './page/letter/letter.component';

const routes: Routes = [
  {
    path: '',
    component: LetterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetterRoutingModule { }
