import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FactappComponent } from './fact/fact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FactappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'faktorial';
}
