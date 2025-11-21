import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Post } from '../../../../models/post.model';
import { UsersServices } from '../../../../services/users-service';
import { UserComment } from '../../../../models/comment.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.css',
})
export class UserPosts implements OnInit {

  @Input() userID!: number;

  posts: Post[] = [];
  commentForm!: FormGroup;

  constructor(private usersService: UsersServices) {}

  ngOnInit(): void {
    this.loadPosts();

    this.commentForm = new FormGroup({
      body: new FormControl('', Validators.required)
    });
  }

  loadPosts() {
    this.usersService.getPostsByUser(this.userID).subscribe((posts: Post[]) => {
      this.posts = posts;

      this.posts.forEach((post) => {
        this.usersService.getCommentsByPost(post.id).subscribe((comments) => {
          post.comments = comments;
        });
      });
    });
  }

  addComment(postId: number) {
    const body = this.commentForm.value.body;
    if (!body) return;

    this.usersService.addComment(postId, body).subscribe((newComment: any) => {

      const post = this.posts.find((p) => p.id === postId);
      if (post) post.comments?.push(newComment);

      this.commentForm.reset();
    });
  }

  deleteComment(postId: number, commentId: number) {
    const confirmed = window.confirm("⚠️ Vuoi davvero eliminare questo commento?");
    if (!confirmed) return;

    this.usersService.deleteComment(commentId).subscribe(() => {
      const post = this.posts.find((p) => p.id === postId);
      if (post) {
        post.comments = post.comments?.filter((c) => c.id !== commentId);
      }
    });
  }
}
