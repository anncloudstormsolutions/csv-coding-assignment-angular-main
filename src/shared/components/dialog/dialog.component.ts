import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-common-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  data: any;
  constructor( private dialogRef: MatDialogRef<DialogComponent>,
                @Inject(MAT_DIALOG_DATA) data) {
   this.data = data;
  }
  ngOnInit() {
    
  }

  close(onclose?: any) {
    if(onclose){
      onclose();
    }
    this.dialogRef.close();
  }

  save(onsave?: any) {
    if(onsave){
      onsave();
    }
    this.dialogRef.close();
  }

}