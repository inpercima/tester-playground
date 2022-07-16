import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { BookListQuery, SingleBookQuery } from 'src/graphql/graphql';
import { BookCodegenService } from './service/book-codegen.service';
import { BookSimpleService } from './service/book-simple.service';

@Component({
  selector: 'aag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public appname: string;
  booksSimple: any[] = [];
  booksCodegen!: BookListQuery['books'];
  singleBookSimple!: any;
  singleBookCodegen!: SingleBookQuery['book'];

  /**
   * Adds the custom theme to the app root.
   * For overlays the OverlayContainer like in the constructor is used.
   * For dialogs the panelClass of the configuration must added manually like
   *
   * const dialogConfig = new MatDialogConfig();
   * dialogConfig.panelClass = `${environment.theme}-theme`;
   */
  @HostBinding('class') class = `${environment.theme}-theme`;

  public constructor(private titleService: Title, public overlayContainer: OverlayContainer,
    private booksCodegenService: BookCodegenService, private bookSimpleService: BookSimpleService) {
    this.appname = environment.appname;
    this.titleService.setTitle(this.appname);
    this.overlayContainer.getContainerElement().classList.add(`${environment.theme}-theme`);
  }

  ngOnInit(): void {
    this.bookSimpleService.getAll().subscribe((books) => (this.booksSimple = books));
    this.booksCodegenService.getAll().subscribe((books) => (this.booksCodegen = books));
  }

  getSingleBook(): void {
    this.bookSimpleService.getSingleBook('9783960091417').subscribe((book) => (this.singleBookSimple = book));
    this.booksCodegenService.getSingleBook('9783960091417').subscribe((book) => (this.singleBookCodegen = book));
  }
}
