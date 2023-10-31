import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {
  isLoggedIn: boolean = true;
 
  ProductList:string[] = ['Android','Apple IOS','Mac','Windows']

  Day:number = 6;

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32
    },
    {
      "name": "Day  Meyers",
      "age": 21
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34
    },
    {
      "name": "Cook  Tyson",
      "age": 32
    }
  ];

  public name: string = "Lavanya";

  changeState(){
    this.isLoggedIn = !this.isLoggedIn
  }

}
