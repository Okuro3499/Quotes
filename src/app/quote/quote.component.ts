import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    { id: 1, name: 'Love For All, Hatred For None.', description: 'by Khalifatul Masih III' },
    { id: 2, name: 'Die with memories, not dreams', description: 'by T.S Eliot' },
    { id: 3, name: 'Simplicity is the ultimate sophistication.', description: 'by Leonardo da Vinci' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
