import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Love For All, Hatred For None.', 'by Khalifatul Masih III'),
    new Quote(2, 'Die with memories, not dreams', 'by T.S Eliot'),
    new Quote(3, 'Simplicity is the ultimate sophistication.', 'by Leonardo da Vinci'),
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
