import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Usuario 1', country: 'País 1' },
    { id: 2, name: 'Usuario 2', country: 'País 2' },
    // Agrega más datos según sea necesario
  ];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex((u) => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter((user) => user.id !== userId);
  }
}
