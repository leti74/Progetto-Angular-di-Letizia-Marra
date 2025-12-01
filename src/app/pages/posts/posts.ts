import { Component, OnInit } from '@angular/core';
import { PostItem } from "../../components/post-item/post-item";
import { UsersServices } from '../../services/users-service';
import { Post } from '../../models/post.model';
import { Button } from '../../components/button/button';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddPostDialog } from './components-posts/add-post-dialog/add-post-dialog';
@Component({
  selector: 'app-posts',
  imports: [PostItem, Button, ReactiveFormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  posts: Post[]= []
  allPosts: Post[]=[]

  postsForm!: FormGroup

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
    this.usersService.getAllPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
  this.allPosts= posts

  let completed = 0
      this.posts.forEach((post) => {

        this.usersService.getUserById(post.user_id).subscribe(user => {
          post.userName = user?.name ?? 'Unknown';
        });


        this.usersService.getCommentsByPost(post.id).subscribe((comments) => {
          post.comments = comments;
          completed++
        });
        if(completed === this.posts.length){
          this.applyFilters()
        }
       
      });
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
