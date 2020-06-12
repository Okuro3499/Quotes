import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    { id: 1, name: 'Love For All, Hatred For None.' },
    { id: 2, name: 'Die with memories, not dreams' },
    { id: 3, name: 'Simplicity is the ultimate sophistication.' },
  ];
}
