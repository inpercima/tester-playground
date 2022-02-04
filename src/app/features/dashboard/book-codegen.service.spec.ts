import { TestBed } from '@angular/core/testing';

import { BookCodegenService } from './book-codegen.service';

describe('BookCodegenService', () => {
  let service: BookCodegenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCodegenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
