import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuralDirectivesComponent } from './Directives/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './Directives/attribute-directives/attribute-directives.component';
import { BuiltInPipesComponent } from './Pipes/built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './Pipes/custom-pipes/custom-pipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomComponent } from './Directives/custom/custom.component';

const routes: Routes = [
  {
    path:"home",
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
