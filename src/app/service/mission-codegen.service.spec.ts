import { TestBed } from '@angular/core/testing';
import { Apollo, ApolloModule } from 'apollo-angular';

import { MissionCodegenService } from './mission-codegen.service';

describe('BookCodegenService', () => {
  let service: MissionCodegenService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApolloModule
      ],
      providers: [
        Apollo
      ],
    }).compileComponents();
    service = TestBed.inject(MissionCodegenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
