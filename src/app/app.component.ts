import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RMDBigData';
  input1: number;
  input2: number;
  operator: string;
  answer: number;
  Calculate() {
    if (this.input1 && this.input2 && this.operator) {
      if (this.operator == '+')
        this.answer = +this.input1 + +this.input2;
      if (this.operator == '-')
        this.answer = this.input1 - this.input2;
      if (this.operator == '*')
        this.answer = this.input1 * this.input2;
      if (this.operator == '/')
        this.answer = this.input1 / this.input2;
    }
  }
}
