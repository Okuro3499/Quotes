import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    new Quote(1, 'Love For All, Hatred For None.', 'by Khalifatul Masih III'),
    new Quote(2, 'Die with memories, not dreams', 'by T.S Eliot'),
    new Quote(3, 'Simplicity is the ultimate sophistication.', 'by Leonardo da Vinci'),
  ];
}
