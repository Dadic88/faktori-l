import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fact.component.html',
  styleUrl: './fact.component.scss',
})
export class FactappComponent implements OnInit {
  a = 5;
  f = 1;
  i = 1;
  s = '';
  constructor() {}

  ngOnInit() {}
  factorial() {
    for (this.i = 1; this.i <= this.a; this.i++) {
      this.f = this.f * this.i;
    }
  }
}
