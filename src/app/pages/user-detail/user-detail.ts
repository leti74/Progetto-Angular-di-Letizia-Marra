import { Component, input, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UsersServices } from '../../services/users-service';
import { UserMainInfo } from "./components-user/user-main-info/user-main-info";
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { Posts } from "../posts/posts";
import { UserPosts } from './components-user/user-posts/user-posts';
import { PostItem } from '../../components/post-item/post-item';


@Component({
  selector: 'app-user-detail',
  imports: [MatButtonModule, MatCardModule, MatIcon, CommonModule, UserMainInfo, Posts, UserPosts, PostItem],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit  {
  user!: User 
  id!: number

  constructor(private usersService: UsersServices, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'))
    this.usersService.getUserById(this.id).subscribe((data: any)=> {
      console.log(data)
      this.user= data
    })
  }


}
