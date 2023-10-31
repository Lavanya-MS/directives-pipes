import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralDirectivesComponent } from './Directives/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './Directives/attribute-directives/attribute-directives.component';
import { CustomeDirective } from './Directives/custome.directive';
import { CustomPipe } from './Pipes/custom.pipe';

import { BuiltInPipesComponent } from './Pipes/built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './Pipes/custom-pipes/custom-pipes.component';
import { CommonModule } from '@angular/common';
import { ParametrizedCustomPipe } from './Pipes/parametrized-custom.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomComponent } from './Directives/custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    CustomeDirective,
    CustomPipe,   
    BuiltInPipesComponent,
    CustomPipesComponent,
    ParametrizedCustomPipe,
    DashboardComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
