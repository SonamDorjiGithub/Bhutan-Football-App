import { TestBed } from '@angular/core/testing';

import { UploadpicService } from './uploadpic.service';

describe('UploadpicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadpicService = TestBed.get(UploadpicService);
    expect(service).toBeTruthy();
  });
});
