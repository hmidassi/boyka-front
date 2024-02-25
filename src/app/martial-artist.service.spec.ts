import { TestBed } from '@angular/core/testing';

import { MartialArtistService } from './martial-artist.service';

describe('MartialArtistService', () => {
  let service: MartialArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MartialArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
