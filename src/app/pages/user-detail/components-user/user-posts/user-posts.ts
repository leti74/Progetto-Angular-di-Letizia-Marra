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
    PostItem
],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.css',
})
export class UserPosts implements OnInit {

  @Input() userID!: number;
  posts: Post[] = [];
 

  constructor(private usersService: UsersServices) {}

  ngOnInit(): void {
    this.loadPosts();

  }

  loadPosts() {
    this.usersService.getPostsByUser(this.userID).subscribe((posts: Post[]) => {
      this.posts = posts;
      console.log(posts)

      this.posts.forEach((post) => {
        this.usersService.getCommentsByPost(post.id).subscribe((comments) => {
          post.comments = comments;
        });
      });
    });
  }

}
