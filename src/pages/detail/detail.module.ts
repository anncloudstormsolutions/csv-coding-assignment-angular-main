
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {CommonModule} from '@angular/common';
import { DetailPageComponent } from './detail.component';
import { DetailPageRoutingModule } from './detail.routing.module';



@NgModule({
  declarations: [
    DetailPageComponent
  ],
  exports: [
    DetailPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    DetailPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
})

export class DetailPageModule {}
