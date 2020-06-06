import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacialRekognitionComponent } from './facial-rekognition.component';

const routes: Routes = [{ path: '', component: FacialRekognitionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacialRekognitionRoutingModule { }
