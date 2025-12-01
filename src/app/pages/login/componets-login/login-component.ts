import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../../auth/auth-service';
import { Router, RouterModule } from '@angular/router';
import { UsersServices } from '../../../services/users-service';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-login-component',
  imports: [MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent implements OnInit {


constructor(private authService: AuthService, private router: Router, private userService:UsersServices){}

loginForm!: FormGroup;
errorMsg= '';
loading = false;

ngOnInit(): void {
this.loginForm = new FormGroup(
  {
    token: new FormControl('',Validators.required)
  }
)
}


onLogin(){
  const token = this.loginForm.value.token

  if(!token){
this.errorMsg= 'Please enter a valid token'
return
  }

  this.loading = true;
  this.errorMsg = '';
  this.authService.validateToken(token).subscribe((res)=>{
if(res){

  
  this.authService.saveToken(token);
  this.authService.createUserCurrent().subscribe(() => {
    this.router.navigate(['users']);
  })
  

 
}else{
  this.loading= false;
  this.errorMsg = 'Invalid token. Please check and try again.'
}
  })

}
}
