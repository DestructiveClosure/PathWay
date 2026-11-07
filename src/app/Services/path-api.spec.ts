import { TestBed } from '@angular/core/testing';
import { PathApi } from './path-api';

describe('PathApi', () => {
  let service: PathApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
