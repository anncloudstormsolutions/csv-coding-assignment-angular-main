import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DetailPageModule } from 'src/pages/detail/detail.module';
import { ViewPageModule } from 'src/pages/view/view.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogComponent } from 'src/shared/components/dialog/dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DetailPageModule,
    ViewPageModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
