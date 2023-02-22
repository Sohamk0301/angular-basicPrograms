import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  title = 'Soham here!';

  getData() {
    return 'This is getData function , known as interpolation';
  }

  val = 'return value using this keyword!';
  getData1() {
    //return with the help of this keyword
    return this.val;
  }

  obj = { name: 'Soham', age: '21' };

  a = 5;
  b = 2;

  i = 100;
  j = 50;
  GetAdd() {
    alert(this.i + this.j);
  }

  GetValuebyParam(name: any) {
    alert(name);
  }

  strName = '';
  GetValue1(val: any) {
    console.warn(val);
    this.strName = val;
  }

  // number1: any = 0;
  // number2 = 0;
  // sum = 0;
  // calc(num1: any, num2: any) {
  //   this.sum = parseFloat(num1) + parseFloat(num2);
  // }
}
