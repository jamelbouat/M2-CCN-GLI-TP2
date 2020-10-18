import { TestBed } from '@angular/core/testing';

import { PokemonShareInformationService } from './pokemon-share-information.service';

describe('PokemonShareInformationService', () => {
  let service: PokemonShareInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonShareInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
