import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  // tslint:disable-next-line: quotemark
  newQuote = new Quote(0, "", "", new Date());
  constructor() { }

  ngOnInit(): void {
  }

}
