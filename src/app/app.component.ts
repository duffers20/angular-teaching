import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userList: {id: number; name: string; username: string }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userList = this.userService.getUsers();
  }
}
