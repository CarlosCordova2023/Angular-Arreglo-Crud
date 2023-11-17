import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[]=[];
selectedUser: User = { id: 0, name: '', country: '' }; // Nuevo atributo para almacenar el usuario seleccionado

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  addUser(user: User): void {
    this.userService.addUser(user);
  }

  updateUser(updatedUser: User): void {
    // this.userService.updateUser(updatedUser);
    console.log('Actualizar usuario:', this.selectedUser);
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId);
  }

 selectUser(user: User): void {
    this.selectedUser = { ...user }; // Copiar el usuario para evitar la vinculación bidireccional
  }

  clearSelection(): void {
    this.selectedUser = { id: 0, name: '', country: '' };
  }





}
