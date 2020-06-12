import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  constructor() { }

  @Input() quote: Quote;
  @Output() iscomplete = new EventEmitter<boolean>();

  downvote = 0;
  upvote = 0;

  quoteDelete(complete: boolean) {
    this.iscomplete.emit(complete);
  }

  voteDown() {
    this.downvote = this.downvote + 1;
  }

  voteUp() {
    this.upvote = this.upvote + 1;
  }

  ngOnInit(): void {
  }

}
