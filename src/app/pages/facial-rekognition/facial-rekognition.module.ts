import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacialRekognitionRoutingModule } from './facial-rekognition-routing.module';
import { FacialRekognitionComponent } from './facial-rekognition.component';


@NgModule({
  declarations: [FacialRekognitionComponent],
  imports: [
    CommonModule,
    FacialRekognitionRoutingModule
  ]
})
export class FacialRekognitionModule { }
