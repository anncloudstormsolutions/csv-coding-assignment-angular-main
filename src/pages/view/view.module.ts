
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {CommonModule} from '@angular/common';
import { ViewPageComponent } from './view.component';
import { ViewPageRoutingModule } from './view.routing.module';



@NgModule({
  declarations: [
    ViewPageComponent
  ],
  exports: [
    ViewPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ViewPageRoutingModule
  ]
})

export class ViewPageModule {}
