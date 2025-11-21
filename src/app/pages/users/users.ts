import { Component, OnInit, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
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
    MatIcon, 
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
      nameEmail: new FormControl('')
    });

  
    this.usersService.getUsers().subscribe((data) => {
      this.allUsers = data;
      this.users.set(data);
    });

    
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

  goToUserDetail(id: number) {
    this.router.navigate(['user', id]);
  }

  addUser() {
    const dialogRef = this.dialog.open(AddUserDialog, {
      width:'400px'
    })

    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        console.log(result)
        this.usersService.addUser(result).subscribe((newUser: any)=>{
          this.users.set([...this.users(), newUser])
        })
      }
    })
  }

  userDelete(id: number) {
    const newUsers = this.users().filter((u) => u.id !== id);
    this.users.set(newUsers);
  }
}
