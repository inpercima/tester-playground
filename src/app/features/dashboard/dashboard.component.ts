import { Component, OnInit } from '@angular/core';

import { BookCodegenService } from './book-codegen.service';
import { BookSimpleService } from './book-simple.service';
import { BookListQuery, SingleBookQuery } from 'src/graphql/generated/graphql';

@Component({
  selector: 'aag-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  booksSimple: any[] = [];
  booksCodegen!: BookListQuery['books'];
  singleBookSimple!: any;
  singleBookCodegen!: SingleBookQuery['book'];

  constructor(private booksCodegenService: BookCodegenService, private bookSimpleService: BookSimpleService) {}

  ngOnInit(): void {
    this.bookSimpleService.getAll().subscribe((books) => (this.booksSimple = books));
    this.booksCodegenService.getAll().subscribe((books) => (this.booksCodegen = books));
  }

  getSingleBook(): void {
    this.bookSimpleService.getSingleBook('9783960091417').subscribe((book) => (this.singleBookSimple = book));
    this.booksCodegenService.getSingleBook('9783960091417').subscribe((book) => (this.singleBookCodegen = book));
  }
}
