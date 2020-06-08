import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate, private _snackBar: MatSnackBar) {
    swUpdate.available.subscribe((event) => {
      console.log('Update available');
      this.openSnackBar('Uma atualização está disponível!', 'Atualizar');
    })
  }

  activateUpdate() {
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }

  openSnackBar(message: string, action: string) {
    const snackbar = this._snackBar.open(message, action, {
      duration: 600000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    snackbar.onAction().subscribe(event => this.swUpdate.activateUpdate().then(() => document.location.reload()))
  }
}
