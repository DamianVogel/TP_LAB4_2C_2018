import { TestBed } from '@angular/core/testing';

import { GuardarAvatarService } from './guardar-avatar.service';

describe('GuardarAvatarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardarAvatarService = TestBed.get(GuardarAvatarService);
    expect(service).toBeTruthy();
  });
});
