import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isMac: boolean;
  notificationsOn: boolean;
  constructor(private snackBar: MatSnackBar) { }

  showSnackbar(){
    if (this.notificationsOn){
      const message = 'Animation complete. Choose another command.';
      const action = 'Disable this Notification Bar';
      let snackbarRef = this.snackBar.open(message, action, {duration: 2700});
      snackbarRef.onAction().subscribe(() => {
        this.notificationsOn = false;
      })
    }
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
