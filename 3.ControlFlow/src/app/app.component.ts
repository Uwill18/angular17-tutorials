import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '3.ControlFlow';

  a: number = 2;
  b: number = 3;
  c: number = 4;

  items = [
    { id: 1, name: 'First Item' },
    { id: 2, name: 'Second Item' },
    { id: 3, name: 'Third Item' },
  ];

  grade: string = 'A';
}
