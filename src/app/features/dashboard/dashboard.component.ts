import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'aag-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: any[] = [];
  
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(
      books => this.books = books
    )
  }

}
