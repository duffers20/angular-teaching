import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from "./user.service";
import SpyObj = jasmine.SpyObj;

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let fakeUserService: SpyObj<UserService>;

  beforeEach(async () => {
    fakeUserService = jasmine.createSpyObj('fake user service', ['getUsers']);
    fakeUserService.getUsers.and.returnValues([
      { id: 100, name: 'Fake User 1', username: 'fake1' },
      { id: 200, name: 'Fake User 2', username: 'fake2' }
    ]);

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: UserService, useValue: fakeUserService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call the userService getUsers method when instantiated', () => {
    expect(fakeUserService.getUsers).toHaveBeenCalled();
  });

  it('should display a list of users', () => {
    const userListItems = fixture.nativeElement.querySelectorAll('li') as HTMLLIElement[];

    expect(userListItems.length).toBe(2);
    expect(userListItems[0].textContent).toEqual('100 - Fake User 1 - fake1');
    expect(userListItems[1].textContent).toEqual('200 - Fake User 2 - fake2');
  });
});
