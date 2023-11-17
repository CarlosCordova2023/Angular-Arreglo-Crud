// src/app/menu/menu.component.ts

import { Component, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() users: User[] = [];
}
