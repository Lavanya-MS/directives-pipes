import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesComponent } from '../Directives/attribute-directives/attribute-directives.component';
import { CustomComponent } from '../Directives/custom/custom.component';
import { StructuralDirectivesComponent } from '../Directives/structural-directives/structural-directives.component';
import { BuiltInPipesComponent } from '../Pipes/built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from '../Pipes/custom-pipes/custom-pipes.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  
  {
    path:"",
    component:DashboardComponent,
    children:[
      {
        path:"structural",
        component:StructuralDirectivesComponent
      },
      {
        path:"attribute",
        component:AttributeDirectivesComponent
      },
      {
        path:"custom",
        component:CustomComponent
      },
      {
        path:"pipes",
        component:BuiltInPipesComponent
      },
      {
        path:"customPipe",
        component:CustomPipesComponent
    
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
