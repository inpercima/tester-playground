import { TestBed } from '@angular/core/testing';
import { Apollo, ApolloModule } from 'apollo-angular';

import { CodegenService } from './codegen.service';

describe('CodegenService', () => {
  let service: CodegenService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApolloModule
      ],
      providers: [
        Apollo
      ],
    }).compileComponents();
    service = TestBed.inject(CodegenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
