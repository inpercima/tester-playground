import { TestBed } from '@angular/core/testing';
import { Apollo, ApolloModule } from 'apollo-angular';

import { MissionSimpleService } from './mission-simple.service';

describe('MissionSimpleService', () => {
  let service: MissionSimpleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApolloModule
      ],
      providers: [
        Apollo
      ]
    }).compileComponents();
    service = TestBed.inject(MissionSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
