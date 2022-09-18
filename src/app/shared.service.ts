import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  showBanner: boolean;
  constructor(private snackBar: MatSnackBar) { }

  showSnackbar(){
    this.showSnackbarCssStyles('Animation complete. Choose another command.','','4000');
  }

  showSnackbarCssStyles(content, action, duration) {
    let sb = this.snackBar.open(content, action, {
      duration: duration,
      panelClass: ["custom-style"]
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }
}
