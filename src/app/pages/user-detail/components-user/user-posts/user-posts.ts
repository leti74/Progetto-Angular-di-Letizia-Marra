import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Post } from '../../../../models/post.model';
import { UsersServices } from '../../../../services/users-service';

import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PostItem } from "../../../../components/post-item/post-item";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    PostItem, 
    MatProgressSpinnerModule
],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.css',
})
export class UserPosts implements OnInit {

  @Input() userID!: number;
  posts: Post[] = [];
  isLoading: boolean = false; 
 

  constructor(private usersService: UsersServices) {}

  ngOnInit(): void {
    this.loadPosts();

  }

  loadPosts() {
    this.isLoading = true;
  
    this.usersService.getPostsByUser(this.userID).subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
        let completed = 0;
  
        if(posts.length === 0){
          this.isLoading = false;
        }
  
        this.posts.forEach(post => {
          this.usersService.getCommentsByPost(post.id).subscribe({
            next: comments => {
              post.comments = comments;
              completed++;
              if(completed === this.posts.length) {
                this.isLoading = false;
              }
            },
            error: () => { completed++; if(completed === this.posts.length) this.isLoading = false; }
          });
        });
      },
      error: () => this.isLoading = false
    });
  }
  

}
