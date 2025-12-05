import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { Post } from '../../models/post.model';
import { UserComment } from '../../models/comment.model';
import { UsersServices } from '../../services/users-service';

@Component({
  selector: 'app-post-item',
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css'
})
export class PostItem implements OnInit {

@Input()post!: Post
commentForm!: FormGroup;

constructor(private usersService: UsersServices){}

ngOnInit(): void {
 

  this.commentForm = new FormGroup({
    body: new FormControl('', Validators.required)
  })
}




addComment(postId: number) {
  const body = this.commentForm.value.body;
  if (!body) return;

  this.usersService.addComment(postId, body).subscribe((newComment) => {
    
    if (newComment) {
      console.log(newComment)
      this.post.comments?.push(newComment);} 

    this.commentForm.reset();
  });
}

deleteComment( commentId: number) {
  const confirmed = window.confirm("⚠️ Vuoi davvero eliminare questo commento?");
  if (!confirmed) return;

  this.usersService.deleteComment(commentId).subscribe(() => {
    
   
      this.post.comments = this.post.comments?.filter((c) => c.id !== commentId);
  
  });
}
 
}
