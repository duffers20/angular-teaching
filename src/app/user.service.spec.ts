import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('calling getUsers returns list of users', () => {
      const expected: {id: number; name: string; username: string }[] = [
        { id: 1, name: 'James Bond', username: 'james' },
        { id: 2, name: 'Jaws', username: 'jaws' }
      ];

      const actual = service.getUsers();

      expect(actual).toEqual(expected);
    });
  });
});
