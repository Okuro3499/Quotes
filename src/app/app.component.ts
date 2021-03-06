import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    new Quote(1, 'Love For All, Hatred For None.', 'by Khalifatul Masih III', new Date(2005, 4, 20)),
    new Quote(2, 'Die with memories, not dreams', 'by T.S Eliot', new Date(2010, 2, 10)),
    new Quote(3, 'Simplicity is the ultimate sophistication.', 'by Leonardo da Vinci', new Date(1998, 6, 10)),
  ];
}
