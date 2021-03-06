import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Love For All, Hatred For None.', 'by Khalifatul Masih III', new Date(2005, 4, 20)),
    new Quote(2, 'Die with memories, not dreams', 'by T.S Eliot', new Date(2010, 2, 10)),
    new Quote(3, 'Simplicity is the ultimate sophistication.', 'by Leonardo da Vinci', new Date(1998, 6, 10)),
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      // tslint:disable-next-line: prefer-const && semicolon
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete) {
        // tslint:disable-next-line: semicolon
        this.quotes.splice(index, 1)
      }
    }
  }

  addNewQuote(quote) {
    // tslint:disable-next-line: prefer-const
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    // tslint:disable-next-line: semicolon
    quote.completeDate = new Date(quote.completeDate)
    // tslint:disable-next-line: semicolon
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
