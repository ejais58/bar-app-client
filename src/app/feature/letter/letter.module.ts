import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetterRoutingModule } from './letter-routing.module';
import { LetterComponent } from './page/letter/letter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    LetterComponent
  ],
  imports: [
    CommonModule,
    LetterRoutingModule,
    MatCardModule,
    SharedModule
  ]
})
export class LetterModule { }
