import { TestBed } from '@angular/core/testing';
import { Apollo, ApolloModule } from 'apollo-angular';

import { BookSimpleService } from './book-simple.service';

describe('BookSimpleService', () => {
  let service: BookSimpleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApolloModule
      ],
      providers: [
        Apollo
      ]
    }).compileComponents();
    service = TestBed.inject(BookSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
