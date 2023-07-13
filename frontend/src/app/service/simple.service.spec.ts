import { TestBed } from '@angular/core/testing';
import { Apollo, ApolloModule } from 'apollo-angular';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  let service: SimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloModule],
      providers: [Apollo],
    }).compileComponents();
    service = TestBed.inject(SimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
