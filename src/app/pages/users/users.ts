import { Component, OnInit, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Button } from "../../components/button/button";
import { UserCard } from "./componets-users/user-card/user-card";
import { User } from '../../models/user.model';
import { UsersServices } from '../../services/users-service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialog } from './componets-users/add-user-dialog/add-user-dialog';

@Component({
  selector: 'app-users',
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    MatButtonModule, 
    MatCardModule, 
    CommonModule, 
    Button, 
    UserCard
  ],
  templateUrl: './users.html',
  styleUrl: './users.css',
})

export class Users implements OnInit {
  usersForm!: FormGroup;
  users = signal<User[]>([]);
  allUsers: User[] = [];

  constructor(private usersService: UsersServices, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.usersForm = new FormGroup({
      nameEmail: new FormControl(''),
      forPage: new FormControl(10)
    });
    
    this.loadUsers()

    this.usersForm.get('forPage')?.valueChanges.subscribe(()=> {
      this.loadUsers()
    })

  
    this.usersForm.get('nameEmail')?.valueChanges
      .pipe(
        debounceTime(300),         
        distinctUntilChanged()     
      )
      .subscribe((query: string) => {
        const q = query.trim().toLowerCase();

        if (!q) {
          this.users.set(this.allUsers);
          return;
        }

        const filtered = this.allUsers.filter(
          (user) =>
            user.name.toLowerCase().includes(q) ||
            user.email.toLowerCase().includes(q)
        );

        this.users.set(filtered);
      });
  }

  loadUsers(page: number = 1){
    const forPage= this.usersForm.get('forPage')?.value || 10
    this.usersService.getUsers(page, forPage).subscribe(users => {
      this.allUsers=users
      this.users.set(users)
    })

  }

  goToUserDetail(id: number) {
    this.router.navigate(['user', id]);
  }

  addUser() {
    const dialogRef = this.dialog.open<any>(AddUserDialog, {
      width:'400px'
    })


    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        console.log(result)
        this.usersService.addUser(result).subscribe((newUser: User| null)=>{
          if(newUser){
            const updatedUsers = [newUser, ...this.users()];
            this.allUsers = updatedUsers; 
            this.users.set(updatedUsers);
          }
          
        })
      }
    })
  }

  userDelete(id: number) {
    const newUsers = this.users().filter((u) => u.id !== id);
    this.users.set(newUsers);
  }
}
