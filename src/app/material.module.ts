import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatSliderModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatSliderModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class MaterialModule { }
