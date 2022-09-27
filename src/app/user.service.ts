import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: {id: number; name: string; username: string }[] = [
    { id: 1, name: 'James Bond', username: 'james' },
    { id: 2, name: 'Jaws', username: 'jaws' }
  ];

  constructor() { }

  getUsers(): {id: number; name: string; username: string }[] {
    return this.userData;
  }
}
