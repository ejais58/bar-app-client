import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetterRoutingModule } from './letter-routing.module';
import { LetterComponent } from './page/letter/letter.component';


@NgModule({
  declarations: [
    LetterComponent
  ],
  imports: [
    CommonModule,
    LetterRoutingModule
  ]
})
export class LetterModule { }
