import { Component, OnInit } from '@angular/core';
import { PostItem } from "../../components/post-item/post-item";
import { UsersServices } from '../../services/users-service';
import { Post } from '../../models/post.model';
import { Button } from '../../components/button/button';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddPostDialog } from './components-posts/add-post-dialog/add-post-dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-posts',
  imports: [PostItem, ReactiveFormsModule, Button, MatProgressSpinnerModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  posts: Post[]= []
  allPosts: Post[]=[]
  postsForm!: FormGroup
  isLoading: boolean= false;

  constructor(private usersService: UsersServices, private dialog: MatDialog){}

  ngOnInit(): void {
     this.postsForm= new FormGroup({
      searchText: new FormControl(''),
    forPage: new FormControl (10)
    })


    this.loadPosts()

    this.postsForm.valueChanges.subscribe(() => {
      this.applyFilters();
    })
  }

  loadPosts() {
    this.isLoading = true; // inizio loading
  
    this.usersService.getAllPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
        this.allPosts = posts;
  
        let completed = 0;
        if(posts.length === 0){
          this.isLoading = false; 
        }
  
        this.posts.forEach(post => {
          this.usersService.getCommentsByPost(post.id).subscribe(comments => {
            post.comments = comments;
            completed++;
            if(completed === this.posts.length) {
              this.applyFilters();
              this.isLoading = false; 
            }
          });
        });
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false; 
      }
    });
  }
  
  

  applyFilters() {
    const text = this.postsForm.value.searchText?.toLowerCase() || '';
    const limit = this.postsForm.value.forPage;
  
    this.posts = this.allPosts
      .filter(p =>
        p.title.toLowerCase().includes(text) ||
        p.body.toLowerCase().includes(text)
      )
      .slice(0, limit);
  }


  
  addPost() {
    
      const dialogRef = this.dialog.open(AddPostDialog, {
        width:"400px",
      })

      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.usersService.addNewPost(result).subscribe(()=> {
            this.loadPosts()
          })
        }
      })
   
   

   
  }

}
