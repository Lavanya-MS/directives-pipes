import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent {
  applySpecialStyle: boolean = true;

  applyClass1: boolean = true;
  applyClass2: boolean = false;

  getColor(condition: boolean): string {
    return condition ? 'red' : 'blue';
  }
  
  classObject = {
    'bg-red': false,
    'text-italic': true,
    'border-green': true,
    'font-family':true
    
  };

  classesToApply = ['class3', 'class4'];


  applyCustomStyle: boolean = true;

  customStyle = {
    'background-color': 'lightblue',
    'font-size': '18px',
    'color': 'red'
  };

  getDynamicStyle(condition: boolean) {
    return {
      'background-color': condition ? 'green' : 'white',
      'color': condition ? 'white' : 'black'
    };
  }


  


}
