import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {   MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
