import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.scss']
})
export class BuiltInPipesComponent {

  currentDate: Date = new Date();

  amount: number = 1234.56;

  piValue: number = Math.PI;

  num1: number = 2.98

  successRate: number = 0.82;

}
