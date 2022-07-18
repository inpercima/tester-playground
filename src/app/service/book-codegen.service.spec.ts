import { TestBed } from '@angular/core/testing';
import { Apollo, ApolloModule } from 'apollo-angular';

import { BookCodegenService } from './book-codegen.service';

describe('BookCodegenService', () => {
  let service: BookCodegenService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApolloModule
      ],
      providers: [
        Apollo
      ],
    }).compileComponents();
    service = TestBed.inject(BookCodegenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
