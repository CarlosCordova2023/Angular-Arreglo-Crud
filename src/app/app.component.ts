import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = this.userService.getUsers();
  title = 'crud-app';

  constructor(private userService: UserService) {}
}
