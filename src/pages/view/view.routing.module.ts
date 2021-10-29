import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewPageComponent } from "./view.component";


const routes: Routes = [
    {
      path: '',
      component: ViewPageComponent,
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewPageRoutingModule { }