import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { DialogComponent } from 'src/shared/components/dialog/dialog.component';


export interface DialogConfig {
    title: string; 
    message: string; 
    buttons: any;
    panelClass?: string;
}

@Injectable({
    providedIn: 'root'
})
export class DialogServiceProvider {

    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) { 
    }

    openDialog(config: DialogConfig) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = config;
        dialogConfig.panelClass = config.panelClass;

        this.dialog.open(DialogComponent, dialogConfig);
    }

    showToast(message: string, panelClass?: string, duration = 5) {
        this._snackBar.open(message, '', {
            duration: duration*1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            panelClass: panelClass && [panelClass] || null
        });
    }
}